import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL

// Define an interface for the YouTube video item
interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoIds = searchParams.get('videoIds');

  if (!videoIds) {
    return NextResponse.json({ error: 'No video IDs provided' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
      {
        headers: {
          'Referer': NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
        }
      }
    );
    const data = await response.json();
    console.log("DATA", data)
    // Use the defined type for mapping
    const videos: YouTubeVideo[] = data.items.map((item: { id: string; snippet: { title: string; description: string; }; }) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video info: ' + error }, { status: 500 });
  }
} 