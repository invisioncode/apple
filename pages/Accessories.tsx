
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Mock Data for Accessories
const ACCESSORIES_DATA = [
  {
    id: 'case-16-pro',
    title: 'Ốp Lưng Silicon MagSafe cho iPhone 16 Pro - Đen',
    price: 1699000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035543',
    colors: ['#353535', '#a6c5e3', '#f4e5ce', '#9fcfbf'],
    category: 'iphone'
  },
  {
    id: 'magsafe-charger',
    title: 'Bộ Sạc MagSafe',
    price: 1199000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603996255000',
    colors: [],
    category: 'power'
  },
  {
    id: 'airtag-1pack',
    title: 'AirTag',
    price: 849000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX532?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028912000',
    colors: [],
    category: 'airtag'
  },
  {
    id: '20w-adapter',
    title: 'Củ Sạc USB-C 20W',
    price: 549000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603375626000',
    colors: [],
    category: 'power'
  },
  {
    id: 'pencil-pro',
    title: 'Apple Pencil Pro',
    price: 3499000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713841707336',
    colors: [],
    category: 'ipad'
  },
  {
    id: 'smart-folio-ipad',
    title: 'Smart Folio cho iPad Air 13 inch (M2) - Tím Nhạt',
    price: 2499000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713310769970',
    colors: ['#e5dcef', '#353535', '#a8b5c9'],
    category: 'ipad'
  },
  {
    id: 'magic-keyboard',
    title: 'Magic Keyboard cho iPad Pro 13 inch (M4) - Đen',
    price: 9799000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR53?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713936663248',
    colors: ['#353535', '#e3e4e5'],
    category: 'ipad'
  },
  {
    id: 'wallet-magsafe',
    title: 'Ví Vải Tinh Dệt MagSafe cho iPhone - Xanh Mực',
    price: 1699000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT263?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693012847146',
    colors: ['#3e4f5c', '#682b31', '#2f3422'],
    category: 'iphone'
  },
  {
    id: 'cable-usbc',
    title: 'Cáp Sạc USB-C (1m)',
    price: 539000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000',
    colors: [],
    category: 'power'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tất Cả Phụ Kiện' },
  { id: 'mac', label: 'Mac' },
  { id: 'ipad', label: 'iPad' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'watch', label: 'Apple Watch' },
  { id: 'airpods', label: 'AirPods' },
  { id: 'tv-home', label: 'TV & Nhà' },
];

const PRODUCT_TYPES = [
  { id: 'cases', label: 'Ốp Lưng & Bảo Vệ' },
  { id: 'power', label: 'Sạc & Cáp' },
  { id: 'headphones', label: 'Tai Nghe & Loa' },
  { id: 'mice', label: 'Chuột & Bàn Phím' },
  { id: 'creative', label: 'Sáng Tạo' },
];

const Accessories: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isVi = language === 'vi';

  return (
    <div className="pt-[44px] min-h-screen bg-white">
      {/* Header Banner */}
      <div className="border-b border-gray-200 bg-[#f5f5f7] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          {isVi ? 'Phụ kiện Apple' : 'Apple Accessories'}
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto px-4">
            {isVi 
            ? 'Mua sắm các phụ kiện mới nhất cho các sản phẩm Apple của bạn.' 
            : 'Shop the latest accessories for your Apple products.'}
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-[240px] flex-shrink-0 p-4 md:p-8 md:min-h-screen border-b md:border-b-0 md:border-r border-gray-200">
           <div className="md:sticky md:top-24">
              <div className="mb-8">
                 <h3 className="font-semibold text-[#1d1d1f] mb-4 text-sm uppercase tracking-wide">
                    {isVi ? 'Duyệt theo sản phẩm' : 'Browse by Product'}
                 </h3>
                 <ul className="space-y-2">
                    {CATEGORIES.map(cat => (
                        <li key={cat.id}>
                            <button
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`text-sm w-full text-left py-1 hover:text-apple-blue hover:underline ${selectedCategory === cat.id ? 'font-bold text-[#1d1d1f]' : 'text-[#1d1d1f]'}`}
                            >
                                {cat.label}
                            </button>
                        </li>
                    ))}
                 </ul>
              </div>

              <div className="mb-8">
                 <h3 className="font-semibold text-[#1d1d1f] mb-4 text-sm uppercase tracking-wide">
                    {isVi ? 'Loại phụ kiện' : 'Accessory Type'}
                 </h3>
                 <ul className="space-y-2">
                    {PRODUCT_TYPES.map(type => (
                        <li key={type.id}>
                            <Link to="#" className="text-sm text-[#1d1d1f] hover:text-apple-blue hover:underline block py-1">
                                {type.label}
                            </Link>
                        </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-4 md:p-8 bg-white">
            {/* Filter Toggle (Mobile) */}
            <div className="md:hidden flex items-center gap-2 mb-6 border border-gray-300 rounded-lg px-4 py-2 w-max">
                <SlidersHorizontal size={16} />
                <span className="text-sm font-medium">Lọc</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {ACCESSORIES_DATA.map((product) => (
                    <Link 
                        key={product.id} 
                        to={`/store/product/${product.id}`}
                        className="group flex flex-col gap-4 p-4 rounded-2xl hover:bg-[#f5f5f7] transition-colors"
                    >
                        {/* Image Container */}
                        <div className="aspect-square w-full relative bg-white rounded-xl overflow-hidden flex items-center justify-center p-6">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-2 flex-1">
                            {product.isNew && (
                                <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">
                                    {isVi ? 'Mới' : 'New'}
                                </span>
                            )}
                            <h3 className="text-sm font-semibold text-[#1d1d1f] group-hover:text-apple-blue group-hover:underline leading-relaxed line-clamp-2">
                                {product.title}
                            </h3>
                            <p className="text-sm text-[#1d1d1f] mt-auto">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                            </p>
                            
                            {/* Swatches */}
                            {product.colors.length > 0 && (
                                <div className="flex gap-2 mt-2">
                                    {product.colors.map((hex, idx) => (
                                        <div 
                                            key={idx} 
                                            className="w-3 h-3 rounded-full border border-gray-200 shadow-sm" 
                                            style={{ backgroundColor: hex }} 
                                        />
                                    ))}
                                    {product.colors.length > 5 && (
                                        <span className="text-[10px] text-gray-500">+ more</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
