import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state when image changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
    }
  }, [isOpen, imageUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-[110] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/20 rounded-full"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>

          <AnimatePresence>
            {!isLoaded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-[105]"
              >
                <Loader2 className="w-8 h-8 text-[#c8a74a] animate-spin mb-3" />
                <p className="text-xs font-sans text-white/80 uppercase tracking-[0.3em] animate-pulse">
                  loading please wait
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={(() => {
              if (typeof window === 'undefined') return imageUrl;
              const origin = window.location.origin;
              if (origin.includes('localhost') || origin.includes('127.0.0.1')) return imageUrl;
              const absoluteUrl = imageUrl.startsWith('http') ? imageUrl : `${origin}${imageUrl}`;
              return `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=1200&q=85&output=webp`;
            })()}
            alt="Product zoomed"
            className="max-w-full max-h-[85dvh] object-contain rounded-lg shadow-2xl"
            onLoad={() => setIsLoaded(true)}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

