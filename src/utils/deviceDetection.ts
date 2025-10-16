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
    return basePath.replace('.webm', '.mp4');
  }
  
  // Outros navegadores podem usar WebM (mais eficiente)
  return basePath;
};

/**
 * Retorna múltiplos formatos para fallback
 */
export const getVideoSources = (basePath: string) => {
  const mp4Path = basePath.replace('.webm', '.mp4');
  const webmPath = basePath;
  
  return [
    { src: mp4Path, type: 'video/mp4' },
    { src: webmPath, type: 'video/webm' }
  ];
};