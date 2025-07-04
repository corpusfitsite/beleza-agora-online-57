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
      content: "456 Random Street, Random City, RC",
      action: "https://www.google.com/maps?q=51.508112,-0.075949"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Seg-Sex: 9h-19h | Sáb: 8h-17h",
      action: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/bellavita_oficial" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/bellavita_oficial" },
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
                          target={info.action.startsWith("http") ? "_blank" : undefined}
                          rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
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
                      target="_blank"
                      rel="noopener noreferrer"
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
            {/* Google Maps Embed usando coordenadas (Tower of London) */}
            <Card className="overflow-hidden animate-fade-in relative h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps?q=51.508112,-0.075949&hl=pt-BR&z=15&output=embed"
                title="Localização Aleatória - Tower of London"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                {/* <MapPin className="w-12 h-12 text-rose-400 mb-2" />
                <p className="font-inter text-white drop-shadow-lg">
                  Local aleatório: Tower of London, Londres
                </p> */}
              </div>
            </Card>

            {/* Botão para abrir o mapa no Google Maps */}
            <div className="text-center">
              <a
                href="https://www.google.com/maps?q=51.508112,-0.075949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-gold-500 text-white px-6 py-3 rounded-full font-inter font-medium hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span>Ver no Google Maps</span>
              </a>
            </div>

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
