import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Recycle, Zap, CheckCircle } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'IN',
    title: 'IN',
    subtitle: 'Entrada de Residuos',
    description: 'Los residuos (RSU, Biomasa, Plásticos, RAEE, Pallets, etc) se introducen dentro del reactor.',
    icon: <Recycle className="w-12 h-12" />,
    backgroundImage: '/images/produccion.jpg',
    color: 'from-gray-600/80 to-slate-700/80'
  },
  {
    id: 'RMO',
    title: 'RMO',
    subtitle: 'Proceso de Transformación',
    description: 'El RMO descompone las moléculas sin oxígeno, sin humo, sin contaminación.',
    icon: <Zap className="w-12 h-12" />,
    backgroundImage: '/images/separacion-purificacion.jpg',
    color: 'from-slate-500/70 to-gray-600/70'
  },
  {
    id: 'OUT',
    title: 'OUT',
    subtitle: 'Productos Resultantes',
    description: 'El resultado: nuevos productos y materia prima que vuelven a la economía. (Petróleo Sintético Ecológico, Gas Ecológico y Carbón)',
    icon: <CheckCircle className="w-12 h-12" />,
    backgroundImage: '/images/proceso-out.jpg',
    color: 'from-gray-700/80 to-green-800/80'
  }
];

const ProcesoRMO: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="relative bg-black">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden py-8">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 z-10" />
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center filter blur-sm"
              style={{ 
                backgroundImage: `url('/images/reactor2.jpg')`
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h2 
              variants={stepVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Tecnología
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}RMO
              </span>
            </motion.h2>
            
            <motion.p 
              variants={stepVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Un invento y desarrollo tecnológico disruptivo que colabora con la naturaleza 
              acelerando el proceso de degradación natural, pero millones de veces más rápido.
            </motion.p>

            <motion.div
              variants={stepVariants}
              className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-3xl mx-auto"
            >
              <p className="text-base text-gray-200">
                El Reactor de Materia Orgánica (RMO) es una tecnología patentada que transforma 
                todo tipo de desechos (excepto radioactivos y explosivos) en recursos valiosos 
                mediante un proceso único: <span className="text-blue-400 font-semibold">radiólisis fotónica focalizada.</span>
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={stepVariants}
              className="mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-white/60 text-sm mb-2">Cómo funciona</p>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent mx-auto"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps - Scroll Sections */}
      {processSteps.map((step, index) => (
        <section key={step.id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url('${step.backgroundImage}')` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`} />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content Side */}
              <div className={`text-white ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-8"
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-6xl md:text-8xl font-bold mb-4"
                >
                  {step.title}
                </motion.h3>

                <motion.h4
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-2xl md:text-3xl font-semibold mb-6 opacity-90"
                >
                  {step.subtitle}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg md:text-xl leading-relaxed bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8"
                >
                  {step.description}
                </motion.p>

                {/* Show button only for the last step (OUT) */}
                {index === processSteps.length - 1 && (
                  <motion.a
                    href="/tecnologia"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-emerald-600"
                  >
                    Explorar Tecnología RMO →
                  </motion.a>
                )}
              </div>

              {/* Visual Side */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden border-4 border-white/30">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${step.backgroundImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProcesoRMO;