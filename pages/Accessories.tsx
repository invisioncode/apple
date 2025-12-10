import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ChevronDown, ChevronRight, SlidersHorizontal, X, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';

const { Link } = ReactRouterDOM as any;

// Consolidated list matching StoreProductDetail.tsx keys
const ACCESSORIES_DATA = [
  // iPhone
  {
    id: 'case-16-pro',
    title: 'Ốp Lưng Silicon MagSafe cho iPhone 16 Pro - Đen',
    price: 1699000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035543',
    colors: ['#353535', '#a6c5e3', '#f4e5ce', '#9fcfbf'],
    category: 'iphone',
    description: 'Designed by Apple to complement iPhone 16 Pro, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand.'
  },
  {
    id: 'wallet-magsafe',
    title: 'Ví Vải Tinh Dệt MagSafe cho iPhone',
    price: 1699000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT263?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693012847146',
    colors: ['#682b31', '#2f3422', '#8e8274'],
    category: 'iphone',
    description: 'Designed with both style and function in mind, the new iPhone FineWoven Wallet with MagSafe is the perfect way to keep your ID and credit cards close at hand.'
  },
  // Power
  {
    id: 'magsafe-charger',
    title: 'Bộ Sạc MagSafe',
    price: 1199000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603996255000',
    colors: [],
    category: 'power',
    description: 'The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone 12 or later.'
  },
  {
    id: '20w-adapter',
    title: 'Củ Sạc USB-C 20W',
    price: 549000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603375626000',
    colors: [],
    category: 'power',
    description: 'The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.'
  },
  {
    id: '35w-adapter',
    title: '35W Dual USB-C Port Power Adapter',
    price: 1699000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652748058133',
    colors: [],
    category: 'power',
    description: 'The 35W Dual USB-C Port Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office, or on the go.'
  },
  {
    id: 'cable-usbc',
    title: 'Cáp Sạc USB-C (1m)',
    price: 539000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000',
    colors: [],
    category: 'power',
    description: 'This 1-meter charge cable — with USB-C connectors on both ends — is ideal for charging, syncing, and transferring data between USB-C devices.'
  },
  // Watch
  {
    id: '46mm-gold-milanese-loop',
    title: '46mm Gold Milanese Loop',
    price: 2499000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAR3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479536965',
    colors: ['#E2C49D', '#D4D4D1', '#3C3C3D'],
    category: 'watch',
    description: 'A modern interpretation of a design developed in Milan at the end of the 19th century. Woven on specialized Italian machines, the smooth stainless steel mesh wraps fluidly around your wrist.'
  },
  {
    id: 'ocean-band',
    title: 'Ocean Band - Blue',
    price: 2499000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQED3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660863032152',
    colors: ['#203c52', '#f0f0f0', '#ff6900'],
    category: 'watch',
    description: 'The Ocean Band is molded in a high performance elastomer with a tubular geometry allowing it to stretch for a perfect fit, even over a wetsuit.'
  },
  // iPad
  {
    id: 'pencil-pro',
    title: 'Apple Pencil Pro',
    price: 3499000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713841707336',
    colors: [],
    category: 'ipad',
    description: 'Apple Pencil Pro adds even more magical capabilities to help bring your ideas to life. Advanced features like squeeze, barrel roll, and haptic feedback make marking up intuitive.'
  },
  {
    id: 'magic-keyboard-ipad',
    title: 'Magic Keyboard for iPad Pro 13-inch (M4)',
    price: 9799000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR53?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713936663248',
    colors: ['#353535', '#e3e4e5'],
    category: 'ipad',
    description: 'The Magic Keyboard for iPad Pro delivers an amazing typing and trackpad experience in a sleek, portable new design with an aluminum palm rest.'
  },
  // Mac
  {
    id: 'magic-mouse-black',
    title: 'Magic Mouse - Black',
    price: 2499000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138486301',
    colors: ['#000000', '#f0f0f0'],
    category: 'mac',
    description: 'Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures.'
  },
  {
    id: 'magic-keyboard-touchid',
    title: 'Magic Keyboard with Touch ID',
    price: 4499000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645719947833',
    colors: ['#353535', '#e3e4e5'],
    category: 'mac',
    description: 'Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience.'
  },
  // AirTag
  {
    id: 'airtag-1pack',
    title: 'AirTag',
    price: 849000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX532?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028912000',
    colors: [],
    category: 'airtag',
    description: 'AirTag is an easy way to keep track of your stuff. Attach one to your keys. Put another in your backpack.'
  },
  {
    id: 'airtag-leather-keyring',
    title: 'AirTag Leather Key Ring',
    price: 990000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX4M2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028956000',
    colors: ['#8b5742', '#2b3f54'],
    category: 'airtag',
    description: 'The leather key ring is thoughtfully crafted from the finest materials. The stainless steel is as striking as it is strong.'
  },
  // Audio
  {
    id: 'airpods-pro-2',
    title: 'AirPods Pro (2nd Gen)',
    price: 6199000,
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
    colors: [],
    category: 'airpods',
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, Transparency mode, and now Adaptive Audio.'
  },
  {
    id: 'airpods-max',
    title: 'AirPods Max - Midnight',
    price: 13199000,
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MZOX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723843519890',
    colors: ['#2e3642', '#42586e', '#665c82', '#e87c64'],
    category: 'airpods',
    description: 'AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tất Cả Phụ Kiện' },
  { id: 'mac', label: 'Mac' },
  { id: 'ipad', label: 'iPad' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'watch', label: 'Apple Watch' },
  { id: 'airpods', label: 'AirPods' },
  { id: 'power', label: 'Sạc & Cáp' },
  { id: 'airtag', label: 'AirTag' },
];

const Accessories: React.FC = () => {
  const { language, localePrefix } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickLookProduct, setQuickLookProduct] = useState<any | null>(null);
  const isVi = language === 'vi';

  // Filter Logic
  const filteredProducts = selectedCategory === 'all' 
    ? ACCESSORIES_DATA 
    : ACCESSORIES_DATA.filter(p => p.category === selectedCategory);

  // Modal Handlers
  const openQuickLook = (product: any) => {
    setQuickLookProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickLook = () => {
    setQuickLookProduct(null);
    document.body.style.overflow = 'unset';
  };

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
                {filteredProducts.map((product) => (
                    <div 
                        key={product.id} 
                        className="group flex flex-col gap-4 p-4 rounded-2xl hover:bg-[#f5f5f7] transition-colors relative"
                    >
                        {/* Image Container with Quick Look Button */}
                        <div className="aspect-square w-full relative bg-white rounded-xl overflow-hidden flex items-center justify-center p-6 group/image">
                            <Link to={`${localePrefix}/store/product/${product.id}`} className="absolute inset-0 z-0">
                                <span className="sr-only">View product</span>
                            </Link>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                            />
                            {/* Quick Look Button */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openQuickLook(product);
                                }}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900 py-2 px-4 rounded-full shadow-md border border-gray-200 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-white hover:scale-105"
                            >
                                <Eye size={14} />
                                {isVi ? 'Xem nhanh' : 'Quick Look'}
                            </button>
                        </div>

                        {/* Details */}
                        <Link 
                            to={`${localePrefix}/store/product/${product.id}`}
                            className="flex flex-col gap-2 flex-1"
                        >
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
                        </Link>
                    </div>
                ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500">Không tìm thấy sản phẩm trong danh mục này.</p>
                </div>
            )}
        </div>
      </div>

      {/* New Find Accessories CTA Section */}
      <section className="py-24 px-6 bg-[#f5f5f7] border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                  {isVi ? 'Tìm phụ kiện hoàn hảo.' : 'Find the perfect accessory.'}
              </h2>
              <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light">
                  {isVi 
                      ? 'Nâng cao trải nghiệm với các phụ kiện được thiết kế riêng cho thiết bị Apple của bạn.' 
                      : 'Enhance your experience with accessories designed specifically for your Apple devices.'}
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer aspect-[16/9] md:aspect-[21/9]">
                   <img 
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/accessory-topic-mag-safe-202309?wid=1200&hei=400&fmt=jpeg&qlt=95&.v=1692906806950" 
                      alt="Accessories Lifestyle" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                   <div className="absolute inset-0 flex items-center justify-center">
                        <Button 
                            label={isVi ? 'Khám phá tất cả phụ kiện' : 'Find Accessories'} 
                            href="/store/accessories"
                            variant="primary"
                            size="lg"
                            className="bg-white text-black hover:bg-gray-100 !border-none scale-100 hover:scale-105"
                        />
                   </div>
              </div>
          </div>
      </section>

      {/* Quick Look Modal */}
      {quickLookProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
                onClick={closeQuickLook}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-fade-in scale-100 flex flex-col md:flex-row max-h-[90vh]">
                <button 
                    onClick={closeQuickLook}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                    <X size={20} className="text-gray-500" />
                </button>

                <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
                    <img 
                        src={quickLookProduct.image} 
                        alt={quickLookProduct.title} 
                        className="max-w-full max-h-[400px] object-contain mix-blend-multiply"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                    {quickLookProduct.isNew && (
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-wide mb-2">
                            {isVi ? 'Mới' : 'New'}
                        </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-2">
                        {quickLookProduct.title}
                    </h2>
                    <p className="text-xl font-medium text-gray-900 mb-6">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(quickLookProduct.price)}
                    </p>
                    
                    <div className="prose prose-sm text-gray-600 mb-8">
                        <p>{quickLookProduct.description}</p>
                    </div>

                    {quickLookProduct.colors.length > 0 && (
                        <div className="mb-8">
                            <span className="text-sm font-semibold text-gray-900 block mb-3">
                                {isVi ? 'Màu sắc' : 'Color'}
                            </span>
                            <div className="flex flex-wrap gap-3">
                                {quickLookProduct.colors.map((hex: string, idx: number) => (
                                    <div 
                                        key={idx} 
                                        className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" 
                                        style={{ backgroundColor: hex }} 
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-4">
                        <Button 
                            label={isVi ? 'Xem chi tiết sản phẩm' : 'View full details'}
                            href={`/store/product/${quickLookProduct.id}`}
                            variant="primary"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Accessories;