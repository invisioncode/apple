import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import Mac from './pages/Mac';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Watch from './pages/Watch';
import Airpods from './pages/Airpods';
import TvHome from './pages/TvHome';
import Entertainment from './pages/Entertainment';

// Scroll to top wrapper
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans antialiased overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/mac" element={<Mac />} />
                <Route path="/ipad" element={<Ipad />} />
                <Route path="/iphone" element={<Iphone />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/airpods" element={<Airpods />} />
                <Route path="/tv-home" element={<TvHome />} />
                <Route path="/entertainment" element={<Entertainment />} />
                {/* Fallback */}
                <Route path="*" element={<Home />} />
            </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;