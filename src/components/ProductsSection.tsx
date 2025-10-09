import { Flame, Droplets, Zap, Wind } from 'lucide-react';
import { useState, useCallback } from 'react';
import { GradientDots } from '@/components/ui/gradient-dots';

const ProductsSection = () => {
  const products = [
    {
      icon: Flame,
      title: "Gas Ecológico",
      description: "Combustible limpio y eficiente para uso industrial y doméstico",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Droplets,
      title: "Aceites",
      description: "Aceites livianos y pesados de alta calidad para diversos usos industriales",
      color: "from-amber-500 to-yellow-400"
    },
    {
      icon: Zap,
      title: "Energía",
      description: "Energía eléctrica generada a partir de procesos sostenibles",
      color: "from-purple-500 to-indigo-400"
    },
    {
      icon: Wind,
      title: "Vapor",
      description: "Vapor de alta calidad para procesos industriales",
      color: "from-gray-500 to-gray-400"
    }
  ];

  // gallery images for right-side media
  const galleryImages = [
    '/images/carbon2.jpg',
    '/images/produccion.jpg',
    '/images/water-treatment.jpg',
    '/images/separacion-purificacion.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const goNext = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const goPrev = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Smooth transition gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-green-50/90 to-green-50/30 z-20" />
      
      <GradientDots 
        duration={20} 
        backgroundColor="#f0fdf4" 
        dotSize={6} 
        spacing={8}
        colorCycleDuration={8}
      />
      
      {/* Additional gradient overlay for smoother transition */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white/80 via-green-50/50 to-transparent z-10" />
      
      {/* Soft mask for dots fade-in */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent z-15" />
      
      <div className="relative z-30 container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-enerpy-dark">Productos Obtenidos</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Transformamos residuos en productos de alto valor energético y ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark mb-4">Energía del Futuro</h3>
              <p className="text-lg text-enerpy-gray leading-relaxed">
                Nuestra tecnología RMO® permite obtener múltiples productos energéticos de alta calidad, 
                contribuyendo a la transición hacia una economía más sostenible y circular.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{product.title}</h4>
                  <p className="text-sm text-enerpy-gray">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={galleryImages[currentImage]} 
              alt="Productos Energéticos" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            {/* Controls */}
            <button
              aria-label="Anterior"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition"
            >
              ‹
            </button>
            <button
              aria-label="Siguiente"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Ir a imagen ${idx + 1}`}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition border border-white/40 ${
                    currentImage === idx ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-green-50/90 to-green-50/30 z-20" />
      
      {/* Additional gradient overlay for smoother bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white/80 via-green-50/50 to-transparent z-10" />
      
      {/* Soft mask for dots fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent z-15" />
      
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0px 0px, 4px 6.928px, 0% 0%, 0% 0%, 0% 0%, 0% 6.928px;
          }
          100% {
            background-position: 0px 0px, 4px 6.928px, 400% 300%, 400% 300%, 400% 300%, 400% 6.928px;
          }
        }
        
        @keyframes colorCycle {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection; 