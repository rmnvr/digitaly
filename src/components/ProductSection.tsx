const ProductSection = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4 md:px-8">
      {/* Premier bloc : Image + Texte */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-[400px]">

          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Une approche innovante</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Deuxième bloc : Vidéo remplacée par un rectangle */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Placeholder Vidéo 1</span>
          </div>
        </div>
      </div>

      {/* Troisième bloc : Texte + Image */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900">Une solution complète</h2>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
          <div className="relative w-full h-[400px]">

          </div>
        </div>
      </div>

      {/* Quatrième bloc : Vidéo remplacée par un rectangle */}
      <div className="max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Placeholder Vidéo 2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 