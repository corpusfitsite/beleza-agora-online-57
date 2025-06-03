import { Card } from "@/components/ui/card";
import { Instagram, Heart } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/images/image7.png",
      caption: "Transformação completa - Corte + Coloração",
      likes: 234
    },
    {
      id: 2,
      image: "/images/image8.png",
      caption: "Hidratação profunda - Resultado incrível",
      likes: 189
    },
    {
      id: 3,
      image: "/images/image9.png",
      caption: "Design de sobrancelhas - Olhar renovado",
      likes: 156
    },
    {
      id: 4,
      image: "/images/image10.png",
      caption: "Manicure artística - Arte nas unhas",
      likes: 278
    },
    {
      id: 5,
      image: "/images/image11.png",
      caption: "Corte moderno - Estilo contemporâneo",
      likes: 201
    },
    {
      id: 6,
      image: "/images/image12.png",
      caption: "Noiva radiante - Dia especial perfeito",
      likes: 342
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria de{" "}
            <span className="bg-gradient-to-r from-rose-500 to-gold-500 bg-clip-text text-transparent">
              Transformações
            </span>
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos mais recentes e se inspire para sua próxima transformação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image} // ← usa diretamente /images/imageX.png
                  alt={item.caption}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Caso falhe, exibe placeholder opcional
                    (e.currentTarget as HTMLImageElement).src = "/images/placeholder.png";
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-inter text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <div className="flex items-center gap-2 text-white">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <Instagram className="w-5 h-5 text-white hover:text-rose-300 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-gold-500 text-white px-6 py-3 rounded-full font-inter font-medium hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Instagram className="w-5 h-5" />
            <span>Siga @bellavita_oficial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
