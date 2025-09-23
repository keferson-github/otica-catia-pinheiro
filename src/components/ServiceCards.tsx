import { Eye, MessageCircle, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

  // Variantes de animação para os cards
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  // Variantes para elementos internos dos cards
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Variantes para os bullets/features
  const bulletVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background elements in gold and silver */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-accent-beige/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-accent-silver/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-48 sm:w-60 h-48 sm:h-60 bg-accent-beige/10 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-accent-beige/15 text-primary text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-accent-beige/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Eye size={16} className="text-accent-beige" />
            Nossos Serviços
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforme sua
            <span className="block highlight-beige">imagem visual</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oferecemos soluções personalizadas para que você encontre os óculos perfeitos
          </motion.p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-3 sm:gap-6 md:gap-12 max-w-6xl mx-auto" 
          onMouseMove={handleMouseMove}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Service 1 - Silver Card with Enhanced Background */}
          <motion.div 
            className="group relative"
            variants={cardVariants}
            whileHover={{ 
              y: -12,
              scale: 1.01,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Floating background elements */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-700"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="absolute top-4 right-8 w-16 h-16 bg-accent-silver/30 rounded-full blur-2xl shadow-lg shadow-accent-silver/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-8 left-4 w-24 h-24 bg-gradient-to-br from-accent-silver-light/40 to-accent-silver/20 rounded-full blur-2xl shadow-md"
                animate={{ 
                  scale: [1, 0.8, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
            
            <div className="modern-service-card-silver h-full relative">
              {/* Floating Elements */}
              <div className="modern-floating-element modern-floating-element-1" style={{color: 'hsl(var(--accent-silver))'}}></div>
              <div className="modern-floating-element modern-floating-element-2" style={{color: 'hsl(var(--accent-silver-light))'}}></div>
              
              <motion.div 
                className="modern-card-content"
                variants={itemVariants}
              >
                {/* Header */}
                <motion.div 
                  className="modern-card-header"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="modern-card-title"
                    variants={itemVariants}
                  >
                    Atendimento Presencial
                    <span className="modern-card-subtitle block">Agendamento Gratuito</span>
                  </motion.h3>
                  <motion.p 
                    className="modern-card-description"
                    variants={itemVariants}
                  >
                    Encontre os óculos ideais através da nossa consultoria especializada em visagismo óptico, com atendimento personalizado e sem custo.
                  </motion.p>
                </motion.div>
                
                {/* Features */}
                <motion.div 
                  className="modern-feature-list"
                  variants={itemVariants}
                >
                  {[
                    "Análise facial personalizada",
                    "Seleção de armações ideais", 
                    "Lentes de alta qualidade"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="modern-feature-item"
                      variants={bulletVariants}
                      custom={index}
                    >
                      <div className="modern-feature-bullet" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA Button */}
                <motion.a 
                  href="https://wa.me/5511997712138?text=Olá! Gostaria de solicitar óculos através da consultoria de visagismo." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modern-cta-button"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Atendimento Loja</span>
                  <ArrowRight size={16} className="modern-cta-icon" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Service 2 - Premium Gold Card with Enhanced Background Effects */}
          <motion.div 
            className="group relative"
            variants={cardVariants}
            whileHover={{ 
              y: -12,
              scale: 1.01,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="modern-service-card-beige h-full relative">
              {/* Floating Elements */}
              <div className="modern-floating-element modern-floating-element-1" style={{color: 'hsl(var(--accent-gold))'}}></div>
              <div className="modern-floating-element modern-floating-element-2" style={{color: 'hsl(var(--accent-gold-light))'}}></div>
              
              <motion.div 
                className="modern-card-content"
                variants={itemVariants}
              >
                {/* Header */}
                <motion.div 
                  className="modern-card-header"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="modern-card-title"
                    variants={itemVariants}
                  >
                    Consultoria Premium
                    <span className="modern-card-subtitle block">Visagismo Personalizado</span>
                  </motion.h3>
                  <motion.p 
                    className="modern-card-description"
                    variants={itemVariants}
                  >
                    Transformação completa da sua imagem através de análise detalhada das suas características faciais e estilo pessoal. Agende agora seu horário!
                  </motion.p>
                </motion.div>
                
                {/* Features */}
                <motion.div 
                  className="modern-feature-list"
                  variants={itemVariants}
                >
                  {[
                    "Estudo do formato do rosto",
                    "Harmonização de cores",
                    "Consultoria personalizada"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="modern-feature-item"
                      variants={bulletVariants}
                      custom={index}
                    >
                      <div className="modern-feature-bullet" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA Button */}
                <motion.a 
                  href="https://wa.me/5511997712138?text=Olá! Gostaria de agendar uma consultoria de visagismo óptico." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modern-cta-button"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Agendar Consultoria</span>
                  <ArrowRight size={16} className="modern-cta-icon" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom CTA with refined styling */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-6 py-3 bg-accent-silver/20 rounded-full border border-accent-silver/30"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(169, 169, 169, 0.3)"
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm text-muted-foreground">Tem dúvidas?</span>
            <motion.a 
              href="https://wa.me/5511997712138?text=Olá! Tenho dúvidas sobre os serviços." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-accent-gold hover:text-accent-gold-dark transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale conosco
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;