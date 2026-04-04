import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  aspectRatio?: string;
}

export default function ProductImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy", 
  fetchPriority = "auto",
  aspectRatio = "aspect-square"
}: ProductImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Image optimization using wsrv.nl (WebP conversion and resizing)
  const getOptimizedSrc = (url: string) => {
    if (typeof window === 'undefined') return url;
    const origin = window.location.origin;
    
    // Don't use optimization on localhost as wsrv.nl can't reach it
    if (origin.includes('localhost') || origin.includes('127.0.0.1')) return url;
    
    // Construct absolute URL if it's relative
    const absoluteUrl = url.startsWith('http') ? url : `${origin}${url}`;
    
    // Optimization parameters: w=800 (width), q=80 (quality), output=webp
    return `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=800&q=80&output=webp`;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div className={`relative w-full ${aspectRatio} bg-[#f6f2ea] overflow-hidden`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#fdfcf8] z-10"
          >
            <Loader2 className="w-5 h-5 text-[#c8a74a] animate-spin mb-2" />
            <p className="text-[9px] font-sans text-[#c8a74a] uppercase tracking-[0.2em] animate-pulse">
              loading please wait
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={optimizedSrc}
        alt={alt}
        className={`${className} w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
