import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
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
import ProductDetail from './pages/ProductDetail';
import StoreProductDetail from './pages/StoreProductDetail';
import OrderStatus from './pages/OrderStatus';
import Accessories from './pages/Accessories';
import Support from './pages/Support';
import ChooseCountry from './pages/ChooseCountry';
import { useLanguage } from './contexts/LanguageContext';
import { Language } from './types';

const { BrowserRouter, Routes, Route, useLocation } = ReactRouterDOM as any;

// Scroll to top wrapper
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

// Routes for the main application content
const MainRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="store/order-status" element={<OrderStatus />} />
        <Route path="mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="watch" element={<Watch />} />
        <Route path="airpods" element={<Airpods />} />
        <Route path="tv-home" element={<TvHome />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="support" element={<Support />} />
        
        {/* Accessories Pages */}
        <Route path="store/accessories" element={<Accessories />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="store/buy-mac" element={<Mac />} /> {/* Fallback redirects to main pages for now */}
        
        {/* Specific Transactional Product Page (like Watch Bands) */}
        <Route path="store/product/:productSlug" element={<StoreProductDetail />} />

        {/* Dynamic Marketing Product Page for Submenu Links */}
        <Route path=":category/:productSlug" element={<ProductDetail />} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
    </Routes>
);

// Wrapper to set the language based on the route
const LocaleWrapper: React.FC<{ lang: Language }> = ({ lang }) => {
    const { setLanguage } = useLanguage();
    useEffect(() => {
        setLanguage(lang);
    }, [lang, setLanguage]);

    return (
        <div className="font-sans antialiased overflow-x-hidden flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <MainRoutes />
            </main>
            <Footer />
        </div>
    );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Country Selection Page (No Navbar/Footer in standard layout usually, or simplified) */}
        <Route path="/choose-country-region" element={<ChooseCountry />} />
        
        {/* Vietnam Locale */}
        <Route path="/vn/*" element={<LocaleWrapper lang="vi" />} />
        
        {/* Arabic (Oman) Locale */}
        <Route path="/om-ar/*" element={<LocaleWrapper lang="ar" />} />
        
        {/* Default (English/Global) */}
        <Route path="/*" element={<LocaleWrapper lang="en" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;