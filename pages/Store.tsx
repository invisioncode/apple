
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';

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
    heading: "Góc nhìn lớn nhất. Thân máy mỏng nhất.",
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
    textColor: "black",
    url: "/store/product/macbook-air"
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
  return (
    <div className="pt-[44px] bg-[#f5f5f7] min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="pt-20 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
             <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
               Cửa Hàng. <span className="text-gray-500">Cách tốt nhất để mua sản phẩm bạn yêu thích.</span>
             </h1>
           </div>
           
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                 <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853" alt="Specialist" className="w-9 h-9 rounded-full" />
                 <div className="text-sm">
                    <p className="font-semibold text-gray-900">Cần tư vấn mua sắm?</p>
                    <a href="#" className="text-apple-blue hover:underline">Hỏi chuyên gia Apple</a>
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
                 to={cat.url}
                 className="flex flex-col gap-3 group w-[136px]"
               >
                 <div className="w-[136px] h-[100px] md:h-[136px] md:w-[200px] lg:w-[136px] lg:h-[100px]">
                    <img 
                        src={cat.img} 
                        alt={cat.name} 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>
                 <span className="text-sm font-medium text-gray-900 group-hover:underline underline-offset-2">
                    {cat.name}
                 </span>
               </Link>
             ))}
           </div>
        </div>

        {/* Section: The Latest */}
        <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Thế hệ mới nhất. <span className="text-gray-500">Cập nhật những sản phẩm mới.</span>
            </h2>
            
            <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8">
                <div className="flex gap-6 w-max">
                    {LATEST_PRODUCTS.map((product) => (
                        <div 
                            key={product.id}
                            className={`
                                relative w-[320px] md:w-[400px] lg:w-[480px] h-[500px] rounded-3xl overflow-hidden shadow-lg snap-start transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group
                                ${product.textColor === 'white' ? 'text-white' : 'text-gray-900'}
                            `}
                        >
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-0 left-0 w-full p-8 z-10">
                                <span className="text-xs font-bold uppercase tracking-wide opacity-80 mb-2 block">{product.title}</span>
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">{product.heading}</h3>
                                <p className="mb-4 font-medium">{product.price}</p>
                                <Button 
                                    label="Mua"
                                    href={product.url}
                                    size="sm"
                                    className={product.textColor === 'white' ? '!bg-white !text-black hover:!bg-gray-100' : ''}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12">
           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
               Liên kết nhanh
           </h2>
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                <Link to="/store/order-status" className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                    Tình trạng đơn hàng
                </Link>
                <Link to="/store/find" className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                    Tìm cửa hàng
                </Link>
                <Link to="/store/financing" className="px-6 py-3 bg-white rounded-full font-medium text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 whitespace-nowrap">
                    Tài chính
                </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Store;
