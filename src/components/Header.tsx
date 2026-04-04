import { ArrowLeft, Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcf8]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Left: Desktop Nav / Back Button */}
        <div className="flex items-center gap-8 z-10">
          {!isHomePage ? (
            <button 
              onClick={() => navigate(-1)}
              className="text-[#2C1A0E] hover:text-[#c8a74a] transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          ) : (
            <nav className="hidden lg:flex items-center gap-6 text-sm font-serif uppercase tracking-widest text-[#3d2b1f]">
              <Link to="/necklaces" className="hover:text-[#c8a74a] transition-colors">Necklaces</Link>
              <Link to="/earrings" className="hover:text-[#c8a74a] transition-colors">Earrings</Link>
              <Link to="/rings" className="hover:text-[#c8a74a] transition-colors">Rings</Link>
            </nav>
          )}
        </div>

        {/* Center: Logo */}
        <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#c8a74a] absolute left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          HONEY LUMINA
        </Link>
        
        {/* Right: Desktop Nav / Menu Icon */}
        <div className="flex items-center justify-end gap-8 z-10">
          {isHomePage && (
            <nav className="hidden lg:flex items-center gap-6 text-sm font-serif uppercase tracking-widest text-[#3d2b1f]">
              <Link to="/bracelets" className="hover:text-[#c8a74a] transition-colors">Bracelets</Link>
              <Link to="/frames" className="hover:text-[#c8a74a] transition-colors">Frames</Link>
              <Link to="/bangles" className="hover:text-[#c8a74a] transition-colors">Bangles</Link>
            </nav>
          )}
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#3d2b1f] hover:text-[#c8a74a] transition-colors lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a 
            href="https://www.instagram.com/honey.lumina?igsh=ZWM5NTVjaXdvcHc0" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden lg:flex items-center gap-2 group"
          >
            <Instagram className="w-5 h-5 text-[#c8a74a] group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-[#FDF8F0] shadow-[0_8px_20px_rgba(0,0,0,0.08)] p-8 z-40 mobile-menu"
          >
            <nav className="flex flex-col items-center gap-6 text-xl font-serif text-[#c8a74a]">
              <Link to="/" className="hover:scale-105 transition-transform">Home</Link>
              <Link to="/necklaces" className="hover:scale-105 transition-transform">Necklaces</Link>
              <Link to="/earrings" className="hover:scale-105 transition-transform">Earrings</Link>
              <Link to="/rings" className="hover:scale-105 transition-transform">Rings</Link>
              <Link to="/bracelets" className="hover:scale-105 transition-transform">Bracelets</Link>
              <Link to="/frames" className="hover:scale-105 transition-transform">Frames</Link>
              <Link to="/bangles" className="hover:scale-105 transition-transform">Bangles</Link>
              
              <div className="w-12 h-px bg-[#c8a74a]/20 my-2" />
              
              <a 
                href="https://www.instagram.com/honey.lumina?igsh=ZWM5NTVjaXdvcHc0" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 group"
              >
                <Instagram className="w-5 h-5 text-[#c8a74a] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-sans text-gray-500 group-hover:text-[#c8a74a] transition-colors">@honey.lumina</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
