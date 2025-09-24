import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCountUpOnView } from "@/hooks/use-count-up";
import { useOptimizedVariants, useReducedMotion } from "@/hooks/useOptimizedAnimation";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Hooks de otimização
  const { shouldUseComplexAnimations } = useOptimizedVariants();
  const prefersReducedMotion = useReducedMotion();
  const { elementRef: aboutRef, isVisible } = useScrollTrigger({
    threshold: 0.1,
    triggerOnce: true
  });

  // Efeitos parallax otimizados para diferentes elementos
  const backgroundY = useTransform(scrollYProgress, [0, 1], 
    shouldUseComplexAnimations ? ["0%", "30%"] : ["0%", "10%"]
  );
  const imageY = useTransform(scrollYProgress, [0, 1], 
    shouldUseComplexAnimations ? ["0%", "-20%"] : ["0%", "-5%"]
  );
  const contentY = useTransform(scrollYProgress, [0, 1], 
    shouldUseComplexAnimations ? ["0%", "10%"] : ["0%", "0%"]
  );

  // Variantes de animação otimizadas para textos - REDUZIDAS
  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 }, // Reduzido de 50 para 20
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.08, // Reduzido de 0.1 para 0.08
        duration: prefersReducedMotion ? 0.3 : 0.4, // Reduzido de 0.6 para 0.4
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.1 : 0.12, // Reduzido de 0.2 para 0.12
        delayChildren: prefersReducedMotion ? 0.05 : 0.08 // Reduzido de 0.1 para 0.08
      }
    }
  };

  const yearsCounter = useCountUpOnView({ end: 15, duration: 2000 });
  const clientsCounter = useCountUpOnView({ end: 500, duration: 2500 });

  return (
    <motion.section 
      id="sobre"
      ref={(el) => {
        sectionRef.current = el;
        aboutRef.current = el;
      }}
      className="py-20 bg-gradient-to-br from-background via-background/95 to-accent-blue/5 relative overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background parallax elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: shouldUseComplexAnimations ? backgroundY : 0 }}
      >
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div 
            className="relative group"
            style={{ y: shouldUseComplexAnimations ? imageY : 0 }}
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: prefersReducedMotion ? 0.3 : 0.8, 
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src="/img/sobre-cap.webp" 
                  alt="Processo de Consultoria Personalizada" 
                  className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 z-20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-blue/20 rounded-full blur-xl group-hover:bg-accent-blue/30 transition-colors duration-500"></div>
            </div>
          </motion.div>
          
          {/* Right Content - Text */}
          <motion.div 
            className="space-y-8"
            style={{ y: shouldUseComplexAnimations ? contentY : 0 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={textVariants} custom={0}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transformando 
                <span className="text-accent-gold"> Visões</span> em 
                <span className="text-accent-blue"> Realidade</span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={textVariants}
              custom={1}
            >
              Com mais de uma década de experiência em visagismo óptico, nossa missão é encontrar 
              o óculos perfeito que não apenas corrige sua visão, mas realça sua personalidade única.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              Cada consultoria é uma jornada personalizada onde analisamos seu formato de rosto, 
              estilo de vida e preferências para criar a combinação ideal entre funcionalidade e estética.
            </motion.p>
            
            <motion.blockquote 
              className="border-l-4 border-accent-gold pl-6 py-4 bg-accent-gold/5 rounded-r-lg"
              variants={textVariants}
              custom={3}
            >
              <p className="text-lg font-medium text-foreground italic">
                "Não vendemos apenas óculos, criamos uma nova perspectiva de como você se vê e como o mundo te vê."
              </p>
            </motion.blockquote>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="neu-card text-center group"
                variants={textVariants}
                custom={4}
              >
                <div 
                  ref={yearsCounter.elementRef}
                  className="text-4xl font-bold text-accent-gold mb-2 group-hover:scale-110 transition-transform"
                >
                  {yearsCounter.formattedCount}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Anos de Experiência</div>
              </motion.div>
              <motion.div 
                className="neu-card text-center group"
                variants={textVariants}
                custom={5}
              >
                <div 
                  ref={clientsCounter.elementRef}
                  className="text-4xl font-bold text-accent-blue mb-2 group-hover:scale-110 transition-transform"
                >
                  {clientsCounter.formattedCount}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;