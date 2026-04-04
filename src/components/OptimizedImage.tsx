import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function OptimizedImage(props: OptimizedImageProps) {
  const { src, alt, className, fallbackSrc, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      className={`${className} transition-opacity duration-500`}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        setError(true);
        setIsLoaded(true);
      }}
      {...rest}
    />
  );
}
