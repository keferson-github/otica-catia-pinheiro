import professionalism from "@/assets/professionalism.jpg";
import frameSelection from "@/assets/frame-selection.jpg";

const Hero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navigation Pills */}
      <div className="absolute top-16 sm:top-20 md:top-24 left-2 sm:left-4 md:left-8 z-20">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-accent-silver/20 text-black text-xs sm:text-sm rounded-full border border-accent-silver/30">
            Visagismo
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-accent-gold/20 text-black text-xs sm:text-sm rounded-full border border-accent-gold/30">
            Qualidade
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-accent-silver/20 text-black text-xs sm:text-sm rounded-full border border-accent-silver/30 hidden sm:inline-block">
            Experiência
          </span>
        </div>
      </div>

      {/* WhatsApp CTA Button */}
      <div className="absolute top-6 sm:top-8 md:top-10 right-4 sm:right-6 md:right-12 lg:right-16 xl:right-20 z-20">
        <a 
          href="https://wa.me/5511997712138?text=Olá, vim pelo site da Cátia Pinheiro, e gostaria de mais informações!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 hover:bg-accent-gold transition-all duration-300 group text-xs sm:text-sm md:text-base"
        >
          <span className="hidden md:inline">Falar no nosso expert</span>
          <span className="hidden sm:inline md:hidden">Expert</span>
          <span className="sm:hidden">💬</span>
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-black transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </div>
        </a>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-none tracking-tight">
                <span className="block">DESCUBRA O</span>
                <span className="block">MUNDO ATRAVÉS</span>
                <span className="block">DE UMA</span>
                <span className="bg-gradient-to-r from-accent-gold to-accent-gold-dark bg-clip-text text-transparent block">
                  <span className="highlight-beige">NOVA LENTE</span>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Descubra óculos que definem sua identidade — combinando precisão técnica, design sofisticado e conforto excepcional.
              </p>
            </div>
            
            <button 
              onClick={scrollToConsultation}
              className="bg-black text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-medium hover:bg-accent-gold transition-all duration-300 flex items-center gap-2 sm:gap-3 group mx-auto lg:mx-0 text-sm sm:text-base"
            >
              Explorar produtos
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* Right Content - Main Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main professional image */}
              <div className="w-80 sm:w-96 md:w-[420px] lg:w-[480px] xl:w-[520px] h-[420px] sm:h-[480px] md:h-[550px] lg:h-[600px] xl:h-[750px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={professionalism} 
                  alt="Cátia Pinheiro - Especialista em Visagismo Óptico" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;