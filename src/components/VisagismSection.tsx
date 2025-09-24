import visagismStyle from "/img/estilo-cap.webp";
import visagismTechnology from "/img/tecnologia-cap.webp";

const VisagismSection = () => {
  const features = [
    {
      image: visagismStyle,
      title: "Estilo",
      description: "Análise completa do seu formato de rosto e características faciais para encontrar o design perfeito"
    },
    {
      image: "/img/autenticidade-cap.webp",
      title: "Autenticidade",
      description: "Harmonia perfeita entre sua personalidade única e a escolha dos óculos ideais"
    },
    {
      image: visagismTechnology,
      title: "Tecnologia",
      description: "Lentes de última geração com proteção avançada para máximo conforto e saúde ocular"
    }
  ];

  return (
    <section id="visagismo" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            O que é o Visagismo Óptico?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-blue rounded-full mx-auto"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            O visagismo óptico é um conceito que considera suas características faciais, 
            estilo de vida e preferências estéticas para recomendar armações que harmonizem 
            com seu rosto e transmitam a imagem que você deseja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="elegant-card text-center group hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300 border-2 border-accent-blue/30">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} - Visagismo óptico`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-3xl font-bold text-white mb-4">
            Sua Imagem Reflete Sua Personalidade
          </h3>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Através do visagismo óptico, criamos uma harmonia perfeita entre seus traços únicos 
            e os óculos ideais, garantindo que você se sinta confiante e autêntico.
          </p>
          <a
            href="https://wa.me/5511997712138?text=Olá, vim pelo site da Cátia Pinheiro, e gostaria de mais informações!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Descobrir Meu Estilo
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisagismSection;