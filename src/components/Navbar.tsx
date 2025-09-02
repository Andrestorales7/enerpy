import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
        : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl lg:text-3xl font-montserrat font-bold">
            <span className={cn(
              isScrolled ? 'text-enerpy-dark' : 'text-white'
            )}>ENER</span>
            <span className={cn(
              isScrolled ? 'text-enerpy-primary' : 'text-enerpy-light'
            )}>Py</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem label="Inicio" to="/" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavItem label="¿Qué Hacemos?" to="/que-hacemos" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavItem label="Tecnología RMO®" to="/tecnologia" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavItem label="Historia" to="/historia" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavItem label="Contribuir" to="/contribuir" isScrolled={isScrolled} isHomePage={isHomePage} />
          <Link 
            to="/contacto" 
            className={cn(
              "px-4 py-2 rounded-md transition-colors duration-300",
              isScrolled
                ? "bg-enerpy-primary hover:bg-enerpy-dark text-white"
                : "bg-white/20 hover:bg-white/30 text-white"
            )}
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
        <div className="fixed inset-0 top-[60px] bg-enerpy-dark/95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col h-full p-6 space-y-6">
            <MobileNavItem label="Inicio" to="/" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="¿Qué Hacemos?" to="/que-hacemos" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Tecnología RMO®" to="/tecnologia" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Historia" to="/historia" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Contribuir" to="/contribuir" onClick={() => setIsMenuOpen(false)} />
            <Link 
              to="/contacto" 
              className="px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors duration-300 w-full text-center"
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

const NavItem = ({ label, to, isScrolled, isHomePage }: { label: string; to: string; isScrolled: boolean; isHomePage: boolean }) => (
  <Link 
    to={to} 
    className={cn(
      'font-medium transition-colors duration-300',
      isScrolled 
        ? 'text-enerpy-gray hover:text-enerpy-primary'
        : 'text-white hover:text-enerpy-light'
    )}
  >
    {label}
  </Link>
);

const MobileNavItem = ({ label, to, onClick }: { label: string; to: string; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-white hover:text-enerpy-light font-medium transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
