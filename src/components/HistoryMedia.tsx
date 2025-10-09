import React from 'react';
import { PlayCircle } from 'lucide-react';

type MediaItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url?: string;
};

const demoMedia: MediaItem[] = [
  {
    id: 'rmo-intro',
    title: 'Introducción al RMO',
    description: 'Cómo transforma residuos en materias primas y energía mediante radiólisis fotónica.',
    thumbnail: '/images/reactor2.jpg',
    url: '#'
  },
  {
    id: 'planta-piloto',
    title: 'Planta Piloto - Groningen',
    description: 'Recorrido por la planta piloto ubicada en Groningen Seaports, Países Bajos.',
    thumbnail: '/images/produccion.jpg',
    url: '#'
  },
  {
    id: 'economia-circular',
    title: 'Economía Circular en Acción',
    description: 'Resultados y productos obtenidos: petróleo sintético, gas ecológico y carbón.',
    thumbnail: '/images/recycle.jpg',
    url: '#'
  }
];

const HistoryMedia = ({ items = demoMedia }: { items?: MediaItem[] }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-enerpy-dark mb-4">Media</h3>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-6"></div>
          <p className="text-enerpy-gray max-w-3xl mx-auto">
            Videos y material audiovisual con descripciones detalladas sobre hitos, plantas y resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <article key={item.id} className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-green-100">
              <div className="relative h-56">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-4 py-2 rounded-full transition">
                    <PlayCircle className="w-5 h-5" /> Ver video
                  </span>
                </button>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-enerpy-dark mb-1">{item.title}</h4>
                <p className="text-sm text-enerpy-gray leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryMedia;


