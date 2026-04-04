import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#f6f2ea_0%,#efe7da_100%)] border-t border-[rgba(180,150,90,0.25)] py-8 px-4 sm:px-6 lg:px-8 rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-bold text-[#c8a74a] tracking-widest">HONEY LUMINA</h2>
          <p className="text-[#c8a74a] font-serif italic">Jewellery made to turn heads and steal hearts 💗</p>
          <p className="hero-description !mx-0 !max-w-xs text-left">
            Flowers are too special to waste, they are meant to be preserve in timeless jewellery!
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-lg text-[#c8a74a]">Quick Links</h3>
          <nav className="flex flex-col gap-1 text-base elegant-text">
            <Link to="/" className="hover:text-[#c8a74a] transition-colors">Home</Link>
            <Link to="/necklaces" className="hover:text-[#c8a74a] transition-colors">Necklaces</Link>
            <Link to="/earrings" className="hover:text-[#c8a74a] transition-colors">Earrings</Link>
            <Link to="/rings" className="hover:text-[#c8a74a] transition-colors">Rings</Link>
            <Link to="/bracelets" className="hover:text-[#c8a74a] transition-colors">Bracelets</Link>
            <Link to="/frames" className="hover:text-[#c8a74a] transition-colors">Frames</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-lg text-[#c8a74a]">Connect</h3>
          <div className="flex flex-col gap-1.5 text-base elegant-text">
            <a 
              href="https://www.instagram.com/honey.lumina?igsh=ZWM5NTVjaXdvcHc0" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#c8a74a] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@honey.lumina</span>
            </a>
            <a href="mailto:honeylumina01@gmail.com" className="hover:text-[#c8a74a] transition-colors">
              honeylumina01@gmail.com
            </a>
            <div className="flex flex-col gap-0.5">
              <a href="tel:+917499528282" className="hover:text-[#c8a74a] transition-colors">
                Contact: +91 74995 28282
              </a>
              <a href="tel:+918530755248" className="hover:text-[#c8a74a] transition-colors">
                Contact: +91 85307 55248
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs elegant-text opacity-70">
        <div>
          © {new Date().getFullYear()} Honey Lumina. All rights reserved.
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <span>Developed by <span className="text-[#c8a74a] font-medium">Aviraj Murkute</span></span>
          <div className="flex gap-3">
            <a href="mailto:avimurkute.009@gmail.com" className="hover:text-[#c8a74a] transition-colors">avimurkute.009@gmail.com</a>
            <span>|</span>
            <a href="tel:9762481967" className="hover:text-[#c8a74a] transition-colors">9762481967</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
