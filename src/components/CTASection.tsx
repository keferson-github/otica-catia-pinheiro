import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { handleScheduleConsultation } from "../utils/scrollUtils";

const CTASection = () => {
  return (
    <section id="transforme-sua-imagem" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-accent-beige/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent-silver/30 rounded-full blur-3xl"
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
      </div>
      
      <div className="relative z-10 container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-beige/15 text-primary text-sm font-semibold rounded-full mb-6 border border-accent-beige/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Eye size={16} className="text-accent-beige" />
              Transformação Visual
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transforme sua
              <span className="block highlight-beige">imagem visual</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Faça parte dessa transformação você também
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              onClick={handleScheduleConsultation}
              className="inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-accent-beige via-accent-beige-dark to-accent-beige text-primary font-bold text-lg rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent-beige/30 hover:-translate-y-2 hover:scale-[1.02] group relative overflow-hidden shadow-xl cursor-pointer"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(218, 165, 32, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative">Agende sua Consulta</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300 relative" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;