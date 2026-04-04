import { useState } from 'react';
import { motion } from 'motion/react';
import ImageModal from '../components/ImageModal';
import ProductImageSlider from '../components/ProductImageSlider';

const frames = [
  { images: ['Frame1.jpeg'], name: 'Do It (Car Hanger)', price: 400 },
  { images: ['Frame2.jpeg'], name: 'Krishna (Car Hanger)', price: 400 },
  { images: ['frame3.jpeg', 'frame4.jpeg'], name: 'Engagement Frame', price: 1700, pricePrefix: 'Starting from ' },
];

const keychains = [
  { images: ['Keychain1.jpeg'], name: 'Keychain 1', price: 150 },
  { images: ['Keychain2.jpeg'], name: 'Keychain 2', price: 150 },
  { images: ['Keychain3.jpeg'], name: 'Keychain 3', price: 150 },
  { images: ['Keychain4.jpeg'], name: 'Keychain 4', price: 150 },
];

export default function FramesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const buyNow = (productName: string, productPrice: number, productImage: string) => {
    const productLink = window.location.href;
    const imageUrl = new URL(productImage, window.location.origin).href;
    const message = encodeURIComponent(
`Hello Honey Lumina I would like to order this item.

Product Name: ${productName}
Product Price: ₹${productPrice}

Product Image: ${imageUrl}
Product Link: ${productLink}

Please share payment and delivery details.

Thank you`
    );

    const whatsappURL = `https://wa.me/917499528282?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] pt-[88px] pb-20">
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#c8a74a] mb-6 tracking-widest"
        >
          Frames
        </motion.h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16">
          {frames.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div 
                className="w-full aspect-square overflow-hidden bg-[#f6f2ea]"
              >
                <ProductImageSlider 
                  images={product.images.map(img => `/images/${img}`)}
                  alt={product.name}
                  onImageClick={(img) => setSelectedImage(img)}
                />
              </div>
              <div className="p-5 flex flex-col items-center flex-grow w-full">
                <h3 className="font-serif text-[13px] sm:text-sm md:text-base text-[#c8a74a] text-center mb-1 product-name tracking-wide w-full truncate">{product.name}</h3>
                <p className="elegant-text text-base mb-4">{(product as any).pricePrefix || ''}₹{product.price}</p>
                <button
                  onClick={() => buyNow(product.name, product.price, `/images/${product.images[0]}`)}
                  className="w-full border-2 border-[#c8a74a] text-[#c8a74a] py-2.5 rounded-full text-xs font-bold hover:bg-[#c8a74a] hover:text-white transition-all transform active:scale-95 uppercase tracking-widest"
                >
                  BUY NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#c8a74a] mb-6 tracking-widest"
        >
          Keychains
        </motion.h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {keychains.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div 
                className="w-full aspect-square overflow-hidden bg-[#f6f2ea]"
              >
                <ProductImageSlider 
                  images={product.images.map(img => `/images/${img}`)}
                  alt={product.name}
                  onImageClick={(img) => setSelectedImage(img)}
                />
              </div>
              <div className="p-5 flex flex-col items-center flex-grow w-full">
                <h3 className="font-serif text-[13px] sm:text-sm md:text-base text-[#c8a74a] text-center mb-1 product-name tracking-wide w-full truncate">{product.name}</h3>
                <p className="elegant-text text-base mb-4">{(product as any).pricePrefix || ''}₹{product.price}</p>
                <button
                  onClick={() => buyNow(product.name, product.price, `/images/${product.images[0]}`)}
                  className="w-full border-2 border-[#c8a74a] text-[#c8a74a] py-2.5 rounded-full text-xs font-bold hover:bg-[#c8a74a] hover:text-white transition-all transform active:scale-95 uppercase tracking-widest"
                >
                  BUY NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ImageModal 
        isOpen={!!selectedImage} 
        imageUrl={selectedImage || ''} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
