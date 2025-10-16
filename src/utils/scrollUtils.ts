/**
 * Utilitários para scroll suave na página
 */

/**
 * Detecta se o dispositivo é mobile baseado na largura da tela
 */
export const isMobileDevice = (): boolean => {
  return window.innerWidth < 640; // sm breakpoint do Tailwind
};

/**
 * Realiza scroll suave para um elemento específico
 * @param elementId - ID do elemento de destino
 * @param offset - Offset adicional em pixels (padrão: -80 para compensar header)
 */
export const scrollToElement = (elementId: string, offset: number = -80): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Elemento com ID '${elementId}' não encontrado`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Função específica para o botão "Agende sua Consulta"
 * Redireciona para diferentes seções baseado no tipo de dispositivo
 */
export const handleScheduleConsultation = (): void => {
  const isMobile = isMobileDevice();
  
  if (isMobile) {
    // Mobile: scroll para o card "Consultoria Premium"
    scrollToElement('consultoria-premium', -100);
  } else {
    // Desktop/Tablet: scroll para o topo dos cards de serviços
    scrollToElement('services-cards', -120);
  }
};