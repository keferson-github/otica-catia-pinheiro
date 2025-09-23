import { ArrowRight, CheckCircle, Mail, MessageSquare, Gift } from "lucide-react";
import newsletterBg from "@/assets/newsletter-dark-bg.jpg";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={newsletterBg} 
          alt="Newsletter background" 
          className="w-full h-full object-cover opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full mb-6">
              <Gift size={16} />
              Newsletter Exclusiva
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Transforme sua
              <span className="block bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">
                imagem visual
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Receba dicas exclusivas de visagismo óptico, tendências e ofertas especiais direto no seu e-mail
            </p>
          </div>

          {/* Modern Newsletter Card */}
          <div className="relative bg-card/60 backdrop-blur-xl border-2 border-border/20 rounded-[2rem] p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem]"></div>
            <div className="relative z-10">
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/25 transition-all duration-500">
                    <Mail className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">Dicas Semanais</h3>
                  <p className="text-muted-foreground">Conteúdo exclusivo sobre visagismo</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent-gold/25 transition-all duration-500">
                    <Gift className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">Ofertas Exclusivas</h3>
                  <p className="text-muted-foreground">Descontos e promoções especiais</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/25 transition-all duration-500">
                    <CheckCircle className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">Sem Spam</h3>
                  <p className="text-muted-foreground">Apenas conteúdo relevante e útil</p>
                </div>
            </div>

              {/* Modern Form */}
              <div className="max-w-lg mx-auto">
                <div className="space-y-8">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Digite seu melhor e-mail"
                      className="w-full px-8 py-5 bg-background/70 backdrop-blur-sm border-2 border-border/30 rounded-3xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent-blue/20 focus:border-accent-blue transition-all text-center font-medium shadow-lg"
                    />
                  </div>
                
                {/* Interests - Simplified */}
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full">
                    <CheckCircle size={16} />
                    Visagismo Óptico
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent-gold/10 text-accent-gold text-sm font-medium rounded-full">
                    <CheckCircle size={16} />
                    Tendências
                  </div>
                </div>
                
                  <button className="w-full py-6 bg-gradient-to-r from-accent-blue via-accent-blue-dark to-accent-blue text-white font-bold rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent-blue/30 hover:-translate-y-2 hover:scale-[1.02] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="flex items-center justify-center gap-3 relative">
                      Quero receber as dicas exclusivas
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground mb-4">
                  ✨ Mais de 5.000 pessoas já recebem nossas dicas • 🔒 Seus dados estão seguros
                </p>
                
                {/* Support */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">
                    Dúvidas? Estamos aqui para ajudar
                  </p>
                  <a 
                    href="https://wa.me/5511997712138?text=Olá! Tenho dúvidas sobre a newsletter." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 font-medium rounded-xl transition-all duration-300 text-sm"
                  >
                    <MessageSquare size={16} />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
export default CTASection;