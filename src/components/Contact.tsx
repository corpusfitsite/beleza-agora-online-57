
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890",
      action: "tel:+551134567890"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@bellavita.com.br",
      action: "mailto:contato@bellavita.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Seg-Sex: 9h-19h | Sáb: 8h-17h",
      action: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-rose-500 to-gold-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Agende seu horário e venha viver uma experiência única de beleza e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="font-inter text-gray-600 hover:text-rose-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-inter text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-4">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="w-10 h-10 bg-gradient-to-br from-rose-500 to-gold-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            <Card className="overflow-hidden animate-fade-in">
              <div className="relative h-64 lg:h-80 bg-gradient-to-br from-rose-100 to-gold-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-rose-400 mx-auto mb-4" />
                    <p className="font-inter text-gray-600">
                      Clique para ver nossa localização no Google Maps
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-rose-500 to-gold-500 text-white border-0 animate-fade-in">
              <CardContent className="p-8 text-center">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                  Pronta para se Transformar?
                </h3>
                <p className="font-inter text-lg mb-6 opacity-90">
                  Agende agora mesmo seu horário e descubra como podemos realçar sua beleza natural.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-4 font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar pelo WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 font-medium transition-all duration-300"
                  >
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
