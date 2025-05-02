
import { useEffect } from 'react';
import { Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollToTop from '@/components/ScrollToTop';

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Update page title
    document.title = 'ENERPY - Contacto';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-enerpy-dark to-enerpy-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Contacto
            </h1>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">Ponte en contacto</h2>
                  <p className="text-enerpy-gray mb-8">
                    Estamos aquí para responder cualquier pregunta que puedas tener sobre nuestras tecnologías, servicios o posibles colaboraciones.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                      <p className="text-enerpy-gray">Av. Principal 123, Ciudad Empresarial, Paraguay</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-enerpy-gray">info@enerpy.com</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                      <p className="text-enerpy-gray">+595 (21) 555-1234</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Nombre completo" 
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Correo electrónico" 
                        required 
                      />
                    </div>
                    <div>
                      <Input 
                        type="text" 
                        placeholder="Asunto" 
                        required 
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tu mensaje" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full bg-enerpy-primary hover:bg-enerpy-dark">
                      <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Nuestra ubicación</h2>
              <div className="h-[400px] w-full bg-gray-200 rounded-xl flex items-center justify-center text-enerpy-gray">
                Mapa de ubicación (Integración de Google Maps)
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
