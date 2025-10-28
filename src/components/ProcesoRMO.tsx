import React from 'react';
import { motion } from 'framer-motion';
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
  // Simplified animation variants with correct TypeScript types
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="relative bg-black">
      {/* Header Section - Más Compacto */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/images/videobackground.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.h1 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
            >
              Tecnología{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                RMO
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Proceso revolucionario que transforma residuos en recursos
            </motion.p>

            {/* Scroll indicator más pequeño */}
            <motion.div
              variants={fadeUpVariants}
              className="pt-6"
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-blue-400 font-medium text-base">Descubre el proceso</p>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-0.5 h-8 bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps - Secciones Principales con Fondo Completo */}
      {processSteps.map((step, index) => (
        <section key={step.id} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Fondo de imagen completo */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url('${step.backgroundImage}')` }}
            />
            {/* Overlay más sutil para mejor visibilidad del contenido */}
            <div className="absolute inset-0 bg-black/60" />
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40`} />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="max-w-7xl mx-auto"
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`text-white ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="space-y-8"
                  >
                    {/* Título gigante y llamativo */}
                    <div className="space-y-4">
                      <motion.h2 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/90 leading-none"
                      >
                        {step.title}
                      </motion.h2>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {step.subtitle}
                      </h3>
                    </div>

                    {/* Descripción en card destacado */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                          {step.icon}
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-100 font-light">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* CTA Button mejorado para el último paso */}
                    {index === processSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="pt-6"
                      >
                        <motion.a
                          href="/tecnologia"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                        >
                          <span>Explorar Tecnología RMO</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Visual Enhancement Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="relative"
                  >
                    {/* Decorative elements */}
                    <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="aspect-[5/4] rounded-2xl overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${step.backgroundImage}')` }}
                        />
                      </div>
                    </div>
                    
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10 scale-110" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProcesoRMO;