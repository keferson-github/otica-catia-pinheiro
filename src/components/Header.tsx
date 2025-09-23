import { useState, useEffect } from "react";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'Início',
    href: '#'
  }, {
    name: 'Serviços',
    href: '#servicos'
  }, {
    name: 'Visagismo',
    href: '#visagismo'
  }, {
    name: 'Como Funciona',
    href: '#como-funciona'
  }, {
    name: 'Sobre',
    href: '#sobre'
  }];
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent' : 'text-white drop-shadow-lg'} tracking-wider font-serif`}>
              CAP
            </span>
          </div>

          {/* Desktop Navigation */}
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-colors text-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent-blue hover:bg-muted rounded-md">
                  {item.name}
                </button>)}
              <a href="https://wa.me/5511997712138?text=Olá, vim pelo site da Cátia Pinheiro!" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent-blue hover:bg-accent-blue-dark text-white px-3 py-2 rounded-md text-base font-medium mt-4">
                WhatsApp
              </a>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;