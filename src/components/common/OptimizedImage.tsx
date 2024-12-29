import React, { CSSProperties, useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  isBackground?: boolean;
  priority?: boolean;
  hover?: 'scale' | 'none';
  width?: number;
  height?: number;
  quality?: number;
  transparent?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
  objectPosition = 'center',
  isBackground = false,
  priority = false,
  hover = 'none',
  width,
  height,
  quality = 75,
  transparent = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Get WebP source
  const getWebPSource = () => {
    if (!src.startsWith('/')) return null;
    return src.replace(/\.(jpe?g|png)$/i, '.webp');
  };

  // Get optimized fallback source
  const getOptimizedSource = () => {
    if (!src.startsWith('/')) return src;
    const ext = src.match(/\.(jpe?g|png)$/i)?.[0] || '';
    return src.replace(ext, `_optimized${ext}`);
  };

  // Generate srcset for responsive images
  const generateSrcSet = (imgSrc: string) => {
    if (!imgSrc.startsWith('/')) return undefined;
    
    // Optimize widths based on common device sizes
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
    const srcSet = widths
      .map((w) => {
        // Add width and quality parameters
        const srcWithParams = `${imgSrc}?w=${w}&q=${quality}`;
        return `${srcWithParams} ${w}w`;
      })
      .join(', ');
    
    return srcSet;
  };

  // Generate sizes attribute based on image role
  const generateSizes = () => {
    if (isBackground) {
      return '100vw';
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  const imageStyle: CSSProperties = {
    ...(isBackground ? {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      objectFit,
      objectPosition,
    } : {
      objectFit,
      objectPosition,
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined,
    }),
    opacity: transparent ? 1 : (isLoaded ? 1 : 0),
    transition: transparent ? undefined : 'opacity 0.3s ease-in-out',
    filter: transparent ? undefined : (isLoaded ? 'none' : 'blur(10px)'),
    transform: transparent ? undefined : (isLoaded ? 'scale(1)' : 'scale(1.1)')
  };

  const containerStyle: CSSProperties = {
    position: isBackground ? 'absolute' : 'relative',
    height: isBackground ? '100%' : height ? `${height}px` : undefined,
    width: isBackground ? '100%' : width ? `${width}px` : undefined,
    overflow: 'hidden',
    backgroundColor: transparent ? 'transparent' : '#f3f4f6', // Light gray background while loading
  };

  const hoverClass = hover === 'scale' ? 'transform hover:scale-105 transition-transform duration-300' : '';
  const webpSource = getWebPSource();
  const optimizedSource = getOptimizedSource();

  const imageElement = (
    <img 
      src={src} // Use original source for transparent images
      alt={alt}
      className={`${className} ${hoverClass}`}
      style={imageStyle}
      loading={priority ? 'eager' : 'lazy'}
      width={width}
      height={height}
      srcSet={transparent ? undefined : generateSrcSet(optimizedSource)}
      sizes={transparent ? undefined : generateSizes()}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setIsLoaded(true)}
    />
  );

  const content = webpSource && !transparent ? (
    <picture>
      <source
        srcSet={generateSrcSet(webpSource)}
        sizes={generateSizes()}
        type="image/webp"
      />
      {imageElement}
    </picture>
  ) : imageElement;

  return (
    <div style={containerStyle} className={isBackground ? 'absolute inset-0' : ''}>
      {content}
    </div>
  );
};

export default OptimizedImage; 