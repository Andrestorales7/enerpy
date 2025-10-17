import React from 'react';

interface SlideProps {
  backgroundImage: string;
  gradient: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  button?: React.ReactNode;
  imagePosition?: 'left' | 'right';
}

export const Slide: React.FC<SlideProps> = ({
  backgroundImage,
  gradient,
  icon,
  title,
  subtitle,
  description,
  button,
  imagePosition = 'right'
}) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-6 items-center ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Text Content */}
          <div className={`text-white ${imagePosition === 'left' ? 'lg:order-2' : ''}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full mb-3">
              {icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
            <h4 className="text-lg md:text-xl font-semibold mb-3 opacity-90">{subtitle}</h4>
            <p className="text-sm md:text-base leading-relaxed bg-black/30 backdrop-blur-sm rounded-xl p-3 mb-3">
              {description}
            </p>
            {button}
          </div>

          {/* Image */}
          <div className={`relative ${imagePosition === 'left' ? 'lg:order-1' : ''}`}>
            <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden border border-white/20">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface IntroSlideProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({
  backgroundImage,
  title,
  subtitle,
  description
}) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 z-10" />
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full bg-cover bg-center filter blur-sm"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">{subtitle}</p>
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <p className="text-xs md:text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </section>
  );
};
