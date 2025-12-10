
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Check, Truck, Store as StoreIcon, ChevronDown, Package, Heart, Share, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

// Mock Product Database
const PRODUCT_DB: Record<string, any> = {
  '46mm-gold-milanese-loop': {
    title: "46mm Gold Milanese Loop",
    price: 2499000,
    isNew: true,
    description: "A modern interpretation of a design developed in Milan at the end of the 19th century. Woven on specialized Italian machines, the smooth stainless steel mesh wraps fluidly around your wrist. And because it’s fully magnetic, the Milanese Loop is infinitely adjustable, ensuring a perfect fit.",
    colors: [
      { id: 'gold', name: 'Gold', hex: '#E2C49D' },
      { id: 'natural', name: 'Natural', hex: '#D4D4D1' },
      { id: 'slate', name: 'Slate', hex: '#3C3C3D' },
    ],
    sizes: ['42mm', '46mm'],
    images: {
      gold: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAR3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479536965',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAR3_AV1?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479536965',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAR3_AV2?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479536965',
      ],
      natural: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAQ3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479534575',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAQ3_AV1?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479534575',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAQ3_AV2?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479534575',
      ],
      slate: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAS3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479533355',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAS3_AV1?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479533355',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAS3_AV2?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479533355',
      ]
    },
    compatibility: ["Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch Series 9", "Apple Watch SE"]
  },
  'case-16-pro': {
      title: 'Ốp Lưng Silicon MagSafe cho iPhone 16 Pro',
      price: 1699000,
      isNew: true,
      description: "Designed by Apple to complement iPhone 16 Pro, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfiber lining for even more protection.",
      colors: [
          { id: 'black', name: 'Đen', hex: '#353535' },
          { id: 'denim', name: 'Xanh Denim', hex: '#a6c5e3' },
          { id: 'stone', name: 'Xám Đá', hex: '#f4e5ce' },
          { id: 'cypress', name: 'Xanh Bách', hex: '#9fcfbf' }
      ],
      sizes: ['iPhone 16 Pro', 'iPhone 16 Pro Max'],
      images: {
          black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035543'],
          denim: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162036066'],
          stone: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7G4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035658'],
          cypress: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7H4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035824']
      },
      compatibility: ["iPhone 16 Pro"]
  },
  'pencil-pro': {
      title: 'Apple Pencil Pro',
      price: 3499000,
      isNew: true,
      description: "Apple Pencil Pro adds even more magical capabilities to help bring your ideas to life. Advanced features like squeeze, barrel roll, and haptic feedback make marking up, taking notes, and creating a masterpiece more intuitive than ever.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['One Size'],
      images: {
          white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713841707336']
      },
      compatibility: ["iPad Pro 13-inch (M4)", "iPad Pro 11-inch (M4)", "iPad Air 13-inch (M2)", "iPad Air 11-inch (M2)"]
  }
};

const StoreProductDetail: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  // Fetch product data or fallback
  const productData = PRODUCT_DB[productSlug || ''] || PRODUCT_DB['46mm-gold-milanese-loop'];

  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setSelectedColor(productData.colors[0]);
    setSelectedSize(productData.sizes[0]);
    setActiveImageIndex(0);
    setIsAdding(false);
    setIsAdded(false);
  }, [productSlug, productData]);

  // Auto-dismiss toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const currentImages = productData.images[selectedColor.id] || productData.images[Object.keys(productData.images)[0]];
  const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productData.price);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleAddToBag = () => {
    if (isAdding || isAdded) return;
    setIsAdding(true);
    const item = {
        id: `${productSlug}-${selectedColor.id}-${selectedSize}`,
        name: `${productData.title} (${selectedColor.name}, ${selectedSize})`,
        price: productData.price,
        image: currentImages[0],
        quantity: 1,
        slug: productSlug || ''
    };

    setTimeout(() => {
        addToCart(item);
        setIsAdding(false);
        setIsAdded(true);
        setShowToast(true);

        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
    }, 1000);
  };

  return (
    <div className="pt-[44px] min-h-screen bg-white">
      {/* Toast */}
      <div 
          className={`
            fixed top-20 left-1/2 -translate-x-1/2 z-[80] 
            bg-white border border-gray-200 shadow-xl rounded-full 
            px-6 py-3 flex items-center gap-3 transition-all duration-500 ease-out
            ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}
          `}
       >
          <div className="bg-green-100 text-green-600 rounded-full p-1">
             <Check size={14} strokeWidth={3} />
          </div>
          <span className="text-sm font-medium text-gray-900">Added to Bag</span>
       </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row">
            
            {/* LEFT COLUMN: Gallery (Sticky on Desktop) */}
            <div className="w-full md:w-2/3 md:min-h-screen bg-white md:sticky md:top-[44px] p-6 md:p-12 flex flex-col items-center">
                 <div className="w-full max-w-2xl">
                     {/* Main Image Carousel */}
                     <div className="relative aspect-square w-full rounded-3xl overflow-hidden mb-6 md:mb-10 bg-gray-50 flex items-center justify-center group">
                         <img 
                            src={currentImages[activeImageIndex]} 
                            alt={`${productData.title} view ${activeImageIndex + 1}`}
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500"
                         />
                         
                         {/* Navigation Buttons */}
                         {currentImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                         )}
                     </div>
                     
                     {/* Thumbnails */}
                     {currentImages.length > 1 && (
                        <div className="flex justify-center gap-4 overflow-x-auto py-2 no-scrollbar">
                            {currentImages.map((img: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`
                                        w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden bg-gray-50 flex-shrink-0 transition-all
                                        ${activeImageIndex === idx ? 'border-apple-blue opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}
                                    `}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                                </button>
                            ))}
                        </div>
                     )}
                 </div>
            </div>

            {/* RIGHT COLUMN: Product Details (Scrollable) */}
            <div className="w-full md:w-1/3 px-6 py-10 md:pt-24 md:pr-12 lg:pr-24 flex flex-col gap-8 md:min-h-screen border-l border-gray-100">
                
                {/* Header */}
                <div>
                    {productData.isNew && (
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-wide mb-2 block">New</span>
                    )}
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">{productData.title}</h1>
                    <p className="text-gray-900 font-medium text-xl">{formattedPrice}</p>
                </div>

                {/* Color Selector */}
                {productData.colors.length > 0 && (
                    <div>
                        <span className="text-sm font-semibold text-gray-900 block mb-3">Color <span className="text-gray-500 font-normal">- {selectedColor.name}</span></span>
                        <div className="flex flex-wrap gap-3">
                            {productData.colors.map((color: any) => (
                                <button
                                    key={color.id}
                                    onClick={() => {
                                        setSelectedColor(color);
                                        setActiveImageIndex(0);
                                    }}
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
                )}

                {/* Size Selector */}
                {productData.sizes.length > 0 && (
                    <div>
                        <span className="text-sm font-semibold text-gray-900 block mb-3">Size</span>
                        <div className="grid grid-cols-2 gap-3">
                            {productData.sizes.map((size: string) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                                        py-3 px-4 rounded-xl border text-sm font-medium transition-all
                                        ${selectedSize === size 
                                            ? 'border-apple-blue ring-1 ring-apple-blue text-apple-blue' 
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                        }
                                    `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                    <Button 
                        label={isAdded ? "Added!" : "Add to Bag"}
                        variant="primary"
                        size="lg"
                        className={`w-full transition-all duration-300 ${isAdded ? '!bg-green-600 hover:!bg-green-700 !border-green-600' : ''}`}
                        onClick={handleAddToBag}
                        isLoading={isAdding}
                        disabled={isAdded}
                    />
                    <div className="flex justify-end gap-4 text-apple-blue text-sm font-medium">
                        <button className="flex items-center gap-1 hover:underline"><Heart size={16} /> Save for later</button>
                        <button className="flex items-center gap-1 hover:underline"><Share size={16} /> Share</button>
                    </div>
                </div>

                {/* Delivery Info */}
                <div className="space-y-4 text-sm bg-gray-50 p-4 rounded-xl">
                    <div className="flex gap-3">
                        <Truck className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-gray-900">Delivery:</p>
                            <p className="text-gray-500">In Stock. Free Shipping.</p>
                            <Link to="#" className="text-apple-blue hover:underline text-xs">Get delivery dates</Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <StoreIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-gray-900">Pickup:</p>
                            <p className="text-gray-500">Check availability at your nearest store.</p>
                        </div>
                    </div>
                </div>

                {/* Accordions */}
                <div className="border-t border-gray-200 mt-4">
                    <details className="group py-4 border-b border-gray-200 cursor-pointer">
                        <summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                            Product Information
                            <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pt-4 text-gray-600 text-sm leading-relaxed animate-fade-in">
                            <p>{productData.description}</p>
                        </div>
                    </details>
                    
                    <details className="group py-4 border-b border-gray-200 cursor-pointer">
                        <summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                            What's in the Box
                            <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pt-4 text-gray-600 text-sm animate-fade-in flex items-center gap-3">
                            <Package className="w-6 h-6 text-gray-400" />
                            <span>{productData.title}</span>
                        </div>
                    </details>

                    {productData.compatibility && (
                        <details className="group py-4 border-b border-gray-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                                Compatibility
                                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="pt-4 text-gray-600 text-sm animate-fade-in">
                                <h4 className="font-medium text-gray-900 mb-2">Compatible Models</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    {productData.compatibility.map((model: string) => (
                                        <li key={model}>{model}</li>
                                    ))}
                                </ul>
                            </div>
                        </details>
                    )}
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProductDetail;
