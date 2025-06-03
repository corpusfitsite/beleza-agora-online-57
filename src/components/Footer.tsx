
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-gold-400 bg-clip-text text-transparent">
                Bella Vita
              </span>
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed">
              Transformando beleza há mais de 15 anos com carinho, dedicação e profissionalismo.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-playfair text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-rose-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-rose-400 transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-rose-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-playfair text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-2 font-inter text-gray-300">
              <p>(11) 3456-7890</p>
              <p>contato@bellavita.com.br</p>
              <p>Rua das Flores, 123</p>
              <p>Vila Madalena, São Paulo - SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 font-inter text-gray-300">
            <p>
              © 2025 Bella Vita. Feito por{" "}
              <a
                href="https://www.cloudsphere.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                cloudsphere
              </a>
            </p>
            <Heart className="w-4 h-4 text-rose-400 fill-current" />
            <p>para realçar sua beleza.</p>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
