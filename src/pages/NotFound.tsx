
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = "Página no encontrada | ENERPY";
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-24">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-7xl font-bold mb-6 text-enerpy-primary">404</h1>
          <p className="text-2xl text-enerpy-gray mb-8">Lo sentimos, la página que buscas no existe.</p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-enerpy-primary hover:bg-enerpy-dark text-white rounded-md transition-colors duration-300"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
