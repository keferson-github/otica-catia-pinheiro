/**
 * Utilitários para detecção de dispositivos e navegadores
 */

export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isSafari = (): boolean => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isIOSSafari = (): boolean => {
  return isIOS() && isSafari();
};

export const supportsWebM = (): boolean => {
  const video = document.createElement('video');
  return video.canPlayType('video/webm') !== '';
};

export const supportsMP4 = (): boolean => {
  const video = document.createElement('video');
  return video.canPlayType('video/mp4') !== '';
};

/**
 * Retorna o melhor formato de vídeo suportado pelo dispositivo
 */
export const getBestVideoFormat = (basePath: string): string => {
  if (isIOS() || isSafari()) {
    // iOS e Safari preferem MP4
    return basePath.replace('.webm', '.mov');
  }
  
  // Outros navegadores podem usar WebM (mais eficiente)
  return basePath;
};

/**
 * Retorna múltiplos formatos para fallback
 * MP4 como formato principal (compatibilidade universal)
 * WebM como fallback para otimização em navegadores compatíveis
 */
export const getVideoSources = (basePath: string) => {
  // Remove extensão para gerar ambos os formatos
  const basePathWithoutExt = basePath.replace(/\.(mp4|webm)$/, '');
  const movPath = `${basePathWithoutExt}.mov`;
  const webmPath = `${basePathWithoutExt}.webm`;
  
  return [
    { src: movPath, type: 'video/quicktime' },
    { src: webmPath, type: 'video/webm' }
  ];
};

/**
 * Gera sources de vídeo otimizados por dispositivo
 * iOS/Safari: apenas MP4 (melhor compatibilidade)
 * Outros: MP4 principal + WebM fallback (otimização)
 */
export const getOptimizedVideoSources = (basePath: string) => {
  const basePathWithoutExt = basePath.replace(/\.(mp4|webm)$/, '');
  const movPath = `${basePathWithoutExt}.mov`;
  const webmPath = `${basePathWithoutExt}.webm`;
  
  if (isIOS() || isSafari()) {
    // iOS e Safari: apenas MP4 para máxima compatibilidade
    return [{ src: movPath, type: 'video/quicktime' }];
  }
  
  // Outros navegadores: MP4 principal + WebM para otimização
  return [
    { src: movPath, type: 'video/quicktime' },
    { src: webmPath, type: 'video/webm' }
  ];
};