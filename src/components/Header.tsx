import { useState, useEffect, useCallback } from "react";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";

// Helper function to check active section
const isActiveSection = (href: string) => {
  if (href === '#') {
    return window.scrollY < 100;
  }
  const element = document.querySelector(href);
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= 100 && rect.bottom >= 100;
};

// Configuração de navegação minimalista
const NAVIGATION_CONFIG = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Visagismo', href: '#visagismo' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Sobre', href: '#sobre' }
] as const;

const WHATSAPP_CONFIG = {
  url: "https://wa.me/5511997712138?text=Olá, vim pelo site da Cátia Pinheiro!",
  text: "Contato"
} as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listener de scroll otimizado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de navegação suave
  const scrollToSection = useCallback((href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Minimalista */}
          <div className="flex items-center">
            <span className="text-2xl font-bold transition-colors duration-300 text-gray-900 drop-shadow-sm">
              CAP
            </span>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_CONFIG.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-semibold transition-all duration-300 px-2 py-1 text-gray-900 hover:text-gray-700 group`}
              >
                {item.name}
                {/* Sublinhado suave no hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-700 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-300 text-gray-900 bg-white/20 backdrop-blur-sm rounded-lg border border-gray-300/30 shadow-sm hover:bg-white/30"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/30 shadow-xl rounded-b-2xl mx-4 mb-4 animate-in slide-in-from-top-5 duration-300 ease-out">
            <div className="px-6 py-6 space-y-2">
              {NAVIGATION_CONFIG.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-center py-3 px-4 text-base font-semibold transition-all duration-300 text-gray-900 hover:text-gray-700 hover:bg-white/20 rounded-lg group relative animate-in slide-in-from-top-3 ease-out backdrop-blur-sm`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {item.name}
                  {/* Sublinhado suave no hover - mobile */}
                  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-700 rounded-full transition-all duration-300 group-hover:w-8"></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;