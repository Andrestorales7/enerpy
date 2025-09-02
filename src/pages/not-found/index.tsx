import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center bg-gradient-to-br from-enerpy-primary to-enerpy-dark py-20">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-lg mb-8 text-gray-200">
            La página que buscas no existe o ha sido movida.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-white text-enerpy-primary hover:bg-gray-100">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
