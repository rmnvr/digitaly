import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  // Ajout de nouveaux champs
  duration: string;
  viewCount: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
}

type VideoItem = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: Record<string, { url: string; width?: number; height?: number }>;
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
  };
};


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoIds = searchParams.get('videoIds');

  if (!videoIds) {
    return NextResponse.json({ error: 'No video IDs provided' }, { status: 400 });
  }

  try {
    // Ajout de contentDetails et statistics dans les parts
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
        {
          headers: {
            'Referer': NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
          }
        }
    );

    const data = await response.json();

    const videos: YouTubeVideo[] = data.items.map((item: VideoItem) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      duration: item.contentDetails.duration,
      viewCount: item.statistics.viewCount,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails
    }));

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video info: ' + error }, { status: 500 });
  }
}