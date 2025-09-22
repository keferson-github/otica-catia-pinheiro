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
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-accent-gold to-accent-yellow">
      <div className="container mx-auto px-4">
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
        
        <div className="text-center mt-16 space-y-8">
           <p className="text-2xl text-primary font-semibold italic">
             "O objetivo é que você se sinta seguro(a) e confiante com sua escolha!"
           </p>
          
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="https://wa.me/5511997712138?text=Olá! Gostaria de agendar minha consultoria de visagismo óptico." 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
               </svg>
               Agendar Minha Consultoria
             </a>
              <a 
                href="https://wa.me/5511997712138?text=Olá! Gostaria de escolher meus óculos ideais." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white border-primary-dark hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Escolher Meus Óculos Ideais
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;