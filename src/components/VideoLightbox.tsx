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

    if (!isOpen) return null;

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
                        <div className="prose max-w-none">
                            <p className="text-gray-700 text-base">
                                {description || defaultDescription}
                            </p>
                        </div>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                                    <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Conception du script & storyboard
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                                    <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Création graphique
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                                    <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Animation, voix-off & sound design
                            </li>
                        </ul>
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
                                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&controls=1&rel=0&showinfo=0`}
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