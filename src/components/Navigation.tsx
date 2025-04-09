'use client';
interface NavigationProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({ footerRef }) => {

  const handleClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 right-0 w-full z-50 p-4">
      <div className="flex justify-end items-center space-x-8 md:pr-8">
        <button className="md:my-1 px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-full text-base hover:bg-gray-800 transition-colors" onClick={handleClick}>
          Demander un devis
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 