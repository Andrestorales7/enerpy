
import React, { useState, useEffect, useCallback } from 'react';
import { Leaf, Globe, TreeDeciduous, Recycle } from 'lucide-react';
import StatCard from './StatCard';

interface ImpactStatsProps {
  onStartCounting?: () => void;
}

const ImpactStats = ({ onStartCounting }: ImpactStatsProps) => {
  const [counts, setCounts] = useState({
    tonsRecycled: 0,
    co2Reduced: 0,
    treesPlanted: 0,
    projectsImplemented: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const targets = {
    tonsRecycled: 3333,
    co2Reduced: 1813,
    treesPlanted: 4000,
    projectsImplemented: 6
  };

  const startCounting = useCallback(() => {
    if (hasAnimated) return; // Evita que se ejecute múltiples veces
    
    setHasAnimated(true);
    const duration = 2000; // ms
    const steps = 60;
    const interval = duration / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        tonsRecycled: Math.floor(progress * targets.tonsRecycled),
        co2Reduced: Math.floor(progress * targets.co2Reduced),
        treesPlanted: Math.floor(progress * targets.treesPlanted),
        projectsImplemented: Math.floor(progress * targets.projectsImplemented)
      });

      if (step === steps) {
        clearInterval(timer);
      }
    }, interval);
  }, [targets, hasAnimated]);

  useEffect(() => {
    // Create an IntersectionObserver to trigger counting when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('appear');
            startCounting();
            if (onStartCounting) {
              onStartCounting();
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const statsElement = document.getElementById('environmental-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, [onStartCounting, startCounting, hasAnimated]);

  return (
    <div id="environmental-stats" className="animated-section">
      <div className="bg-gradient-to-r from-enerpy-dark to-enerpy-primary rounded-xl p-10 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Impacto en Números</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={Recycle} value={counts.tonsRecycled} label="Toneladas Recicladas" />
          <StatCard icon={Leaf} value={counts.co2Reduced} label="Ton. de CO2 Evitadas" />
          <StatCard icon={TreeDeciduous} value={counts.treesPlanted} label="Árboles Plantados" />
          <StatCard icon={Globe} value={counts.projectsImplemented} label="Proyectos Implementados" />
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
