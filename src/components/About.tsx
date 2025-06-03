
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10k+",
      label: "Clientes Satisfeitas",
      color: "text-rose-500"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      color: "text-gold-500"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Taxa de Satisfação",
      color: "text-rose-500"
    },
    {
      icon: Clock,
      number: "50k+",
      label: "Atendimentos Realizados",
      color: "text-gold-500"
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre o{" "}
              <span className="bg-gradient-to-r from-rose-500 to-gold-500 bg-clip-text text-transparent">
                Bella Vita
              </span>
            </h2>
            
            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de 15 anos, o Bella Vita tem sido sinônimo de excelência e inovação 
              no mundo da beleza. Nossa missão é realçar a beleza única de cada cliente, 
              proporcionando uma experiência incomparável de cuidado e bem-estar.
            </p>
            
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Com uma equipe de profissionais altamente qualificados e produtos de última 
              geração, oferecemos serviços personalizados que respeitam sua individualidade 
              e destacam sua beleza natural.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span className="font-inter text-gray-700">Profissionais certificados e especializados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                <span className="font-inter text-gray-700">Produtos premium e dermatologicamente testados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span className="font-inter text-gray-700">Ambiente relaxante e acolhedor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                <span className="font-inter text-gray-700">Atendimento personalizado e exclusivo</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=700&fit=crop"
                alt="Interior do salão Bella Vita"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-gold-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-playfair text-2xl font-bold text-gray-800">5.0</div>
                    <div className="font-inter text-sm text-gray-600">Avaliação média</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
