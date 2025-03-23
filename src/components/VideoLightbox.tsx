'use client'

import React, { Suspense } from 'react';

interface VideoLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    videoId?: string;
    title?: string;
}

// Create a mapping for the components
const componentMap: Record<string, React.LazyExoticComponent<React.FC<{ description?: string; defaultDescription: string }>>> = {
    'GLvYkmyYcKY': React.lazy(() => import('./videoData/AgeDorVideo')),
    'zfkLExgz6D8': React.lazy(() => import('./videoData/VittoriVideo')),
    'sk1bz-QY0IQ': React.lazy(() => import('./videoData/GrrranitVideo')),
    'MP-RS9Tr7BY': React.lazy(() => import('./videoData/CapebVideo')),
};

const VideoLightbox: React.FC<VideoLightboxProps> = ({
    isOpen,
    onClose,
    videoId,
    title,
}) => {
    if (!isOpen) return null;

    // Use the mapping to get the component to render
    const ComponentToRender = videoId ? componentMap[videoId] : null;

    return (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-50 flex items-center justify-center p-4">
            <div className="bg-[#FFFCF9] w-[90%] max-w-[1200px] max-h-[90vh] rounded-[32px] overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 z-20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="flex flex-col lg:flex-row gap-8 p-8">
                    {/* Section description */}
                    <div className="flex-1 lg:max-w-[45%]">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        {ComponentToRender && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ComponentToRender defaultDescription="Default description here" />
                            </Suspense>
                        )}
                        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-base hover:bg-gray-800 transition-colors">
                            Demander un devis
                        </button>
                    </div>

                    {/* Section vidéo */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&controls=1&rel=0&showinfo=0`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLightbox;