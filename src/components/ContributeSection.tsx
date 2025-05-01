
import { useEffect } from 'react';
import { HandHeart, Users, Factory, Lightbulb } from 'lucide-react';

const ContributeSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animated-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contribuir" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contribuir con Enerpy</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Únete a nuestra misión de transformar la gestión de residuos y revolucionar el mundo de la energía sostenible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contributionOptions.map((option, index) => (
            <ContributionCard 
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto animated-section">
          <div className="bg-gradient-to-r from-enerpy-dark to-enerpy-primary rounded-xl p-10 text-white shadow-xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Conviértete en Parte del Cambio</h3>
            <p className="text-lg mb-8 text-white/90">
              Juntos podemos crear un futuro más sostenible y una economía más circular que beneficie a las generaciones venideras.
            </p>
            <a 
              href="/contacto" 
              className="inline-block px-8 py-4 bg-white text-enerpy-primary hover:bg-gray-100 rounded-md transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContributionCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <div 
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center animated-section"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-enerpy-light/20 rounded-full mb-6 mx-auto text-enerpy-primary">
      <Icon size={30} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-enerpy-gray/80">{description}</p>
  </div>
);

const contributionOptions = [
  {
    icon: HandHeart,
    title: "Alianzas",
    description: "Establece alianzas estratégicas con nosotros para implementar proyectos sostenibles."
  },
  {
    icon: Users,
    title: "Inversión",
    description: "Invierte en el futuro de la energía sostenible y la gestión de residuos."
  },
  {
    icon: Factory,
    title: "Implementación",
    description: "Implementa nuestra tecnología en tu empresa o comunidad para reducir la huella ambiental."
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Colabora en el desarrollo de nuevas aplicaciones para nuestra tecnología patentada."
  }
];

export default ContributeSection;
