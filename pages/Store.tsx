import React, { useRef, useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const { Link } = ReactRouterDOM as any;

// Mock Data for "The Latest" Shelf
const LATEST_PRODUCTS = [
  {
    id: 1,
    title: "IPHONE 16 PRO",
    heading: "Titan đẳng cấp.",
    price: "Từ 28.999.000đ",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725468285526",
    textColor: "white",
    url: "/store/product/iphone-16-pro"
  },
  {
    id: 2,
    title: "APPLE WATCH SERIES 10",
    heading: "Góc nhìn lớn nhất.",
    price: "Từ 10.999.000đ",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s10-unselect-gallery-3-202409?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1725492895697",
    textColor: "black",
    url: "/store/product/apple-watch-series-10"
  },
  {
    id: 3,
    title: "MACBOOK AIR",
    heading: "Mỏng nhẹ. M3 mạnh mẽ.",
    price: "Từ 27.999.000đ",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-13-m3-midnight-gallery-1-202402?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1707262100806",
    textColor: "white",
    url: "/store/product/macbook-air"
  },
  {
    id: 4,
    title: "IPAD PRO",
    heading: "Mỏng không tưởng.",
    price: "Từ 28.999.000đ",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202405?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1715010648589",
    textColor: "black",
    url: "/store/product/ipad-pro"
  }
];

// Mock Data for Categories
const CATEGORIES = [
  { name: 'Mac', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696559522079', url: '/mac' },
  { name: 'iPhone', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723857140417', url: '/iphone' },
  { name: 'iPad', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714151341561', url: '/ipad' },
  { name: 'Apple Watch', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838', url: '/watch' },
  { name: 'AirPods', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974345590', url: '/airpods' },
  { name: 'AirTag', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000', url: '/store/accessories' },
  { name: 'Apple TV 4K', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484', url: '/tv-home' },
  { name: 'Phụ kiện', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723799661444', url: '/store/accessories' },
];

const Store: React.FC = () => {
  const { localePrefix, language } = useLanguage();
  const isVi = language === 'vi';
  
  // Carousel State
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        checkScroll(); // Initial check
        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = 420; // Approx card width + gap
        const newScrollLeft = direction === 'left' 
            ? scrollContainerRef.current.scrollLeft - scrollAmount 
            : scrollContainerRef.current.scrollLeft + scrollAmount;
        
        scrollContainerRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div className="pt-[44px] bg-[#f5f5f7] dark:bg-black min-h-screen pb-20 transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="pt-20 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
             <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
               {isVi ? 'Cửa Hàng.' : 'Store.'} <span className="text-gray-500">{isVi ? 'Cách tốt nhất để mua sản phẩm bạn yêu thích.' : 'The best way to buy the products you love.'}</span>
             </h1>
           </div>
           
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                 <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853" alt="Specialist" className="w-9 h-9 rounded-full" />
                 <div className="text-sm">
                    <p className="font-semibold text-gray-900 dark:text-white">{isVi ? 'Cần tư vấn mua sắm?' : 'Need shopping help?'}</p>
                    <a href="#" className="text-apple-blue hover:underline">{isVi ? 'Hỏi chuyên gia Apple' : 'Ask an Apple Specialist'}</a>
                 </div>
              </div>
           </div>
        </div>

        {/* Horizontal Category Nav */}
        <div className="overflow-x-auto no-scrollbar pb-10">
           <div className="flex gap-4 md:gap-6 w-max">
             {CATEGORIES.map((cat, idx) => (
               <Link 
                 key={idx} 
                 to={`${localePrefix}${cat.url}`}
                 className="flex flex-col gap-3 group w-[136px]"
               >
                 <div className="w-[136px] h-[100px] md:h-[136px] md:w-[200px] lg:w-[136px] lg:h-[100px]">
                    <img 
                        src={cat.img} 
                        alt={cat.name} 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>
                 <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:underline underline-offset-2">
                    {cat.name}
                 </span>
               </Link>
             ))}
           </div>
        </div>

        {/* Section: The Latest (Enhanced Carousel) */}
        <div className="mt-8 relative group/carousel">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                {isVi ? 'Thế hệ mới nhất.' : 'The Latest.'} <span className="text-gray-500">{isVi ? 'Cập nhật những sản phẩm mới.' : 'Take a look at what’s new.'}</span>
            </h2>
            
            {/* Navigation Buttons */}
            {showLeftArrow && (
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-[55%] -translate-y-1/2 z-20 w-12 h-12 bg-gray-300/50 hover:bg-gray-300/80 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 dark:text-white transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} />
                </button>
            )}
            
            {showRightArrow && (
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-[55%] -translate-y-1/2 z-20 w-12 h-12 bg-gray-300/50 hover:bg-gray-300/80 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 dark:text-white transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            <div 
                ref={scrollContainerRef}
                className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-2"
            >
                <div className="flex gap-6 w-max px-2">
                    {LATEST_PRODUCTS.map((product) => (
                        <Link 
                            to={`${localePrefix}${product.url}`}
                            key={product.id}
                            className={`
                                relative w-[312px] md:w-[400px] lg:w-[480px] h-[500px] rounded-[30px] overflow-hidden shadow-lg snap-start transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group
                                ${product.textColor === 'white' ? 'text-white' : 'text-gray-900'}
                            `}
                        >
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay for text readability if needed */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${product.textColor === 'white' ? 'from-black/40 via-transparent to-transparent' : 'from-white/10 via-transparent to-transparent'} opacity-60`} />

                            <div className="absolute top-0 left-0 w-full p-8 z-10 flex flex-col h-full justify-between">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wide opacity-90 mb-2 block drop-shadow-md">{product.title}</span>
                                    <h3 className="text-3xl md:text-4xl font-semibold mb-2 leading-tight drop-shadow-md">{product.heading}</h3>
                                    <p className="font-medium text-lg drop-shadow-md">{product.price}</p>
                                </div>
                                {/* Optional: Add a button or CTA here if desired, otherwise the whole card is clickable */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12">
           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
               {isVi ? 'Liên kết nhanh' : 'Quick Links'}
           </h2>
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                <Link to={`${localePrefix}/store/order-status`} className="px-6 py-3 bg-white dark:bg-[#1d1d1f] rounded-full font-medium text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 whitespace-nowrap transition-colors">
                    {isVi ? 'Tình trạng đơn hàng' : 'Order Status'}
                </Link>
                <Link to={`${localePrefix}/store/find`} className="px-6 py-3 bg-white dark:bg-[#1d1d1f] rounded-full font-medium text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 whitespace-nowrap transition-colors">
                    {isVi ? 'Tìm cửa hàng' : 'Find a Store'}
                </Link>
                <Link to={`${localePrefix}/store/financing`} className="px-6 py-3 bg-white dark:bg-[#1d1d1f] rounded-full font-medium text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 whitespace-nowrap transition-colors">
                    {isVi ? 'Tài chính' : 'Financing'}
                </Link>
                <Link to={`${localePrefix}/store/accessories`} className="px-6 py-3 bg-white dark:bg-[#1d1d1f] rounded-full font-medium text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 whitespace-nowrap transition-colors">
                    {isVi ? 'Mua tất cả phụ kiện' : 'Shop all accessories'}
                </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Store;