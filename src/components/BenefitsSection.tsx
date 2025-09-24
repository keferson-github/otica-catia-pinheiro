import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Heart from "lucide-react/dist/esm/icons/heart";
import Glasses from "lucide-react/dist/esm/icons/glasses";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Crown from "lucide-react/dist/esm/icons/crown";
import clientExperience from "/img/resultados-cap.webp";
import { useCountUpOnView } from "@/hooks/use-count-up";
import { useScrollTrigger, useStaggeredScrollTrigger } from "@/hooks/useScrollTrigger";

const BenefitsSection = () => {
  // Refs para efeitos parallax
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos parallax
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Hooks de scroll trigger
  const headerTrigger = useScrollTrigger({ threshold: 0.2 });
  const { setElementRef: setBenefitRef, visibleItems: visibleBenefits } = useStaggeredScrollTrigger(4, 150);
  const contentTrigger = useScrollTrigger({ threshold: 0.3 });

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, // Reduzido de 50 para 20
      scale: 0.95 // Reduzido de 0.9 para 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120, // Aumentado de 100 para 120 para ser mais rápido
        damping: 18, // Aumentado de 15 para 18
        duration: 0.4 // Reduzido de 0.6 para 0.4
      }
    }
  };

  const benefitVariants = {
    hidden: { 
      opacity: 0, 
      y: 25, // Reduzido de 60 para 25
      rotateX: -8 // Reduzido de -15 para -8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 140, // Aumentado de 120 para 140
        damping: 22, // Aumentado de 20 para 22
        duration: 0.5 // Reduzido de 0.8 para 0.5
      }
    }
  };

  // Configuração das animações de contagem para as estatísticas
  const satisfactionCounter = useCountUpOnView({
    end: 98,
    duration: 2000,
    suffix: '%',
  });

  const experienceCounter = useCountUpOnView({
    end: 15,
    duration: 2500,
    suffix: '+',
  });

  const transformationsCounter = useCountUpOnView({
    end: 1000,
    duration: 3000,
    suffix: '+',
    useGrouping: true,
  });
  const benefits = [
    {
       icon: Heart,
       title: "Atendimento especializado e personalizado",
       description: "Cada consultoria é única, focada em suas necessidades e preferências específicas, com dedicação total."
     },
     {
       icon: Glasses,
       title: "Seleção de armações que combinam estética e conforto",
       description: "Combinação perfeita entre beleza, funcionalidade e conforto premium para uso diário prolongado."
     },
     {
       icon: Cpu,
       title: "Lentes de alta tecnologia para sua saúde ocular",
       description: "Proteção avançada e qualidade visual superior com as melhores marcas e tecnologias do mercado mundial."
     },
     {
       icon: Crown,
       title: "Experiência única, além da simples compra de óculos",
       description: "Transformação completa da sua imagem e autoestima através do visagismo especializado e personalizado."
     }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="beneficios"
      className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10"
        style={{ y }}
      >
        <motion.div 
          ref={headerTrigger.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={headerTrigger.isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-blue/10 text-accent-blue font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full"
            variants={itemVariants}
          >
            Benefícios de ser nosso cliente
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
            variants={itemVariants}
          >
            Benefícios de
            <motion.span 
              className="block text-accent-blue"
              variants={itemVariants}
            >
              ser nosso cliente
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-gold rounded-full mx-auto"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Mais do que encontrar óculos, oferecemos uma transformação completa da sua imagem
          </motion.p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              ref={setBenefitRef(index)}
              className="morphism-premium group pb-16"
              variants={benefitVariants}
              initial="hidden"
              animate={visibleBenefits[index] ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-start space-x-6 relative z-10">
                 <div className="flex-shrink-0 w-20 h-20 neu-button bg-white rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-premium transition-all duration-300 border border-gray-200">
                  <benefit.icon className="w-16 h-16 text-black" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-accent-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              {/* Floating badges - Posicionamento no canto inferior direito com cor padronizada */}
              {index === 0 && (
                <div className="absolute bottom-6 right-4 bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl border-2 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                  ✨ Personalizado
                </div>
              )}
              {index === 1 && (
                <div className="absolute bottom-6 right-4 bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl border-2 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                  💎 Estética
                </div>
              )}
              {index === 2 && (
                <div className="absolute bottom-6 right-4 bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl border-2 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                  🔬 Tecnologia
                </div>
              )}
              {index === 3 && (
                <div className="absolute bottom-6 right-4 bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl border-2 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                  👑 Única
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
         <motion.div 
           ref={contentTrigger.elementRef as React.RefObject<HTMLDivElement>}
           className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
           variants={containerVariants}
           initial="hidden"
           animate={contentTrigger.isVisible ? "visible" : "hidden"}
         >
           {/* Image */}
            <motion.div 
              className="order-2 lg:order-1 flex justify-center"
              variants={itemVariants}
            >
               <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-elegant">
                 <motion.img 
                   src={clientExperience} 
                   alt="Cliente satisfeita com sua nova experiência em óculos" 
                   className="w-full h-auto object-cover"
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 />
               </div>
            </motion.div>
           
           {/* Content */}
           <motion.div 
             className="order-1 lg:order-2 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white shadow-elegant"
             variants={itemVariants}
             whileHover={{ 
               scale: 1.02,
               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
             }}
           >
             <div className="space-y-6">
               <motion.h3 
                 className="text-3xl md:text-4xl font-bold"
                 variants={itemVariants}
               >
                 Resultados que Transformam Vidas
               </motion.h3>
               <motion.p 
                 className="text-xl opacity-90 leading-relaxed"
                 variants={itemVariants}
               >
                 Nossa abordagem vai além da correção visual - criamos uma nova versão de você, 
                 mais confiante e autêntica, através dos óculos perfeitos.
               </motion.p>
               
               <motion.div 
                 className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                 variants={containerVariants}
               >
                 <motion.div 
                   className="text-center"
                   variants={itemVariants}
                 >
                   <div 
                     ref={satisfactionCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {satisfactionCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Satisfação dos Clientes</div>
                 </motion.div>
                 <motion.div 
                   className="text-center"
                   variants={itemVariants}
                 >
                   <div 
                     ref={experienceCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {experienceCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Anos de Experiência</div>
                 </motion.div>
                 <motion.div 
                   className="text-center"
                   variants={itemVariants}
                 >
                   <div 
                     ref={transformationsCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {transformationsCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Transformações</div>
                 </motion.div>
               </motion.div>
             </div>
           </motion.div>
         </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BenefitsSection;