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
  // Todos os dispositivos usam MP4
  return basePath.replace(/\.(webm|mov)$/, '.mp4');
};

/**
 * Retorna múltiplos formatos para fallback
 * Apenas MP4 disponível no momento
 */
export const getVideoSources = (basePath: string) => {
  // Remove extensão para gerar o formato MP4
  const basePathWithoutExt = basePath.replace(/\.(mp4|webm|mov)$/, '');
  const mp4Path = `${basePathWithoutExt}.mp4`;
  
  return [
    { src: mp4Path, type: 'video/mp4' }
  ];
};

/**
 * Gera sources de vídeo otimizados por dispositivo
 * Todos os dispositivos: apenas MP4 (formato disponível)
 */
export const getOptimizedVideoSources = (basePath: string) => {
  const basePathWithoutExt = basePath.replace(/\.(mp4|webm|mov)$/, '');
  const mp4Path = `${basePathWithoutExt}.mp4`;
  
  // Retorna apenas MP4 pois é o único formato que queremos usar
  return [{ src: mp4Path, type: 'video/mp4' }];
};