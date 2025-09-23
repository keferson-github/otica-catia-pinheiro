import Heart from "lucide-react/dist/esm/icons/heart";
import Glasses from "lucide-react/dist/esm/icons/glasses";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Crown from "lucide-react/dist/esm/icons/crown";
import clientExperience from "@/assets/client-experience.jpg";
import { useCountUpOnView } from "@/hooks/use-count-up";

const BenefitsSection = () => {
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
       description: "Cada consulta é única, focada em suas necessidades e preferências específicas, com dedicação total."
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
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-blue/10 text-accent-blue font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full">
            Benefícios de ser nosso cliente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Benefícios de
            <span className="block text-accent-blue">ser nosso cliente</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-gold rounded-full mx-auto"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Mais do que encontrar óculos, oferecemos uma transformação completa da sua imagem
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="morphism-premium group pb-16">
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
            </div>
          ))}
        </div>
        
         <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
           {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center">
               <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-elegant">
                 <img 
                   src={clientExperience} 
                   alt="Cliente satisfeita com sua nova experiência em óculos" 
                   className="w-full h-auto object-cover"
                 />
               </div>
            </div>
           
           {/* Content */}
           <div className="order-1 lg:order-2 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white shadow-elegant">
             <div className="space-y-6">
               <h3 className="text-3xl md:text-4xl font-bold">
                 Resultados que Transformam Vidas
               </h3>
               <p className="text-xl opacity-90 leading-relaxed">
                 Nossa abordagem vai além da correção visual - criamos uma nova versão de você, 
                 mais confiante e autêntica, através dos óculos perfeitos.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                 <div className="text-center">
                   <div 
                     ref={satisfactionCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {satisfactionCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Satisfação dos Clientes</div>
                 </div>
                 <div className="text-center">
                   <div 
                     ref={experienceCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {experienceCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Anos de Experiência</div>
                 </div>
                 <div className="text-center">
                   <div 
                     ref={transformationsCounter.elementRef}
                     className="text-4xl font-bold text-accent-blue-light mb-2"
                   >
                     {transformationsCounter.formattedCount}
                   </div>
                   <div className="text-sm opacity-80">Transformações</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default BenefitsSection;