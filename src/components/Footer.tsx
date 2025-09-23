import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Instagram from "lucide-react/dist/esm/icons/instagram";
import Facebook from "lucide-react/dist/esm/icons/facebook";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

const Footer = () => {
  // Refs para efeitos parallax
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  // Efeitos parallax
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  // Hook de scroll trigger
  const footerTrigger = useScrollTrigger({ threshold: 0.2 });

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const socialVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      ref={footerRef}
      className="bg-background/95 backdrop-blur-sm border-t border-border/20 text-foreground relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Subtle background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
        style={{ y }}
      />
      
      <motion.div 
        ref={footerTrigger.elementRef as React.RefObject<HTMLDivElement>}
        className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-6 sm:py-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={footerTrigger.isVisible ? "visible" : "hidden"}
      >
        {/* Main Content */}
        <motion.div 
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-2 sm:mb-3"
              variants={itemVariants}
            >
              Ótica Cátia Pinheiro
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-muted-foreground font-light tracking-wide"
              variants={itemVariants}
            >
              Visagismo Óptico Especializado
            </motion.p>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="text-center md:text-right space-y-2 sm:space-y-3"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xs sm:text-sm text-muted-foreground font-light"
              variants={itemVariants}
            >
              Rua João Dartora, 321 - Centro<br />
              Caieiras - SP
            </motion.p>
            <motion.p 
              className="text-primary font-medium text-base sm:text-lg"
              variants={itemVariants}
            >
              (11) 99731-2138
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          variants={containerVariants}
        >
          <motion.a 
            href="#" 
            className="group w-14 h-14 bg-card/50 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-primary/20" 
            aria-label="Instagram da Ótica Cátia Pinheiro"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.15,
              rotate: 5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
          </motion.a>
          <motion.a 
            href="#" 
            className="group w-14 h-14 bg-card/50 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-secondary/20" 
            aria-label="Facebook da Ótica Cátia Pinheiro"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.15,
              rotate: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
          </motion.a>
        </motion.div>
        
        {/* Bottom */}
        <motion.div 
          className="border-t border-border/20 pt-6 text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-muted-foreground text-sm font-light mb-2"
            variants={itemVariants}
          >
            © 2025 Ótica Cátia Pinheiro. Todos os direitos reservados.
          </motion.p>
          <motion.p 
            className="text-muted-foreground/70 text-xs mb-2"
            variants={itemVariants}
          >
            CNPJ: 00.000.000/0001-00 | CRO 00000
          </motion.p>
          <motion.p 
            className="text-muted-foreground/70 text-xs"
            variants={itemVariants}
          >
            Desenvolvido por{" "}
            <motion.a 
              href="https://techsolutionspro.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tech Solutions Pro
            </motion.a>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;