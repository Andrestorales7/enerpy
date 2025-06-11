import { Flame, Droplets, Zap, Wind } from 'lucide-react';

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

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Productos Obtenidos</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Transformamos residuos en productos de alto valor energético y ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark">Energía del Futuro</h3>
            <p className="text-lg text-enerpy-gray">
              Nuestra tecnología RMO® permite obtener múltiples productos energéticos de alta calidad, 
              contribuyendo a la transición hacia una economía más sostenible y circular.
            </p>
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
              src="/images/productos.jpg" 
              alt="Productos Energéticos" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 