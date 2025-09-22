import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;