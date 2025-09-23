import { Search, Palette, CheckCircle } from "lucide-react";
import consultationProcess from "@/assets/consultation-process.jpg";
import frameSelection from "@/assets/frame-selection.jpg";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Análise do formato do rosto e traços faciais",
      description: "Identificação das armações que favorecem sua fisionomia única, considerando proporções e características marcantes.",
      image: consultationProcess
    },
    {
      icon: Palette,
      number: "02", 
      title: "Harmonização das cores e materiais",
      description: "Óculos que complementam sua aparência, estilo pessoal e garantem que transmitam a mensagem certa.",
      image: frameSelection
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Escolha das lentes ideais",
      description: "Uso de tecnologia avançada para garantir máxima saúde ocular, conforto e qualidade de vida visual.",
      image: null
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-accent-gold to-accent-beige">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="text-center space-y-6 mb-16">
          <h2 className="section-heading text-primary">
            Como Funciona a Consultoria?
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
            Um processo cuidadoso e personalizado para encontrar os óculos perfeitos para você
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
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
              </div>
              
               {/* Icon/Visual */}
               <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {step.image ? (
                     <div className="max-w-md rounded-2xl overflow-hidden shadow-elegant">
                       <img 
                         src={step.image} 
                         alt={`Processo ${step.number}: ${step.title}`}
                         className="w-full h-auto object-cover"
                       />
                     </div>
                 ) : (
                    <div className="w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <step.icon className="w-16 h-16 text-primary" />
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;