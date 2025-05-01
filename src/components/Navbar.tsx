
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl lg:text-3xl font-montserrat font-bold">
            <span className="text-enerpy-dark">ENER</span>
            <span className="text-enerpy-primary">Py</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem label="Inicio" href="#inicio" isScrolled={isScrolled} />
          <NavItem label="¿Qué Hacemos?" href="#que-hacemos" isScrolled={isScrolled} />
          <NavItem label="Tecnología RMO®" href="#tecnologia" isScrolled={isScrolled} />
          <NavItem label="Impacto" href="#impacto" isScrolled={isScrolled} />
          <NavItem label="Historia" href="#historia" isScrolled={isScrolled} />
          <NavItem label="Contribuir" href="#contribuir" isScrolled={isScrolled} />
          <Link 
            to="/contacto" 
            className="px-4 py-2 bg-enerpy-primary hover:bg-enerpy-dark text-white rounded-md transition-colors duration-300"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-enerpy-gray' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-enerpy-gray' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden">
          <nav className="flex flex-col h-full p-6 space-y-6">
            <MobileNavItem label="Inicio" href="#inicio" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="¿Qué Hacemos?" href="#que-hacemos" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Tecnología RMO®" href="#tecnologia" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Impacto" href="#impacto" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Historia" href="#historia" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Contribuir" href="#contribuir" onClick={() => setIsMenuOpen(false)} />
            <Link 
              to="/contacto" 
              className="px-4 py-3 bg-enerpy-primary hover:bg-enerpy-dark text-white rounded-md transition-colors duration-300 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ label, href, isScrolled }: { label: string; href: string; isScrolled: boolean }) => (
  <a 
    href={href} 
    className={cn(
      'font-medium transition-colors duration-300 hover:text-enerpy-primary',
      isScrolled ? 'text-enerpy-gray' : 'text-white'
    )}
  >
    {label}
  </a>
);

const MobileNavItem = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => (
  <a 
    href={href}
    className="text-enerpy-gray font-medium text-lg border-b border-gray-100 pb-2"
    onClick={onClick}
  >
    {label}
  </a>
);

export default Navbar;
