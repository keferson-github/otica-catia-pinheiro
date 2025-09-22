import consultationProcess from "@/assets/consultation-process.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 diagonal-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="max-w-md rounded-2xl overflow-hidden shadow-floating transform transition-all duration-500 group-hover:scale-105">
                 <img 
                   src={consultationProcess} 
                   alt="Processo de consulta personalizada com Cátia Pinheiro" 
                   className="w-full h-auto object-cover"
                 />
                 {/* Image overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
               <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-blue/20 rounded-full blur-xl animate-pulse"></div>
               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-gold/20 rounded-full blur-lg animate-pulse delay-300"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent-blue/10 text-accent-blue font-semibold text-sm uppercase tracking-wider rounded-full">
                Especialista em Visagismo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                CÁTIA
                <span className="block text-accent-blue">PINHEIRO</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-gold rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
               <p className="text-xl">
                 Fundadora da Ótica Cátia Pinheiro, sou especialista em <strong className="text-primary">Visagismo Óptico</strong> e técnica em Óptica. 
                 Minha missão é ajudar você a encontrar os óculos ideais que realçam sua personalidade 
                 e comunicam sua verdadeira essência.
               </p>
               
               <p>
                 Para mim, óculos vão muito além da correção visual — eles fazem parte da sua 
                 identidade e transmitem a imagem que você deseja. Com mais de 15 anos de experiência, desenvolvi 
                 uma metodologia única que combina técnica, estética e cuidado personalizado.
               </p>
               
               <blockquote className="relative p-6 bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 rounded-xl border-l-4 border-accent-blue">
                 <p className="italic text-primary font-medium text-xl">
                   "Cada pessoa é única, e seus óculos devem refletir essa singularidade."
                 </p>
               </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="neu-card text-center group">
                <div className="text-4xl font-bold text-accent-blue mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Anos de Experiência</div>
              </div>
              <div className="neu-card text-center group">
                <div className="text-4xl font-bold text-accent-blue mb-2 group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl animate-pulse delay-500"></div>
    </section>
  );
};

export default AboutSection;