import { Eye, MessageCircle, ArrowRight } from "lucide-react";
const ServiceCards = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll('.service-card-gold, .service-card-silver');
    
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };
  return <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background elements in gold and silver */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl animate-float-up"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-silver/20 rounded-full blur-3xl animate-float-up" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-accent-gold/10 rounded-full blur-3xl animate-float-up" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold/15 text-primary text-sm font-semibold rounded-full mb-6 border border-accent-gold/30">
            <Eye size={18} className="text-accent-gold" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Transforme sua
            <span className="block text-accent-gold">imagem visual</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções personalizadas para que você encontre os óculos perfeitos
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" onMouseMove={handleMouseMove}>
          {/* Service 1 - Silver Card with Enhanced Background */}
          <div className="group relative">
            {/* Floating background elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-700">
              <div className="absolute top-4 right-8 w-16 h-16 bg-accent-silver/30 rounded-full blur-2xl shadow-lg shadow-accent-silver/30 transition-all duration-500"></div>
              <div className="absolute bottom-8 left-4 w-24 h-24 bg-gradient-to-br from-accent-silver-light/40 to-accent-silver/20 rounded-full blur-2xl shadow-md transition-all duration-700" style={{transitionDelay: '0.2s'}}></div>
            </div>
            <div className="service-card-silver h-full relative">
              {/* Background pattern overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-50 group-hover:opacity-90 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-silver/10 via-white/10 to-accent-silver-dark/10"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, rgba(192, 192, 192, 0.12) 0%, transparent 60%), 
                                   radial-gradient(circle at 80% 70%, rgba(169, 169, 169, 0.10) 0%, transparent 60%),
                                   linear-gradient(135deg, rgba(192, 192, 192, 0.04) 0%, rgba(169, 169, 169, 0.08) 100%)`
                }}></div>
              </div>
              <div className="service-card-silver-content">
                {/* Content */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent-silver-dark transition-colors duration-300 leading-tight">
                    Atendimento Presencial
                    <span className="block text-xl font-semibold text-accent-silver-dark mt-1">Consultoria Gratuita</span>
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
            <div className="service-card-gold h-full relative before:absolute before:inset-0 before:rounded-3xl before:p-[3px] before:bg-gradient-to-br before:from-accent-gold before:via-accent-gold-light before:to-accent-gold-dark before:transition-all before:duration-500 group-hover:before:shadow-xl group-hover:before:shadow-accent-gold/30 after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:transform after:-translate-x-full group-hover:after:translate-x-full after:transition-transform after:duration-800 after:pointer-events-none">
              {/* Luxury background pattern */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-50 group-hover:opacity-90 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/8 via-transparent to-accent-gold-dark/12"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.12) 0%, transparent 50%), 
                                   radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.08) 0%, transparent 50%),
                                   radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.06) 0%, transparent 70%),
                                   linear-gradient(135deg, rgba(255, 215, 0, 0.03) 0%, rgba(255, 193, 7, 0.06) 50%, rgba(255, 215, 0, 0.02) 100%)`
                }}></div>
                {/* Subtle geometric pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 215, 0, 0.02) 35px, rgba(255, 215, 0, 0.02) 70px)`
                }}></div>
              </div>
              
              <div className="relative bg-white/96 backdrop-blur-sm rounded-3xl h-full p-8 border-2 border-transparent bg-gradient-to-br from-white via-accent-gold/5 to-white/92 group-hover:border-accent-gold/30 group-hover:bg-white/98 transition-all duration-500 z-10 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-gold/15">
                
                {/* Premium content */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent-gold-dark transition-colors duration-300 relative leading-tight">
                    Consultoria Premium
                    <span className="block text-xl font-semibold text-accent-gold-dark mt-1">Visagismo Personalizado</span>
                    
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/10 via-accent-gold-light/10 to-accent-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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
                  <span>Agendar Consultoria Premium</span>
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