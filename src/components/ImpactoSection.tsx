import React from 'react';
import { motion } from 'framer-motion';

const ImpactoSection: React.FC = () => {
  const stats = [
    {
      number: "+1,000",
      unit: "toneladas",
      description: "de residuos transformados en materias primas por año",
      icon: (
        <svg className="mx-auto drop-shadow-lg" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 18L31 18" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 23L31 23" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 28L31 28" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 13C18 13 20 11 23 11C26 11 28 13 28 13" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 33C28 33 26 35 23 35C20 35 18 33 18 33" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      number: "+2,640",
      unit: "ton. CO2",
      description: "capturado por año",
      icon: (
        <svg className="mx-auto drop-shadow-lg" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 27H19V45H27V27Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 37H1V45H9V37Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45 17H37V45H45V17Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 17L15 7L23 15L37 1" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 1H37V10" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      number: "+337",
      unit: "procesos",
      description: "de transformación implementados",
      icon: (
        <svg className="mx-auto drop-shadow-lg" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41 1H1V41H41V1Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 7H7V20H18V7Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 26H7V35H18V26Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 7H24V35H35V7Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-8 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/text-behind-image.png')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-green-900/50 to-gray-800/70" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-4 md:gap-0 xl:mt-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`md:p-8 lg:p-14 ${index > 0 ? 'md:border-l md:border-gray-200' : ''}`}
            >
              {stat.icon}
              <h3 className="mt-12 text-xl font-bold text-white drop-shadow-lg">
                {stat.number} {stat.unit}
              </h3>
              <p className="mt-5 text-base text-gray-100 drop-shadow-md">
                {stat.description}
              </p>
            </motion.div>
          ))}

          {/* ODS Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:p-8 lg:p-14 md:border-l md:border-gray-200"
          >
            <svg className="mx-auto drop-shadow-lg" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 1C9.059 1 1 9.059 1 19H19V1Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="22" cy="22" r="3" fill="#ffffff" />
              <path d="M28 16L34 22L28 28" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-white drop-shadow-lg">
              Alineado con los ODS
            </h3>
            <p className="mt-5 text-base text-gray-100 drop-shadow-md">
              Objetivos de Desarrollo Sostenible de la ONU para un futuro sostenible
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactoSection;