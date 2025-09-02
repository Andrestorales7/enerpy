import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-enerpy-primary to-enerpy-dark py-20">
      <div className="container mx-auto px-4">


        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Información de Contacto</CardTitle>
                <CardDescription className="text-white/70">
                  Conecta con nuestro equipo de expertos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-enerpy-accent rounded-full">
                    <Mail className="h-6 w-6 text-enerpy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/80">contacto@enerpy.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-enerpy-accent rounded-full">
                    <Phone className="h-6 w-6 text-enerpy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Teléfono</p>
                    <p className="text-white/80">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-enerpy-accent rounded-full">
                    <MapPin className="h-6 w-6 text-enerpy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Oficina</p>
                    <p className="text-white/80">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Horarios de Atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-white/80">
                  <p><span className="font-semibold">Lunes - Viernes:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Sábados:</span> 9:00 AM - 1:00 PM</p>
                  <p><span className="font-semibold">Domingos:</span> Cerrado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envíanos un Mensaje</CardTitle>
              <CardDescription className="text-white/70">
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      Nombre
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Apellido
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Tu apellido"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Describe tu consulta o proyecto..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-enerpy-accent text-enerpy-dark hover:bg-enerpy-accent/90 font-semibold py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
