import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import EarringsPage from './pages/EarringsPage';
import NecklacesPage from './pages/NecklacesPage';
import BraceletsPage from './pages/BraceletsPage';
import FramesPage from './pages/FramesPage';
import BanglesPage from './pages/BanglesPage';
import RingsPage from './pages/RingsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-[#3d2b1f] selection:bg-[#c8a74a]/30 relative z-10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/earrings" element={<EarringsPage />} />
            <Route path="/necklaces" element={<NecklacesPage />} />
            <Route path="/rings" element={<RingsPage />} />
            <Route path="/bracelets" element={<BraceletsPage />} />
            <Route path="/frames" element={<FramesPage />} />
            <Route path="/bangles" element={<BanglesPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
