import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Palette, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Variantes de animação - REDUZIDAS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduzido de 0.3 para 0.1
        delayChildren: 0.1    // Reduzido de 0.2 para 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduzido de y: 60 para y: 20
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,        // Reduzido de 0.8 para 0.4
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Análise do formato do rosto e traços faciais",
      description: "Identificação das armações que favorecem sua fisionomia única, considerando proporções e características marcantes.",
      image: "/img/nova-foto-transformando-visoes(reduzida).webp"
    },
    {
      icon: Palette,
      number: "02", 
      title: "Harmonização das cores e materiais",
      description: "Óculos que complementam sua aparência, estilo pessoal e garantem que transmitam a mensagem certa.",
      image: "/img/nova-foto-oculos-cap.webp"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Escolha das lentes ideais",
      description: "Uso de tecnologia avançada para garantir máxima saúde ocular, conforto e qualidade de vida visual.",
      image: "/img/lentes-cap.webp"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="como-funciona" 
      className="py-20 bg-gradient-to-br from-accent-gold to-accent-beige relative overflow-hidden"
    >
      {/* Background parallax */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/15 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative">
        <motion.div 
          className="text-center space-y-6 mb-16"
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 20 }}  // Reduzido de y: 50 para y: 20
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}  // Reduzido de 0.8 para 0.4
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-heading text-primary">
            Como Funciona a Consultoria?
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
            Um processo cuidadoso e personalizado para encontrar os óculos perfeitos para você
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              variants={stepVariants}
            >
              {/* Content */}
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}  // Reduzido de -50/50 para -20/20
                transition={{ duration: 0.4, delay: 0.1 }}  // Reduzido duration de 0.8 para 0.4 e delay de 0.2 para 0.1
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Etapa {step.number}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-primary leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-lg text-primary/80 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              
               {/* Icon/Visual */}
               <motion.div 
                 className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                 whileInView={{ opacity: 1, scale: 1 }}
                 initial={{ opacity: 0, scale: 0.9 }}  // Reduzido de scale: 0.8 para scale: 0.9
                 transition={{ duration: 0.4, delay: 0.2 }}  // Reduzido duration de 0.8 para 0.4 e delay de 0.4 para 0.2
                 viewport={{ once: true }}
               >
                 {step.image ? (
                   <div className="relative group">
                     <div className="w-80 h-[580px] sm:h-[480px] md:h-[550px] lg:h-[420px] xl:h-[580px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                       <img 
                         src={step.image} 
                         alt={step.title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     </div>
                     {/* Floating icon */}
                     <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                       <step.icon size={24} />
                     </div>
                   </div>
                 ) : (
                   <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group hover:from-primary/20 hover:to-primary/10 transition-all duration-500">
                     <div className="w-32 h-32 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                       <step.icon size={48} />
                     </div>
                   </div>
                 )}
               </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;