
import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-gold-50 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-rose-300" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-gold-400" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-rose-200" />
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block">Bella</span>
            <span className="bg-gradient-to-r from-rose-500 to-gold-500 bg-clip-text text-transparent">
              Vita
            </span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme sua beleza em nossa experiência única de cuidado e bem-estar
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Agendar Horário
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold-400 text-gold-700 hover:bg-gold-50 px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              Nossos Serviços
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gold-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-inter text-sm font-medium ml-2">
              Avaliação 5.0 • Mais de 1000 clientes satisfeitas
            </span>
          </div>
        </div>
      </div>
      
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-gold-100/20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
