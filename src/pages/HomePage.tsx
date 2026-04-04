import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Necklaces', path: '/necklaces', image: 'necklacefront.png' },
  { name: 'Earrings', path: '/earrings', image: 'earringsfront.png' },
  { name: 'Rings', path: '/rings', image: 'ringfront.png' },
  { name: 'Bracelets', path: '/bracelets', image: 'bracletfront.png' },
  { name: 'Frames', path: '/frames', image: 'framesfront.png' },
  { name: 'Bangles', path: '/bangles', image: 'banglesfront.png' },
];

export default function HomePage() {
  return (
    <div className="bg-[#fdfcf8] relative z-10">
      {/* Hero Section */}
      <section className="relative pt-[88px] pb-0 flex flex-col items-center justify-center overflow-hidden z-20">
        <div className="relative text-center lg:text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px]">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[32px] xs:text-[40px] sm:text-[56px] md:text-[68px] font-serif text-[#c8a74a] mb-3 tracking-tight uppercase leading-none"
            >
              HONEY LUMINA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-serif italic text-[#c8a74a] leading-tight"
            >
              Jewellery made to turn heads and steal hearts 💗
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description lg:mx-0 mt-4 mb-6"
            >
              Flowers are too special to waste, they are meant to be preserve in timeless jewellery!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-7 lg:mb-0"
            >
              <button 
                onClick={() => document.getElementById('shop-by-category')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border-2 border-[#c8a74a] text-[#c8a74a] px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest hover:bg-[#c8a74a] hover:text-white transition-all hover:scale-105 active:scale-95 uppercase"
              >
                EXPLORE COLLECTION
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full lg:w-1/2 rounded-[20px] sm:rounded-[28px] overflow-hidden border border-[#c8a74a]/10 bg-white/30 backdrop-blur-sm"
          >
            <div className="w-full h-auto bg-[#f6f2ea]">
              <img 
                src="/mainpagefront.jpeg" 
                alt="HONEY LUMINA Collection"
                className="w-full h-auto block transition-opacity duration-500"
                width={800}
                height={600}
                fetchPriority="high"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rotating Circular Brand Badge */}
      <div className="badge-wrapper scale-75 sm:scale-90 md:scale-100">
        <svg className="rotating-badge" viewBox="0 0 160 160">
          <defs>
            <path id="circlePath" d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"/>
          </defs>
          <text fontSize="15" fill="#C6A75A" fontFamily="inherit" letterSpacing="2">
            <textPath href="#circlePath" startOffset="62.5%" textAnchor="middle">Resin Flower Jewellery</textPath>
            <textPath href="#circlePath" startOffset="87.5%" textAnchor="middle">Honey Lumina</textPath>
          </text>
        </svg>
        <span className="badge-star">★</span>
      </div>

      {/* Shop By Category */}
      <section id="shop-by-category" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 relative">
        <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-serif text-[#c8a74a] mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={category.path}
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-[#f6f2ea] shadow-sm hover:shadow-xl transition-all"
              >
                <img 
                  src={`/categories/${category.image}`}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={400}
                  height={400}
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-serif text-white text-center mb-4 drop-shadow-lg"
                  >
                    {category.name}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm font-medium border border-white/40 px-6 py-2 rounded-full backdrop-blur-md">
                    View Collection <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
