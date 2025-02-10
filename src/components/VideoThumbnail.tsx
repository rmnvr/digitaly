import React from 'react';
import Image from 'next/image';

interface VideoThumbnailProps {
  videoId: string;
  isActive: boolean;
  onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, isActive, onClick }) => {
  return (
    <div className="video-container mt-8 flex justify-center items-center relative">
      {isActive ? (
        <iframe
          width="350"
          height="230"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`Video ${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        />
      ) : (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`Thumbnail for video ${videoId}`}
          width={350}
          height={230}
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default VideoThumbnail; 