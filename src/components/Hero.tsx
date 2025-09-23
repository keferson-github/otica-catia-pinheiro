import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import professionalism from "@/assets/professionalism.jpg";
import frameSelection from "@/assets/frame-selection.jpg";
import { useOptimizedVariants, useReducedMotion } from "@/hooks/useOptimizedAnimation";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Hooks de otimização
  const { shouldUseComplexAnimations } = useOptimizedVariants();
  const prefersReducedMotion = useReducedMotion();
  const { elementRef: heroRef, isVisible } = useScrollTrigger({
    threshold: 0.1,
    triggerOnce: false
  });

  // Efeitos parallax otimizados
  const y = useTransform(scrollYProgress, [0, 1], 
    shouldUseComplexAnimations ? ["0%", "50%"] : ["0%", "20%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Transformações condicionais para elementos específicos
  const yButton = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToConsultation = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ 
      behavior: shouldUseComplexAnimations ? 'smooth' : 'auto' 
    });
  };

  // Variantes de animação otimizadas
  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.2,
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: "easeOut" as const
      }
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.3 : 0.6, 
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1,
        delayChildren: prefersReducedMotion ? 0.1 : 0.3
      }
    }
  };

  return (
    <motion.section 
      ref={(el) => {
        ref.current = el;
        heroRef.current = el;
      }} 
      className="relative min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Navigation Pills */}
      <motion.div 
        className="absolute top-20 left-4 z-20 hidden sm:block"
        style={{ 
          y: shouldUseComplexAnimations ? y : 0, 
          opacity: shouldUseComplexAnimations ? opacity : 1 
        }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex flex-row gap-2">
          <motion.span 
            className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-silver/20 text-black text-sm rounded-full border border-accent-silver/30 text-center"
            variants={fadeInUp}
            custom={0}
          >
            Visagismo
          </motion.span>
          <motion.span 
            className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-gold/20 text-black text-sm rounded-full border border-accent-gold/30 text-center"
            variants={fadeInUp}
            custom={1}
          >
            Qualidade
          </motion.span>
          <motion.span 
            className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-silver/20 text-black text-sm rounded-full border border-accent-silver/30 inline-block"
            variants={fadeInUp}
            custom={2}
          >
            Experiência
          </motion.span>
        </div>
      </motion.div>

      {/* WhatsApp CTA Button */}
      <motion.div 
        className="hidden sm:block absolute top-20 md:top-26 lg:top-20 right-6 md:right-12 lg:right-16 xl:right-20 z-20"
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: prefersReducedMotion ? 0.2 : 0.8, 
          duration: prefersReducedMotion ? 0.3 : 0.6 
        }}
        style={{ 
          y: shouldUseComplexAnimations ? yButton : 0 
        }}
      >
        <a 
          href="https://wa.me/5511997712138?text=Olá, vim pelo site da Cátia Pinheiro, e gostaria de mais informações!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 hover:bg-accent-gold transition-all duration-300 group text-sm md:text-base shadow-2xl hover:shadow-2xl"
        >
          <span className="hidden md:inline">Falar com nosso expert</span>
          <span className="inline md:hidden">Expert</span>
          <div className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 bg-white rounded-full flex items-center justify-center">
            <svg className="w-2.5 sm:w-2.5 md:w-3 h-2.5 sm:h-2.5 md:h-3 text-black transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </div>
        </a>
      </motion.div>

      <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-8 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36 pb-8 sm:pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="space-y-4 sm:space-y-4 md:space-y-6">
              <motion.h1 
                className="text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight sm:leading-none tracking-tight px-1"
                variants={textVariants}
              >
                <motion.span 
                  className="block mb-1 sm:mb-0"
                  variants={textVariants}
                  custom={0}
                >
                  DESCUBRA O
                </motion.span>
                <motion.span 
                  className="block mb-1 sm:mb-0"
                  variants={textVariants}
                  custom={1}
                >
                  MUNDO ATRAVÉS
                </motion.span>
                <motion.span 
                  className="block mb-1 sm:mb-0"
                  variants={textVariants}
                  custom={2}
                >
                  DE UMA
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-accent-gold to-accent-gold-dark bg-clip-text text-transparent block"
                  variants={textVariants}
                  custom={3}
                >
                  <span className="highlight-beige">NOVA LENTE</span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-black/70 max-w-md mx-auto lg:mx-0 leading-relaxed px-0"
                variants={fadeInUp}
                custom={4}
              >
                Descubra óculos que definem sua identidade — combinando precisão técnica, design sofisticado e conforto excepcional.
              </motion.p>
            </div>
            
            {/* Mobile WhatsApp Button */}
            {/* Botões de ação */}
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              {/* Botão Falar com Expert - APENAS MOBILE */}
              <motion.a 
                href="https://wa.me/5511997712138?text=Olá! Gostaria de falar com um expert em óculos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="sm:hidden bg-black text-white px-4 py-2.5 rounded-full flex items-center justify-between hover:bg-accent-gold transition-all duration-300 group text-sm shadow-2xl hover:shadow-2xl w-64 mx-auto relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                custom={5}
              >
                <span className="flex-1 text-center">Falar com Expert</span>
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center absolute right-3">
                  <svg className="w-2.5 h-2.5 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </div>
              </motion.a>

              {/* Botão Explorar produtos - TODAS AS TELAS */}
              <motion.button
                onClick={scrollToConsultation}
                className="bg-black text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-medium hover:bg-accent-gold transition-all duration-300 flex items-center justify-between group mx-auto lg:mx-0 text-sm sm:text-base w-64 sm:w-64 md:w-auto shadow-2xl hover:shadow-2xl relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                custom={6}
              >
                <span className="flex-1 text-center md:text-left">Explorar produtos</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center absolute right-3 md:relative md:right-auto md:ml-4">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Main Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-16 sm:mt-0"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: prefersReducedMotion ? 0.2 : 0.4, 
              duration: prefersReducedMotion ? 0.3 : 0.8, 
              ease: "easeOut" 
            }}
            style={{ 
              y: shouldUseComplexAnimations ? yImage : 0 
            }}
          >
            <div className="relative">
              {/* Main professional image */}
              <div className="w-[115%] -mx-6 sm:mx-auto sm:w-96 md:w-[420px] lg:w-[480px] xl:w-[520px] h-[480px] sm:h-[480px] md:h-[550px] lg:h-[600px] xl:h-[750px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={professionalism} 
                  alt="Cátia Pinheiro - Especialista em Visagismo Óptico" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;