
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Check, X, Truck, Store as StoreIcon } from 'lucide-react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import Button from '../components/Button';

const ProductDetail: React.FC = () => {
  const { category, productSlug } = useParams<{ category: string; productSlug: string }>();
  const [isAddingToBag, setIsAddingToBag] = useState(false);
  const [isBagModalOpen, setIsBagModalOpen] = useState(false);

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
  
  // Deterministic seed for images based on slug
  const imageSeed = productSlug?.replace(/[^a-z0-9]/g, '') || 'apple';

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
    setIsAddingToBag(true);
    // Simulate API call
    setTimeout(() => {
        setIsAddingToBag(false);
        setIsBagModalOpen(true);
    }, 800);
  };

  return (
    <div className="pt-[44px] relative">
      {/* Product Hero */}
      <Hero 
        title={title}
        subtitle={`Sản phẩm ${categoryTitle} mới nhất.`}
        description="Mạnh mẽ. Tuyệt đẹp. Được thiết kế cho bạn."
        imageUrl={`https://picsum.photos/seed/${imageSeed}hero/1920/1080`} 
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
              src={`https://picsum.photos/seed/${imageSeed}feature1/1200/600`} 
              alt="Feature 1" 
              className="mt-12 rounded-3xl shadow-2xl mx-auto transition-transform hover:scale-[1.01] duration-700"
           />
      </div>

       {/* Grid Features */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#f5f5f7]">
        <GridItem 
            title="Hiệu năng"
            subtitle="Nhanh hơn bao giờ hết."
            imageUrl={`https://picsum.photos/seed/${imageSeed}perf/1000/1000?grayscale`}
            textColor="white"
            large
        />
        <GridItem 
            title="Thiết kế"
            subtitle="Mỏng. Nhẹ. Bền bỉ."
            imageUrl={`https://picsum.photos/seed/${imageSeed}design/1000/1000`}
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
                    src={`https://picsum.photos/seed/${imageSeed}screen/1000/600`} 
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
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                <img 
                    src={`https://picsum.photos/seed/${imageSeed}buy/500/500`} 
                    alt={title}
                    className="max-w-full h-auto rounded-xl shadow-md mix-blend-multiply"
                />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">Mua {title}</h2>
                <p className="text-gray-500 mb-6 text-sm">Giao hàng miễn phí. Trả lại dễ dàng.</p>
                
                <div className="mb-8">
                    <span className="text-2xl font-bold text-gray-900">24.999.000đ</span>
                    <p className="text-gray-500 text-sm mt-1">hoặc 1.041.000đ/tháng trong 24 tháng**</p>
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
                    label="Thêm vào Giỏ hàng" 
                    variant="primary" 
                    size="lg" 
                    className="w-full text-base"
                    onClick={handleAddToBag}
                    isLoading={isAddingToBag}
                />
            </div>
        </div>
      </div>

      {/* Added to Bag Modal */}
      {isBagModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
                onClick={() => setIsBagModalOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in p-6">
                <button 
                    onClick={() => setIsBagModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Check size={24} strokeWidth={3} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Đã thêm vào giỏ hàng
                    </h3>
                    
                    <div className="mt-6 flex gap-4 w-full items-center border p-3 rounded-xl border-gray-100 bg-gray-50">
                        <img 
                            src={`https://picsum.photos/seed/${imageSeed}buy/100/100`} 
                            alt={title}
                            className="w-16 h-16 rounded-md object-cover mix-blend-multiply"
                        />
                        <div className="text-left">
                            <p className="font-semibold text-sm text-gray-900">{title}</p>
                            <p className="text-sm text-gray-500">256GB - Màu mặc định</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full mt-8">
                        <Link 
                            to="/store/cart" 
                            className="w-full bg-apple-blue text-white py-3 rounded-full font-medium hover:bg-apple-blue-hover transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={18} />
                            Xem Giỏ hàng
                        </Link>
                        <button 
                            onClick={() => setIsBagModalOpen(false)}
                            className="text-apple-blue text-sm hover:underline font-medium"
                        >
                            Tiếp tục mua sắm
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
