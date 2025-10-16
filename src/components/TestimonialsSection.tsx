import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Play from "lucide-react/dist/esm/icons/play";
import Pause from "lucide-react/dist/esm/icons/pause";
import Volume2 from "lucide-react/dist/esm/icons/volume-2";
import VolumeX from "lucide-react/dist/esm/icons/volume-x";
import { useScrollTrigger, useStaggeredScrollTrigger } from "@/hooks/useScrollTrigger";
import { isIOS, isIOSSafari, getVideoSources } from "@/utils/deviceDetection";

const TestimonialsSection = () => {
  // Refs para efeitos parallax
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos parallax
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Hooks de scroll trigger
  const headerTrigger = useScrollTrigger({ threshold: 0.2 });
  const { setElementRef: setVideoRef, visibleItems: visibleVideos } = useStaggeredScrollTrigger(4, 200);

  // Estados para controle dos vídeos
  const [videoStates, setVideoStates] = useState<{[key: number]: {isPlaying: boolean, isMuted: boolean, currentTime: number, duration: number}}>({
    0: { isPlaying: false, isMuted: true, currentTime: 0, duration: 0 },
    1: { isPlaying: false, isMuted: true, currentTime: 0, duration: 0 },
    2: { isPlaying: false, isMuted: true, currentTime: 0, duration: 0 },
    3: { isPlaying: false, isMuted: true, currentTime: 0, duration: 0 }
  });

  // Dados dos depoimentos
  const testimonials = [
    {
      id: 0,
      videoSrc: "/video_depoimento/depoimento_jeferson.webm",
      name: "Jeferson",
      title: "Cliente Satisfeito",
      description: "Experiência transformadora com o visagismo"
    },
    {
      id: 1,
      videoSrc: "/video_depoimento/depoimento_natalia.webm",
      name: "Natalia",
      title: "Cliente Satisfeita",
      description: "Atendimento personalizado e resultado incrível"
    },
    {
      id: 2,
      videoSrc: "/video_depoimento/depoimento_gisele.webm",
      name: "Gisele",
      title: "Cliente Satisfeita",
      description: "Profissionalismo e cuidado em cada detalhe"
    },
    {
      id: 3,
      videoSrc: "/video_depoimento/depoimento_camila.webm",
      name: "Camila",
      title: "Cliente Satisfeita",
      description: "Transformação completa da minha imagem"
    }
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
        duration: 0.5
      }
    }
  };

  const videoVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateY: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  // Funções de controle dos vídeos
  const togglePlayPause = async (videoId: number, videoElement: HTMLVideoElement) => {
    try {
      const newState = !videoStates[videoId].isPlaying;
      
      if (newState) {
        // Tratamento específico para iOS
        if (isIOS()) {
          // No iOS, precisamos de interação do usuário para iniciar o vídeo
          // Garantir que o vídeo está carregado
          if (videoElement.readyState < 2) {
            videoElement.load(); // Força o carregamento no iOS
            await new Promise((resolve) => {
              const onCanPlay = () => {
                videoElement.removeEventListener('canplay', onCanPlay);
                resolve(void 0);
              };
              videoElement.addEventListener('canplay', onCanPlay);
            });
          }
        } else {
          // Garantir que o vídeo está carregado antes de tentar reproduzir
          if (videoElement.readyState < 2) {
            await new Promise((resolve) => {
              const onCanPlay = () => {
                videoElement.removeEventListener('canplay', onCanPlay);
                resolve(void 0);
              };
              videoElement.addEventListener('canplay', onCanPlay);
            });
          }
        }
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } else {
        videoElement.pause();
      }
      
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], isPlaying: newState }
      }));
    } catch (error) {
      console.error('Erro ao reproduzir vídeo:', error);
      
      // Tratamento específico de erro para iOS
      if (isIOS() && error.name === 'NotAllowedError') {
        console.warn('Reprodução bloqueada no iOS - necessária interação do usuário');
      }
      
      // Em caso de erro, manter o estado anterior
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], isPlaying: false }
      }));
    }
  };

  const toggleMute = (videoId: number, videoElement: HTMLVideoElement) => {
    const newMutedState = !videoStates[videoId].isMuted;
    videoElement.muted = newMutedState;
    
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { ...prev[videoId], isMuted: newMutedState }
    }));
  };

  // Função para controlar o seek da barra de progressão
  const handleSeek = (videoId: number, videoElement: HTMLVideoElement, seekTime: number) => {
    videoElement.currentTime = seekTime;
    setVideoStates(prev => ({
      ...prev,
      [videoId]: { ...prev[videoId], currentTime: seekTime }
    }));
  };

  // Função para formatar tempo em mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="depoimentos"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-accent-beige/30 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-beige/5 via-transparent to-accent-silver/5" />
      
      <motion.div 
        className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative z-10"
        style={{ y }}
      >
        {/* Header da seção */}
        <motion.div 
          ref={headerTrigger.elementRef as React.RefObject<HTMLDivElement>}
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={headerTrigger.isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-beige/20 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full border border-accent-beige/30"
            variants={itemVariants}
          >
            Depoimentos dos nossos clientes
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
            variants={itemVariants}
          >
            Histórias de
            <motion.span 
              className="block bg-gradient-to-r from-accent-beige-dark to-accent-silver-dark bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Transformação
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-accent-beige-dark to-accent-silver-dark rounded-full mx-auto"
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Veja como nossos clientes transformaram sua imagem e autoestima através do nosso trabalho especializado em visagismo
          </motion.p>
        </motion.div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              ref={setVideoRef(index)}
              className="group relative"
              variants={videoVariants}
              initial="hidden"
              animate={visibleVideos[index] ? "visible" : "hidden"}
            >
              {/* Container do vídeo */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-accent-beige/10 shadow-elegant group-hover:shadow-xl transition-all duration-500">
                <video
                  className="w-full h-full object-cover"
                  muted={videoStates[testimonial.id].isMuted}
                  loop
                  playsInline
                  webkit-playsinline="true"
                  preload="metadata"
                  controls={isIOSSafari()} // Mostrar controles nativos no iOS Safari para melhor compatibilidade
                  onLoadedData={() => {
                    console.log(`Vídeo ${testimonial.name} carregado com sucesso`);
                  }}
                  onLoadedMetadata={(e) => {
                    const video = e.currentTarget;
                    setVideoStates(prev => ({
                      ...prev,
                      [testimonial.id]: { 
                        ...prev[testimonial.id], 
                        duration: video.duration 
                      }
                    }));
                  }}
                  onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                    setVideoStates(prev => ({
                      ...prev,
                      [testimonial.id]: { 
                        ...prev[testimonial.id], 
                        currentTime: video.currentTime 
                      }
                    }));
                  }}
                  onError={(e) => {
                    console.error(`Erro ao carregar vídeo ${testimonial.name}:`, e);
                  }}
                  onEnded={() => setVideoStates(prev => ({
                    ...prev,
                    [testimonial.id]: { ...prev[testimonial.id], isPlaying: false }
                  }))}
                >
                  {/* Múltiplos formatos para compatibilidade */}
                  {getVideoSources(testimonial.videoSrc).map((source, index) => (
                    <source key={index} src={source.src} type={source.type} />
                  ))}
                  {/* Fallback para navegadores muito antigos */}
                  <p>Seu navegador não suporta reprodução de vídeo.</p>
                </video>
                
                {/* Overlay com controles */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${isIOSSafari() ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Barra de Progressão */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-white/80 mb-1">
                        <span>{formatTime(videoStates[testimonial.id].currentTime)}</span>
                        <span>{formatTime(videoStates[testimonial.id].duration)}</span>
                      </div>
                      <div 
                        className="relative h-1 bg-white/20 rounded-full cursor-pointer group/progress"
                        onClick={(e) => {
                          const video = e.currentTarget.closest('.group')?.querySelector('video') as HTMLVideoElement;
                          if (video && videoStates[testimonial.id].duration > 0) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const percentage = clickX / rect.width;
                            const seekTime = percentage * videoStates[testimonial.id].duration;
                            handleSeek(testimonial.id, video, seekTime);
                          }
                        }}
                        role="slider"
                        aria-label={`Barra de progresso do vídeo ${testimonial.name}`}
                        aria-valuemin={0}
                        aria-valuemax={videoStates[testimonial.id].duration}
                        aria-valuenow={videoStates[testimonial.id].currentTime}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                            e.preventDefault();
                            const video = e.currentTarget.closest('.group')?.querySelector('video') as HTMLVideoElement;
                            if (video && videoStates[testimonial.id].duration > 0) {
                              const step = videoStates[testimonial.id].duration * 0.05; // 5% do vídeo
                              const newTime = e.key === 'ArrowRight' 
                                ? Math.min(videoStates[testimonial.id].currentTime + step, videoStates[testimonial.id].duration)
                                : Math.max(videoStates[testimonial.id].currentTime - step, 0);
                              handleSeek(testimonial.id, video, newTime);
                            }
                          }
                        }}
                      >
                        <div 
                          className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-150"
                          style={{ 
                            width: videoStates[testimonial.id].duration > 0 
                              ? `${(videoStates[testimonial.id].currentTime / videoStates[testimonial.id].duration) * 100}%` 
                              : '0%' 
                          }}
                        />
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 focus-within:opacity-100 transition-opacity duration-200"
                          style={{ 
                            left: videoStates[testimonial.id].duration > 0 
                              ? `${(videoStates[testimonial.id].currentTime / videoStates[testimonial.id].duration) * 100}%` 
                              : '0%',
                            transform: 'translateX(-50%) translateY(-50%)'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Botão Play/Pause */}
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const video = e.currentTarget.closest('.group')?.querySelector('video') as HTMLVideoElement;
                          if (video) {
                            await togglePlayPause(testimonial.id, video);
                          }
                        }}
                        className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                        aria-label={videoStates[testimonial.id].isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                      >
                        {videoStates[testimonial.id].isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        )}
                      </button>
                      
                      {/* Botão Mute/Unmute */}
                      <button
                        onClick={(e) => {
                          const video = e.currentTarget.closest('.group')?.querySelector('video') as HTMLVideoElement;
                          if (video) toggleMute(testimonial.id, video);
                        }}
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        {videoStates[testimonial.id].isMuted ? (
                          <VolumeX className="w-4 h-4 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Indicador de play quando não está em hover */}
                {!videoStates[testimonial.id].isPlaying && !isIOSSafari() && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 cursor-pointer"
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const video = e.currentTarget.closest('.group')?.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        await togglePlayPause(testimonial.id, video);
                      }
                    }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/95 transition-colors duration-200">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Informações do depoimento */}
              <div className="mt-4 text-center space-y-2">
                <h3 className="font-semibold text-lg text-primary">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-client-satisfied font-semibold">
                  {testimonial.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {testimonial.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;