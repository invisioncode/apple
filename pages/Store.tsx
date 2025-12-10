
import React, { useState, useMemo } from 'react';
import GridItem from '../components/GridItem';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// Mock Product Data
const PRODUCTS = [
  // Mac
  { id: 1, name: 'MacBook Air M3', category: 'Mac', price: 27999000, image: 'https://picsum.photos/seed/macairm3/400/300', slug: 'macbook-air' },
  { id: 2, name: 'MacBook Pro 14"', category: 'Mac', price: 39999000, image: 'https://picsum.photos/seed/macpro14/400/300', slug: 'macbook-pro' },
  { id: 3, name: 'iMac 24"', category: 'Mac', price: 36999000, image: 'https://picsum.photos/seed/imac24/400/300', slug: 'imac' },
  { id: 4, name: 'Mac Studio', category: 'Mac', price: 54999000, image: 'https://picsum.photos/seed/macstudio/400/300', slug: 'mac-studio' },
  
  // iPhone
  { id: 5, name: 'iPhone 16 Pro Max', category: 'iPhone', price: 34999000, image: 'https://picsum.photos/seed/iphone16promax/400/300', slug: 'iphone-16-pro' },
  { id: 6, name: 'iPhone 16', category: 'iPhone', price: 22999000, image: 'https://picsum.photos/seed/iphone16/400/300', slug: 'iphone-16' },
  { id: 7, name: 'iPhone 15', category: 'iPhone', price: 19999000, image: 'https://picsum.photos/seed/iphone15/400/300', slug: 'iphone-15' },
  { id: 8, name: 'iPhone SE', category: 'iPhone', price: 11999000, image: 'https://picsum.photos/seed/iphonese/400/300', slug: 'iphone-se' },

  // iPad
  { id: 9, name: 'iPad Pro M4', category: 'iPad', price: 28999000, image: 'https://picsum.photos/seed/ipadprom4/400/300', slug: 'ipad-pro' },
  { id: 10, name: 'iPad Air', category: 'iPad', price: 16999000, image: 'https://picsum.photos/seed/ipadair/400/300', slug: 'ipad-air' },
  { id: 11, name: 'iPad mini', category: 'iPad', price: 13999000, image: 'https://picsum.photos/seed/ipadmini/400/300', slug: 'ipad-mini' },
  
  // Watch
  { id: 12, name: 'Apple Watch Ultra 2', category: 'Apple Watch', price: 21999000, image: 'https://picsum.photos/seed/watchultra2/400/300', slug: 'apple-watch-ultra-2' },
  { id: 13, name: 'Apple Watch Series 10', category: 'Apple Watch', price: 10999000, image: 'https://picsum.photos/seed/watchs10/400/300', slug: 'apple-watch-series-10' },
  { id: 14, name: 'Apple Watch SE', category: 'Apple Watch', price: 6999000, image: 'https://picsum.photos/seed/watchse/400/300', slug: 'apple-watch-se' },

  // AirPods
  { id: 15, name: 'AirPods Pro 2', category: 'AirPods', price: 6199000, image: 'https://picsum.photos/seed/airpodspro2/400/300', slug: 'airpods-pro-2' },
  { id: 16, name: 'AirPods Max', category: 'AirPods', price: 13999000, image: 'https://picsum.photos/seed/airpodsmax/400/300', slug: 'airpods-max' },
  
  // Accessories & TV
  { id: 17, name: 'Apple TV 4K', category: 'Apple TV 4K', price: 3499000, image: 'https://picsum.photos/seed/appletv4k/400/300', slug: 'apple-tv-4k' },
  { id: 18, name: 'AirTag (4 Pack)', category: 'AirTag', price: 2799000, image: 'https://picsum.photos/seed/airtag4pack/400/300', slug: 'airtag' },
];

const CATEGORIES = [
  { name: 'All', display: 'Tất cả', img: '' },
  { name: 'Mac', display: 'Mac', img: 'https://picsum.photos/seed/macstore/200/150' },
  { name: 'iPhone', display: 'iPhone', img: 'https://picsum.photos/seed/iphonestore/200/150' },
  { name: 'iPad', display: 'iPad', img: 'https://picsum.photos/seed/ipadstore/200/150' },
  { name: 'Apple Watch', display: 'Apple Watch', img: 'https://picsum.photos/seed/watchstore/200/150' },
  { name: 'AirPods', display: 'AirPods', img: 'https://picsum.photos/seed/airpodsstore/200/150' },
  { name: 'AirTag', display: 'AirTag', img: 'https://picsum.photos/seed/airtagstore/200/150' },
  { name: 'Apple TV 4K', display: 'Apple TV 4K', img: 'https://picsum.photos/seed/tvstore/200/150' },
];

const PRICE_RANGES = [
  { id: 'all', label: 'Tất cả giá' },
  { id: 'under-10m', label: 'Dưới 10 triệu' },
  { id: '10m-30m', label: '10 - 30 triệu' },
  { id: 'over-30m', label: 'Trên 30 triệu' },
];

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;

      // Price Filter
      let priceMatch = true;
      if (selectedPriceRange === 'under-10m') {
        priceMatch = product.price < 10000000;
      } else if (selectedPriceRange === '10m-30m') {
        priceMatch = product.price >= 10000000 && product.price <= 30000000;
      } else if (selectedPriceRange === 'over-30m') {
        priceMatch = product.price > 30000000;
      }

      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPriceRange]);

  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="pt-[44px] bg-[#f5f5f7] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Cửa Hàng. <span className="text-gray-500">Cách tốt nhất để mua sản phẩm bạn yêu thích.</span>
        </h1>
        
        {/* Category Filter Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
           {CATEGORIES.map((item, idx) => {
             const isActive = selectedCategory === item.name;
             return (
               <button
                 key={idx} 
                 onClick={() => setSelectedCategory(item.name)}
                 className={`flex flex-col items-center gap-3 cursor-pointer group min-w-[120px] snap-start transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
               >
                  {item.img ? (
                    <img 
                      src={item.img} 
                      alt={item.display} 
                      className={`w-[120px] h-[90px] rounded-xl object-cover shadow-sm transition-all ${isActive ? 'ring-2 ring-apple-blue shadow-md' : 'group-hover:shadow-md'}`} 
                    />
                  ) : (
                    <div className={`w-[120px] h-[90px] rounded-xl shadow-sm flex items-center justify-center bg-white border border-gray-200 ${isActive ? 'ring-2 ring-apple-blue' : ''}`}>
                      <span className="font-semibold text-gray-500">Tất cả</span>
                    </div>
                  )}
                  <span className={`text-sm font-medium ${isActive ? 'text-apple-dark font-bold' : 'text-gray-900'}`}>
                    {item.display}
                  </span>
               </button>
             )
           })}
        </div>

        {/* Price Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-medium text-gray-500 mr-2">Mức giá:</span>
          {PRICE_RANGES.map((range) => (
            <button
              key={range.id}
              onClick={() => setSelectedPriceRange(range.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedPriceRange === range.id
                  ? 'bg-apple-dark text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Filtered Product Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {selectedCategory === 'All' ? 'Tất cả sản phẩm' : `Sản phẩm ${selectedCategory}`}
              <span className="text-gray-500 font-normal ml-2 text-lg">({filteredProducts.length})</span>
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group h-full">
                   <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                   </div>
                   
                   <span className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">Mới</span>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                   <p className="text-gray-900 mb-6 font-medium">{formatCurrency(product.price)}</p>
                   
                   <div className="mt-auto w-full">
                      <Button 
                        label="Mua ngay" 
                        href={`/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.slug}`}
                        variant="primary"
                        size="sm"
                        className="w-full"
                      />
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 font-medium">Không tìm thấy sản phẩm phù hợp.</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSelectedPriceRange('all')}}
                className="mt-4 text-apple-blue hover:underline"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>

        {/* Featured Section (kept for structure) */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GridItem 
                  title="iPhone 16 Pro"
                  subtitle="Mạnh mẽ. Đẹp ngỡ ngàng."
                  imageUrl="https://picsum.photos/seed/iphonenew/800/600"
                  textColor="black"
                  large
                  links={[{ label: 'Tìm hiểu thêm', url: '/iphone/iphone-16-pro' }]}
              />
              <GridItem 
                  title="Apple Watch Series 10"
                  subtitle="Màn hình lớn hơn, thiết kế mỏng hơn."
                  imageUrl="https://picsum.photos/seed/watchnew/800/600"
                  textColor="white"
                  large
                  links={[{ label: 'Tìm hiểu thêm', url: '/watch/apple-watch-series-10' }]}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
