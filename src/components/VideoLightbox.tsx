'use client'

interface VideoLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    videoId: string;
    title: string;
    description: string;
}

const VideoLightbox: React.FC<VideoLightboxProps> = ({
    isOpen,
    onClose,
    videoId,
    title,
    description
}) => {
    const defaultDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    const isMobile = window.innerWidth < 1024; // Détermine si l'écran est mobile
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            {
                isMobile && <button
                    onClick={onClose}
                    className="absolute top-4 right-6 p-2 bg-gray-100 rounded-full transition-colors duration-200 z-20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
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
            }

            <div className="bg-white rounded-lg w-full max-w-6xl h-[80vh] flex flex-col lg:flex-row overflow-hidden relative">
                {/* Bouton fermer positionné au-dessus de la lightbox */}
                {
                    !isMobile && <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
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
                }

                {/* Section vidéo */}
                <div className="flex-1 bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>

                {/* Section description */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700">
                            {description || defaultDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLightbox;