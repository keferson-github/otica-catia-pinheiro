import Instagram from "lucide-react/dist/esm/icons/instagram";
import Facebook from "lucide-react/dist/esm/icons/facebook";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/20 text-foreground relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-6 sm:py-8 relative">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-2 sm:mb-3">
              Ótica Cátia Pinheiro
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-light tracking-wide">
              Visagismo Óptico Especializado
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-muted-foreground font-light">
              Rua João Dartora, 321 - Centro<br />
              Caieiras - SP
            </p>
            <p className="text-primary font-medium text-base sm:text-lg">
              (11) 99731-2138
            </p>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a 
            href="#" 
            className="group w-14 h-14 bg-card/50 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-primary/20" 
            aria-label="Instagram da Ótica Cátia Pinheiro"
          >
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
          </a>
          <a 
            href="#" 
            className="group w-14 h-14 bg-card/50 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-secondary/20" 
            aria-label="Facebook da Ótica Cátia Pinheiro"
          >
            <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
          </a>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/20 pt-6 text-center">
          <p className="text-muted-foreground text-sm font-light mb-2">
            © 2025 Ótica Cátia Pinheiro. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/70 text-xs mb-2">
            CNPJ: 00.000.000/0001-00 | CRO 00000
          </p>
          <p className="text-muted-foreground/70 text-xs">
            Desenvolvido por{" "}
            <a 
              href="https://techsolutionspro.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              Tech Solutions Pro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;