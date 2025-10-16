# Compatibilidade de Vídeos com iOS

## Problema Identificado

Os vídeos de depoimentos não estavam sendo reproduzidos em dispositivos iOS (iPhone/iPad) usando Safari, funcionando apenas em dispositivos Android e navegadores Chrome no desktop.

## Causas Principais

1. **Formato de Vídeo**: Os vídeos estavam apenas no formato WebM, que não é suportado nativamente pelo Safari iOS
2. **Atributos Específicos**: Faltavam atributos específicos para iOS como `webkit-playsinline`
3. **Controles Customizados**: Os controles customizados podem conflitar com as políticas de reprodução do iOS
4. **Políticas de Autoplay**: iOS tem políticas rígidas sobre reprodução automática de vídeo

## Soluções Implementadas

### 1. Conversão de Formatos
- Convertidos todos os vídeos WebM para MP4 (H.264) usando FFmpeg
- Configurações otimizadas para iOS:
  - Codec: `libx264`
  - Profile: `baseline`
  - Level: `3.0`
  - Pixel Format: `yuv420p`
  - Audio: `aac` 128k
  - Flag: `+faststart` para streaming otimizado

### 2. Fallback de Múltiplos Formatos
```tsx
<video>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>Seu navegador não suporta reprodução de vídeo.</p>
</video>
```

### 3. Atributos Específicos para iOS
- `playsInline`: Permite reprodução inline sem fullscreen
- `webkit-playsinline="true"`: Compatibilidade com versões antigas do iOS
- `controls={isIOSSafari()}`: Mostra controles nativos no iOS Safari

### 4. Detecção de Dispositivo
Criado utilitário `deviceDetection.ts` com funções:
- `isIOS()`: Detecta dispositivos iOS
- `isSafari()`: Detecta navegador Safari
- `isIOSSafari()`: Combinação específica
- `getVideoSources()`: Retorna formatos apropriados

### 5. Tratamento Específico de Reprodução
- Força carregamento com `video.load()` no iOS
- Tratamento específico de erros `NotAllowedError`
- Oculta controles customizados no iOS Safari para evitar conflitos

## Arquivos Modificados

1. `src/utils/deviceDetection.ts` - Novo arquivo com utilitários
2. `src/components/TestimonialsSection.tsx` - Componente principal atualizado
3. `public/video_depoimento/*.mp4` - Novos arquivos de vídeo convertidos

## Configurações FFmpeg Utilizadas

```bash
ffmpeg -i input.webm \
  -c:v libx264 \
  -profile:v baseline \
  -level 3.0 \
  -pix_fmt yuv420p \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  output.mp4
```

## Testes Recomendados

1. **iPhone Safari**: Testar reprodução em diferentes versões do iOS
2. **iPad Safari**: Verificar comportamento em tablets
3. **Chrome iOS**: Confirmar funcionamento em Chrome mobile
4. **Orientação**: Testar rotação de tela durante reprodução
5. **Conexão**: Testar em diferentes velocidades de internet

## Observações Importantes

- Os controles nativos são mostrados automaticamente no iOS Safari
- A reprodução ainda requer interação do usuário (política do iOS)
- Os vídeos MP4 são maiores que WebM, mas garantem compatibilidade
- O fallback para WebM mantém eficiência em outros navegadores

## Monitoramento

Logs específicos foram adicionados para identificar problemas:
- Carregamento de vídeos
- Erros de reprodução específicos do iOS
- Warnings sobre políticas de autoplay