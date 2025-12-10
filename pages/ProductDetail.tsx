import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Check, X, Truck, Store as StoreIcon } from 'lucide-react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';

const { useParams, Link } = ReactRouterDOM as any;

// Configuration Data Types
interface ProductOption {
  id: string;
  label: string;
  priceModifier: number;
}

interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image: string;
}

interface ProductConfig {
  basePrice: number;
  colors: ProductColor[];
  options: ProductOption[];
  optionLabel: string;
}

// Mock Configuration Data
const PRODUCT_CONFIGS: Record<string, ProductConfig> = {
  'iphone-16-pro': {
    basePrice: 28999000,
    colors: [
      { id: 'natural', name: 'Titan Tự Nhiên', hex: '#d4d2cf', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-natural-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959' },
      { id: 'desert', name: 'Titan Sa Mạc', hex: '#bfa48f', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-desert-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959' },
      { id: 'white', name: 'Titan Trắng', hex: '#f2f1ed', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-white-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959' },
      { id: 'black', name: 'Titan Đen', hex: '#3c3c3d', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-black-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959' },
    ],
    options: [
      { id: '128gb', label: '128GB', priceModifier: 0 },
      { id: '256gb', label: '256GB', priceModifier: 3000000 },
      { id: '512gb', label: '512GB', priceModifier: 9000000 },
      { id: '1tb', label: '1TB', priceModifier: 15000000 },
    ],
    optionLabel: 'Dung lượng'
  },
  'macbook-air': {
    basePrice: 27999000,
    colors: [
      { id: 'midnight', name: 'Xanh Đen', hex: '#2e3642', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034' },
      { id: 'starlight', name: 'Ánh Sao', hex: '#f0e5d3', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034' },
      { id: 'spacegray', name: 'Xám Không Gian', hex: '#7d7e80', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034' },
      { id: 'silver', name: 'Bạc', hex: '#e3e4e5', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-silver-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034' },
    ],
    options: [
      { id: '8gb', label: '8GB Unified Memory', priceModifier: 0 },
      { id: '16gb', label: '16GB Unified Memory', priceModifier: 5000000 },
    ],
    optionLabel: 'Bộ nhớ'
  },
  'apple-watch-series-10': {
    basePrice: 10999000,
    colors: [
      { id: 'jetblack', name: 'Đen Jet Black', hex: '#000000', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-jetblack-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725515328330' },
      { id: 'rosegold', name: 'Vàng Hồng', hex: '#e6c7c2', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-rosegold-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725515328330' },
      { id: 'silver', name: 'Bạc', hex: '#e3e4e5', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-silver-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725515328330' },
    ],
    options: [
      { id: 'gps', label: 'GPS', priceModifier: 0 },
      { id: 'cellular', label: 'GPS + Cellular', priceModifier: 3000000 },
    ],
    optionLabel: 'Kết nối'
  },
  'default': {
     basePrice: 24999000,
     colors: [
         { id: 'default', name: 'Tiêu chuẩn', hex: '#cccccc', image: '' }
     ],
     options: [
         { id: 'standard', label: 'Tiêu chuẩn', priceModifier: 0 }
     ],
     optionLabel: 'Tùy chọn'
  }
};

const ProductDetail: React.FC = () => {
  const { category, productSlug } = useParams<{ category: string; productSlug: string }>();
  const [isAddingToBag, setIsAddingToBag] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const { addToCart } = useCart();

  // Configuration State
  const config = PRODUCT_CONFIGS[productSlug || ''] || PRODUCT_CONFIGS['default'];
  const [selectedColor, setSelectedColor] = useState<ProductColor>(config.colors[0]);
  const [selectedOption, setSelectedOption] = useState<ProductOption>(config.options[0]);

  // Reset selection when slug changes
  useEffect(() => {
    const newConfig = PRODUCT_CONFIGS[productSlug || ''] || PRODUCT_CONFIGS['default'];
    setSelectedColor(newConfig.colors[0]);
    setSelectedOption(newConfig.options[0]);
  }, [productSlug]);

  // Helper to format slug to title (e.g., "macbook-air" -> "MacBook Air")
  const formatTitle = (slug: string) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = formatTitle(productSlug || '');
  const categoryTitle = formatTitle(category || '');
  
  // Real Image Mapping for Marketing Sections
  const getProductImage = (slug: string, type: 'hero' | 'thumb' | 'feature') => {
      const map: Record<string, any> = {
          'iphone-16-pro': {
              hero: 'https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg',
              thumb: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-natural-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959',
              feature: 'https://www.apple.com/v/iphone-16-pro/c/images/overview/chip/chip_performance__c9g2p81x810m_large.jpg'
          },
          'macbook-air': {
              hero: 'https://www.apple.com/v/macbook-air/s/images/overview/hero_mba_13_15__8083041y1qyq_large.jpg',
              thumb: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
              feature: 'https://www.apple.com/v/macbook-air/s/images/overview/design/design_top__d7240c15s942_large.jpg'
          },
          'apple-watch-series-10': {
              hero: 'https://www.apple.com/v/apple-watch-series-10/a/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg',
              thumb: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-jetblack-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725515328330',
              feature: 'https://www.apple.com/v/apple-watch-series-10/a/images/overview/design/design_hero_static__d9k43u7n7yau_large.jpg'
          }
      };
      
      const productImages = map[slug];
      if (productImages) return productImages[type];

      // Fallback
      const imageSeed = slug?.replace(/[^a-z0-9]/g, '') || 'apple';
      return `https://picsum.photos/seed/${imageSeed}${type}/1000/1000`;
  };

  const heroImage = getProductImage(productSlug || '', 'hero');
  const featureImage = getProductImage(productSlug || '', 'feature');
  
  // Use specific color image if available, else fallback
  const displayImage = selectedColor.image || getProductImage(productSlug || '', 'thumb');
  
  const totalPrice = config.basePrice + selectedOption.priceModifier;
  const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        // Offset calculation: 44px (Navbar) + ~60px (Subnav) + padding
        const headerOffset = 110; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const handleAddToBag = () => {
    if (isAddingToBag || isAdded) return;
    setIsAddingToBag(true);
    
    // Construct cart item
    const newItem = {
        id: `${productSlug}-${selectedColor.id}-${selectedOption.id}`,
        name: `${title} - ${selectedColor.name} (${selectedOption.label})`,
        price: totalPrice,
        image: displayImage,
        quantity: 1,
        slug: productSlug || ''
    };

    // Simulate network delay
    setTimeout(() => {
        addToCart(newItem);
        setIsAddingToBag(false);
        setIsAdded(true);
        setShowToast(true);

        // Reset button state after 2 seconds
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
    }, 800);
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="pt-[44px] relative">
      {/* Toast Notification */}
       <div 
          className={`
            fixed top-24 left-1/2 -translate-x-1/2 z-[80] 
            bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full 
            pl-4 pr-6 py-3 flex items-center gap-3 transition-all duration-500 ease-out
            ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}
          `}
          role="status"
          aria-live="polite"
       >
          <div className="bg-green-500 text-white rounded-full p-1 shadow-sm">
             <Check size={16} strokeWidth={3} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Đã thêm vào giỏ hàng</span>
            <Link to="/store" className="text-xs text-apple-blue hover:underline font-medium">
              Xem giỏ hàng &gt;
            </Link>
          </div>
       </div>

      {/* Product Hero */}
      <Hero 
        title={title}
        subtitle={`Sản phẩm ${categoryTitle} mới nhất.`}
        description="Mạnh mẽ. Tuyệt đẹp. Được thiết kế cho bạn."
        imageUrl={heroImage}
        textColor="black"
        links={[
            { label: 'Mua ngay', url: '#buy', primary: true },
            { label: 'Xem thông số', url: '#specs', primary: false }
        ]}
      />

      {/* Breadcrumb / Navigation */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-[44px] z-30 transition-all">
        <div className="max-w-[1024px] mx-auto px-4 py-3 flex justify-between items-center">
             <h1 className="text-xl font-semibold text-gray-900 hidden md:block">{title}</h1>
             <div className="flex gap-4 text-xs md:text-sm items-center ml-auto md:ml-0">
                 <a 
                    href="#overview" 
                    onClick={(e) => scrollToSection(e, 'overview')}
                    className="text-gray-600 hover:text-apple-blue cursor-pointer transition-colors"
                 >
                    Tổng quan
                 </a>
                 <a 
                    href="#tech-specs" 
                    onClick={(e) => scrollToSection(e, 'tech-specs')}
                    className="text-gray-600 hover:text-apple-blue cursor-pointer transition-colors"
                 >
                    Thông số kỹ thuật
                 </a>
                 <button 
                    onClick={(e) => scrollToSection(e, 'buy')} 
                    className="px-3 py-1 bg-apple-blue text-white rounded-full hover:bg-apple-blue-hover transition-colors text-xs md:text-sm"
                 >
                    Mua
                 </button>
             </div>
        </div>
      </div>

      {/* Feature Section 1 (Overview) */}
      <div id="overview" className="bg-white py-20 px-6 text-center scroll-mt-20">
           <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 animate-fade-in">Trải nghiệm vượt trội.</h2>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">
               {title} mang đến hiệu suất đáng kinh ngạc và thời lượng pin cả ngày, giúp bạn làm việc, giải trí và sáng tạo mọi lúc mọi nơi.
           </p>
           <img 
              src={featureImage}
              alt="Feature" 
              className="mt-12 rounded-3xl shadow-2xl mx-auto transition-transform hover:scale-[1.01] duration-700"
           />
      </div>

       {/* Grid Features */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#f5f5f7]">
        <GridItem 
            title="Hiệu năng"
            subtitle="Nhanh hơn bao giờ hết."
            imageUrl="https://www.apple.com/v/macbook-pro/ak/images/overview/chips/chip_m3_pro_large.jpg"
            textColor="white"
            large
        />
        <GridItem 
            title="Thiết kế"
            subtitle="Mỏng. Nhẹ. Bền bỉ."
            imageUrl="https://www.apple.com/v/macbook-air/s/images/overview/design/design_top__d7240c15s942_large.jpg"
            textColor="black"
            large
        />
      </div>

       {/* Feature Section 2 (Tech Specs) */}
       <div id="tech-specs" className="bg-black text-white py-24 px-6 text-center scroll-mt-20">
           <h2 className="text-4xl md:text-5xl font-semibold mb-6">Màn hình Retina tuyệt đẹp.</h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
               Mọi thứ trông đẹp hơn trên màn hình Liquid Retina với công nghệ True Tone.
           </p>
           <div className="max-w-4xl mx-auto">
                <img 
                    src="https://www.apple.com/v/macbook-air/s/images/overview/display/display_hero__dd0s3s58h72q_large.jpg"
                    alt="Screen" 
                    className="rounded-xl border border-gray-800 shadow-lg shadow-white/10"
                />
           </div>
           
           <div className="max-w-[1024px] mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Chip</h3>
                    <p className="text-gray-400 text-sm">Apple M3</p>
                    <p className="text-gray-400 text-sm">8-core CPU</p>
                    <p className="text-gray-400 text-sm">10-core GPU</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Bộ nhớ</h3>
                    <p className="text-gray-400 text-sm">8GB Unified Memory</p>
                    <p className="text-gray-400 text-sm">Configurable to 24GB</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Lưu trữ</h3>
                    <p className="text-gray-400 text-sm">256GB SSD</p>
                    <p className="text-gray-400 text-sm">Configurable to 2TB</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Pin</h3>
                    <p className="text-gray-400 text-sm">Up to 18 hours</p>
                    <p className="text-gray-400 text-sm">Lithium-polymer</p>
                </div>
           </div>
      </div>

      {/* Buy Section */}
      <div id="buy" className="bg-[#f5f5f7] py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative">
                 <img 
                    src={displayImage}
                    alt={`${title} - ${selectedColor.name}`}
                    className="max-w-full h-auto rounded-xl shadow-sm object-contain animate-fade-in transition-all duration-500"
                    key={selectedColor.id} // Forces re-animation on color change
                />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-orange-600 font-bold text-xs uppercase tracking-wide mb-1">Mới</span>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Mua {title}</h2>
                
                {/* Configuration: Colors */}
                <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-900 block mb-3">
                        Màu sắc: <span className="text-gray-500 font-normal">{selectedColor.name}</span>
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {config.colors.map((color) => (
                            <button
                                key={color.id}
                                onClick={() => setSelectedColor(color)}
                                className={`
                                    w-10 h-10 rounded-full shadow-sm border border-gray-200 relative focus:outline-none transition-transform hover:scale-105
                                    ${selectedColor.id === color.id ? 'ring-2 ring-offset-2 ring-apple-blue' : ''}
                                `}
                                style={{ backgroundColor: color.hex }}
                                aria-label={`Select color ${color.name}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Configuration: Options (Storage/Size) */}
                <div className="mb-8">
                     <span className="text-sm font-semibold text-gray-900 block mb-3">
                        {config.optionLabel}
                     </span>
                     <div className="grid grid-cols-2 gap-3">
                        {config.options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setSelectedOption(option)}
                                className={`
                                    py-3 px-4 rounded-xl border text-sm font-medium transition-all text-left
                                    ${selectedOption.id === option.id 
                                        ? 'border-apple-blue ring-1 ring-apple-blue text-apple-blue bg-blue-50/10' 
                                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                    }
                                `}
                            >
                                <span className="block font-semibold">{option.label}</span>
                                {option.priceModifier > 0 && (
                                    <span className="text-xs text-gray-500">
                                        + {new Intl.NumberFormat('vi-VN').format(option.priceModifier)}đ
                                    </span>
                                )}
                            </button>
                        ))}
                     </div>
                </div>

                <div className="mb-8 border-t border-gray-100 pt-6">
                    <span className="text-3xl font-bold text-gray-900">{formattedPrice}</span>
                    <p className="text-gray-500 text-sm mt-1">hoặc {new Intl.NumberFormat('vi-VN').format(Math.round(totalPrice / 24))}đ/tháng trong 24 tháng**</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                        <Truck className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Giao hàng:</p>
                            <p className="text-sm text-gray-500">Còn hàng. Miễn phí vận chuyển.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <StoreIcon className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Nhận hàng tại cửa hàng:</p>
                            <p className="text-sm text-gray-500">Kiểm tra tình trạng sẵn có.</p>
                        </div>
                    </div>
                </div>

                <Button 
                    label={isAdded ? "Đã thêm!" : "Thêm vào Giỏ hàng"} 
                    variant="primary" 
                    size="lg" 
                    className={`w-full text-base transition-all duration-300 ${isAdded ? '!bg-green-600 hover:!bg-green-700 !border-green-600' : ''}`}
                    onClick={handleAddToBag}
                    isLoading={isAddingToBag}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;