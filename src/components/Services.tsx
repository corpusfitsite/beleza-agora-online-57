
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Corte & Escova",
      description: "Cortes modernos e personalizados com escova profissional",
      price: "A partir de R$ 80",
      duration: "1h - 1h30",
      image: "photo-1649972904349-6e44c42644a7",
      featured: false
    },
    {
      title: "Coloração Premium",
      description: "Técnicas avançadas de coloração com produtos de alta qualidade",
      price: "A partir de R$ 150",
      duration: "2h - 3h",
      image: "photo-1581091226825-a6a2a5aee158",
      featured: true
    },
    {
      title: "Hidratação & Nutrição",
      description: "Tratamentos intensivos para cabelos danificados e ressecados",
      price: "A partir de R$ 120",
      duration: "1h30 - 2h",
      image: "photo-1721322800607-8c38375eef04",
      featured: false
    },
    {
      title: "Manicure & Pedicure",
      description: "Cuidado completo para suas unhas com esmaltação perfeita",
      price: "A partir de R$ 45",
      duration: "45min - 1h",
      image: "photo-1649972904349-6e44c42644a7",
      featured: false
    },
    {
      title: "Sobrancelha Design",
      description: "Design personalizado que realça sua beleza natural",
      price: "A partir de R$ 35",
      duration: "30min - 45min",
      image: "photo-1581091226825-a6a2a5aee158",
      featured: false
    },
    {
      title: "Pacote Noiva",
      description: "Experiência completa para o seu dia especial",
      price: "A partir de R$ 350",
      duration: "3h - 4h",
      image: "photo-1721322800607-8c38375eef04",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com técnicas modernas 
            e produtos de alta qualidade para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                service.featured ? 'ring-2 ring-rose-300 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-rose-500 to-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img 
                  src={`https://images.unsplash.com/${service.image}?w=400&h=300&fit=crop`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-gold-400" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-lg font-bold text-rose-600">
                    {service.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white transition-all duration-300"
                  >
                    Agendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-rose-400 text-rose-700 hover:bg-rose-50 px-8 py-4 font-medium transition-all duration-300"
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
