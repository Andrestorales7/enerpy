
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-enerpy-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-3xl font-montserrat font-bold">
                <span className="text-white">ENER</span>
                <span className="text-enerpy-light">Py</span>
              </span>
            </div>
            <p className="mb-6 text-white/80">
              Transformando residuos en energía sostenible para un futuro más limpio y próspero.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#inicio">Inicio</FooterLink>
              <FooterLink href="#que-hacemos">¿Qué Hacemos?</FooterLink>
              <FooterLink href="#tecnologia">Tecnología RMO®</FooterLink>
              <FooterLink href="#impacto">Impacto Ambiental</FooterLink>
              <FooterLink href="#historia">Historia</FooterLink>
              <FooterLink href="#contribuir">Contribuir</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-enerpy-light" />
                <span className="text-white/80">Asunción, Paraguay</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-enerpy-light" />
                <span className="text-white/80">+595 XXX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-enerpy-light" />
                <span className="text-white/80">contacto@enerpy.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
            <p className="mb-4 text-white/80">Recibe nuestras últimas novedades y actualizaciones</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-enerpy-light"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-enerpy-primary hover:bg-enerpy-light transition-colors duration-300 rounded-md"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">&copy; {new Date().getFullYear()} ENERPY S.A.C.I. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enerpy-primary transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-white/80 hover:text-enerpy-light transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

export default Footer;
