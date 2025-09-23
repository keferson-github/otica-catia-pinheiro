import { Eye, MessageCircle, ArrowRight } from "lucide-react";
const ServiceCards = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll('.service-card-beige, .service-card-silver');
    
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };
  return <section id="servicos" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background elements in gold and silver */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-accent-beige/20 rounded-full blur-3xl animate-float-up"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-accent-silver/20 rounded-full blur-3xl animate-float-up" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-60 h-48 sm:h-60 bg-accent-beige/10 rounded-full blur-3xl animate-float-up" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-accent-beige/15 text-primary text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-accent-beige/30">
            <Eye size={16} className="text-accent-beige" />
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Transforme sua
            <span className="block highlight-beige">imagem visual</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções personalizadas para que você encontre os óculos perfeitos
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto" onMouseMove={handleMouseMove}>
          {/* Service 1 - Silver Card with Enhanced Background */}
          <div className="group relative">
            {/* Floating background elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-700">
              <div className="absolute top-4 right-8 w-16 h-16 bg-accent-silver/30 rounded-full blur-2xl shadow-lg shadow-accent-silver/30 transition-all duration-500"></div>
              <div className="absolute bottom-8 left-4 w-24 h-24 bg-gradient-to-br from-accent-silver-light/40 to-accent-silver/20 rounded-full blur-2xl shadow-md transition-all duration-700" style={{transitionDelay: '0.2s'}}></div>
            </div>
            <div className="service-card-silver h-full relative">
              {/* Overlay removido para máxima legibilidade */}
              <div className="service-card-silver-content">
                {/* Content */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent-silver-dark transition-colors duration-300 leading-tight">
                    Atendimento Presencial
                    <span className="block text-xl font-semibold mt-1" style={{color: '#232323', fontWeight: 700}}>Consultoria Gratuita</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                    Encontre os óculos ideais através da nossa consultoria especializada em visagismo óptico, com atendimento personalizado e sem custo.
                  </p>
                </div>
                
                {/* Features with silver bullets */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-silver rounded-full transition-all duration-300"></div>
                    Análise facial personalizada
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-silver rounded-full transition-all duration-300" style={{
                    transitionDelay: '0.1s'
                  }}></div>
                    Seleção de armações ideais
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-silver rounded-full transition-all duration-300" style={{
                    transitionDelay: '0.2s'
                  }}></div>
                    Lentes de alta qualidade
                  </div>
                </div>
                
                {/* CTA with elegant hover effect */}
                <a href="https://wa.me/5511997712138?text=Olá! Gostaria de solicitar óculos através da consultoria de visagismo." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-lg group-hover:bg-accent-silver-dark group-hover:gap-3 transition-all duration-300">
                  <span>Agendar Atendimento</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Service 2 - Premium Gold Card with Enhanced Background Effects */}
          <div className="group relative">
            <div className="service-card-beige h-full relative before:absolute before:inset-0 before:rounded-3xl before:p-[3px] before:bg-gradient-to-br before:from-accent-beige before:via-accent-beige-light before:to-accent-beige-dark before:transition-all before:duration-500 group-hover:before:shadow-xl group-hover:before:shadow-accent-beige/30 after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:transform after:-translate-x-full group-hover:after:translate-x-full after:transition-transform after:duration-800 after:pointer-events-none">
              {/* Luxury background pattern removido para máxima legibilidade */}
              
                <div className="premium-inner relative bg-white/96 backdrop-blur-sm rounded-3xl h-full p-8 border-2 border-transparent bg-gradient-to-br from-white via-accent-beige/5 to-white/92 group-hover:border-accent-beige/30 group-hover:bg-white/98 transition-all duration-500 z-10 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-beige/15">
                
                {/* Premium content */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent-beige-dark transition-colors duration-300 relative leading-tight">
                    Consultoria Premium
                    <span className="block text-xl font-semibold text-accent-beige-dark mt-1">Visagismo Personalizado</span>
                    
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-beige/10 via-accent-beige-light/10 to-accent-beige/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">Transformação completa da sua imagem através de análise detalhada das suas características faciais e estilo pessoal. Agende agora seu horário!</p>
                </div>
                
                {/* Premium features with gold bullets */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-gold rounded-full transition-all duration-300 shadow-lg shadow-accent-gold/50"></div>
                    Estudo do formato do rosto
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-gold rounded-full transition-all duration-300 shadow-lg shadow-accent-gold/50" style={{
                    transitionDelay: '0.1s'
                  }}></div>
                    Harmonização de cores
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 bg-accent-gold rounded-full transition-all duration-300 shadow-lg shadow-accent-gold/50" style={{
                    transitionDelay: '0.2s'
                  }}></div>
                    Consultoria personalizada
                  </div>
                </div>
                
                {/* Premium CTA with advanced effects */}
                <a href="https://wa.me/5511997712138?text=Olá! Gostaria de agendar uma consultoria de visagismo óptico." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-lg group-hover:bg-accent-gold-dark group-hover:gap-4 group-hover:shadow-xl group-hover:shadow-accent-gold/30 transition-all duration-300">
                  <span>Agendar Consultoria</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA with refined styling */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-accent-silver/20 rounded-full border border-accent-silver/30">
            <span className="text-sm text-muted-foreground">Tem dúvidas?</span>
            <a href="https://wa.me/5511997712138?text=Olá! Tenho dúvidas sobre os serviços." target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent-gold hover:text-accent-gold-dark transition-colors">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceCards;