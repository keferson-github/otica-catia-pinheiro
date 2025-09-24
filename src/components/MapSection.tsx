import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import MapPin from "lucide-react/dist/esm/icons/map-pin";

const MapSection = () => {
  // Refs para efeitos parallax
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos parallax
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Hook de scroll trigger
  const mapTrigger = useScrollTrigger({ threshold: 0.2 });

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
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="localizacao"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-accent-beige/30 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background decorativo */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
        style={{ y }}
      />
      
      <motion.div 
        ref={mapTrigger.elementRef as React.RefObject<HTMLDivElement>}
        className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative"
        variants={containerVariants}
        initial="hidden"
        animate={mapTrigger.isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center mb-4"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center shadow-elegant">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
            variants={itemVariants}
          >
            Nossa Localização
          </motion.h2>
          
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-accent-blue rounded-full mx-auto"
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Venha nos visitar! Estamos localizados no centro de Caieiras, 
            em um ambiente acolhedor e moderno, preparado especialmente para você.
          </motion.p>
        </motion.div>

        {/* Informações de contato */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          <motion.div 
            className="elegant-card text-center p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Endereço</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rua João Dartora, 321 - Centro<br />
              Caieiras - SP, 07700-005
            </p>
          </motion.div>
          
          <motion.div 
            className="elegant-card text-center p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Contato</h3>
            <p className="text-primary font-medium text-lg mb-2">(11) 99771-2138</p>
            <p className="text-muted-foreground text-sm">
              WhatsApp disponível para agendamentos
            </p>
          </motion.div>
        </motion.div>

        {/* Mapa */}
        <motion.div 
          className="elegant-card p-2 overflow-hidden"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative w-full h-96 md:h-[450px] rounded-xl overflow-hidden shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117208.7958057053!2d-46.823902094093086!3d-23.360169531003997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94cee48696c9b63f%3A0x4826fc2a94b77bc7!2sR.%20Jo%C3%A3o%20D%C3%A1rtora%2C%20321%20-%20Centro%2C%20Caieiras%20-%20SP%2C%2007700-005!3m2!1d-23.360191099999998!2d-46.7415005!5e0!3m2!1spt-BR!2sbr!4v1758668087493!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Ótica Cátia Pinheiro"
              className="rounded-xl"
            />
            
            {/* Overlay sutil para melhor integração visual */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-xl" />
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/5511997712138?text=Olá, gostaria de agendar um atendimento gratuito na loja!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg shadow-elegant hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
            Agendar Visita
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MapSection;