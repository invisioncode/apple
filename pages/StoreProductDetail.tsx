import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Check, Truck, Store as StoreIcon, ChevronDown, Package, Heart, Share, ChevronLeft, ChevronRight, Star, Loader2 } from 'lucide-react';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const { useParams, Link } = ReactRouterDOM as any;

// Comprehensive Mock Product Database matching Apple Store Inventory
const PRODUCT_DB: Record<string, any> = {
  // --- WATCH BANDS ---
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
      gold: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAR3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479536965'],
      natural: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAQ3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479534575'],
      slate: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAS3ref?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1724479533355']
    },
    compatibility: ["Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE"]
  },
  'ocean-band': {
    title: "Ocean Band - Blue",
    price: 2499000,
    isNew: false,
    description: "The Ocean Band is molded in a high performance elastomer with a tubular geometry allowing it to stretch for a perfect fit, even over a wetsuit. The titanium buckle and adjustable loop secure the band during high-speed water sports.",
    colors: [
      { id: 'blue', name: 'Blue', hex: '#203c52' },
      { id: 'white', name: 'White', hex: '#f0f0f0' },
      { id: 'orange', name: 'Orange', hex: '#ff6900' }
    ],
    sizes: ['One Size'],
    images: {
      blue: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQED3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660863032152'],
      white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQEH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660863038670'],
      orange: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQEG3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660863035384']
    },
    compatibility: ["Apple Watch Ultra 2", "Apple Watch Ultra"]
  },

  // --- IPHONE ACCESSORIES ---
  'case-16-pro': {
      title: 'Ốp Lưng Silicon MagSafe cho iPhone 16 Pro',
      price: 1699000,
      isNew: true,
      description: "Designed by Apple to complement iPhone 16 Pro, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand.",
      colors: [
          { id: 'black', name: 'Đen', hex: '#353535' },
          { id: 'denim', name: 'Xanh Denim', hex: '#a6c5e3' },
          { id: 'stone', name: 'Xám Đá', hex: '#f4e5ce' },
          { id: 'cypress', name: 'Xanh Bách', hex: '#9fcfbf' }
      ],
      sizes: ['iPhone 16 Pro'],
      images: {
          black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035543'],
          denim: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162036066'],
          stone: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7G4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035658'],
          cypress: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7H4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162035824']
      },
      compatibility: ["iPhone 16 Pro"]
  },
  'wallet-magsafe': {
      title: 'Ví Vải Tinh Dệt MagSafe cho iPhone',
      price: 1699000,
      isNew: false,
      description: "Designed with both style and function in mind, the new iPhone FineWoven Wallet with MagSafe is the perfect way to keep your ID and credit cards close at hand.",
      colors: [
          { id: 'mulberry', name: 'Mulberry', hex: '#682b31' },
          { id: 'evergreen', name: 'Evergreen', hex: '#2f3422' },
          { id: 'taupe', name: 'Taupe', hex: '#8e8274' }
      ],
      sizes: ['One Size'],
      images: {
        mulberry: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT263?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693012847146'],
        evergreen: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT273?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693012847146'],
        taupe: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT253?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693012847146']
      },
      compatibility: ["iPhone 12 or later"]
  },

  // --- IPAD ACCESSORIES ---
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
      compatibility: ["iPad Pro (M4)", "iPad Air (M2)"]
  },
  'magic-keyboard-ipad': {
      title: 'Magic Keyboard for iPad Pro 13-inch (M4)',
      price: 9799000,
      isNew: true,
      description: "The Magic Keyboard for iPad Pro delivers an amazing typing and trackpad experience in a sleek, portable new design with an aluminum palm rest.",
      colors: [
          { id: 'black', name: 'Black', hex: '#353535' },
          { id: 'white', name: 'White', hex: '#e3e4e5' }
      ],
      sizes: ['13-inch', '11-inch'],
      images: {
          black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR53?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713936663248'],
          white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWR23?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713936663248']
      },
      compatibility: ["iPad Pro 13-inch (M4)"]
  },

  // --- MAC ACCESSORIES ---
  'magic-mouse-black': {
      title: 'Magic Mouse - Black Multi-Touch Surface',
      price: 2499000,
      isNew: false,
      description: "Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures.",
      colors: [
          { id: 'black', name: 'Black', hex: '#000000' },
          { id: 'white', name: 'White', hex: '#f0f0f0' }
      ],
      sizes: ['One Size'],
      images: {
          black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645138486301'],
          white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1626468075000']
      },
      compatibility: ["Mac with Bluetooth"]
  },
  'magic-keyboard-touchid': {
      title: 'Magic Keyboard with Touch ID',
      price: 4499000,
      isNew: false,
      description: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys for gaming.",
      colors: [
          { id: 'black', name: 'Black Keys', hex: '#353535' },
          { id: 'white', name: 'White Keys', hex: '#e3e4e5' }
      ],
      sizes: ['Full Size'],
      images: {
          black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645719947833'],
          white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2C3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010471000']
      },
      compatibility: ["Mac with Apple Silicon"]
  },

  // --- POWER & CABLES ---
  'magsafe-charger': {
      title: 'Bộ Sạc MagSafe',
      price: 1199000,
      isNew: false,
      description: "The MagSafe Charger makes wireless charging a snap. The perfectly aligned magnets attach to your iPhone 12 or later.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['1m', '2m'],
      images: {
        white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603996255000']
      },
      compatibility: ["iPhone 12 or later"]
  },
  '20w-adapter': {
      title: 'Củ Sạc USB-C 20W',
      price: 549000,
      isNew: false,
      description: "The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['Standard'],
      images: {
        white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603375626000']
      },
      compatibility: ["USB-C Devices"]
  },
  '35w-adapter': {
      title: '35W Dual USB-C Port Power Adapter',
      price: 1699000,
      isNew: false,
      description: "The 35W Dual USB-C Port Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office, or on the go.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['Standard'],
      images: {
          white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652748058133']
      },
      compatibility: ["USB-C Devices"]
  },
  'cable-usbc': {
      title: 'Cáp Sạc USB-C (1m)',
      price: 539000,
      isNew: false,
      description: "This 1-meter charge cable — with USB-C connectors on both ends — is ideal for charging, syncing, and transferring data between USB-C devices.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['1m', '2m'],
      images: {
        white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000']
      },
      compatibility: ["USB-C Devices"]
  },

  // --- AIRTAG ---
  'airtag-1pack': {
      title: 'AirTag',
      price: 849000,
      isNew: false,
      description: "AirTag is an easy way to keep track of your stuff. Attach one to your keys. Put another in your backpack.",
      colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
      sizes: ['1 Pack', '4 Pack'],
      images: {
        white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX532?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028912000']
      },
      compatibility: ["iPhone SE", "iPhone 6s or later", "iPad Pro", "iPad (5th gen or later)"]
  },
  'airtag-leather-keyring': {
      title: 'AirTag Leather Key Ring - Saddle Brown',
      price: 990000,
      isNew: false,
      description: "The leather key ring is thoughtfully crafted from the finest materials. The stainless steel is as striking as it is strong, while the French leather is specially tanned and soft to the touch.",
      colors: [
          { id: 'brown', name: 'Saddle Brown', hex: '#8b5742' },
          { id: 'blue', name: 'Baltic Blue', hex: '#2b3f54' }
      ],
      sizes: ['One Size'],
      images: {
          brown: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX4M2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028956000'],
          blue: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX4A2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1618028956000']
      },
      compatibility: ["AirTag"]
  },

   // --- AUDIO ---
   'airpods-pro-2': {
    title: 'AirPods Pro (2nd generation)',
    price: 6199000,
    isNew: false,
    description: "AirPods Pro feature up to 2x more Active Noise Cancellation, Transparency mode, and now Adaptive Audio.",
    colors: [{ id: 'white', name: 'White', hex: '#ffffff' }],
    sizes: ['One Size'],
    images: {
        white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985']
    },
    compatibility: ["Bluetooth Devices"]
   },
   'airpods-max': {
    title: 'AirPods Max - Midnight',
    price: 13199000,
    isNew: true,
    description: "AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio.",
    colors: [
        { id: 'midnight', name: 'Midnight', hex: '#2e3642' },
        { id: 'blue', name: 'Blue', hex: '#42586e' },
        { id: 'purple', name: 'Purple', hex: '#665c82' },
        { id: 'orange', name: 'Orange', hex: '#e87c64' },
        { id: 'starlight', name: 'Starlight', hex: '#e6dccf' },
    ],
    sizes: ['One Size'],
    images: {
        midnight: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MZOX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723843519890'],
        blue: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MZP03?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723843519890'],
        purple: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MZP13?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723843519890']
    },
    compatibility: ["Bluetooth Devices"]
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
    const newData = PRODUCT_DB[productSlug || ''] || PRODUCT_DB['46mm-gold-milanese-loop'];
    setSelectedColor(newData.colors[0]);
    setSelectedSize(newData.sizes[0]);
    setActiveImageIndex(0);
    setIsAdding(false);
    setIsAdded(false);
  }, [productSlug]);

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
    
    // Create Item
    const item = {
        id: `${productSlug}-${selectedColor.id}-${selectedSize}`,
        name: `${productData.title} (${selectedColor.name}, ${selectedSize})`,
        price: productData.price,
        image: currentImages[0],
        quantity: 1,
        slug: productSlug || ''
    };

    // Simulate Network Request
    setTimeout(() => {
        addToCart(item);
        setIsAdding(false);
        setIsAdded(true);
        setShowToast(true);

        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
    }, 1500);
  };

  return (
    <div className="pt-[44px] min-h-screen bg-white">
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
            <span className="text-sm font-semibold text-gray-900">Added to Bag</span>
            <Link to="/store" className="text-xs text-apple-blue hover:underline font-medium">
              Review Bag &gt;
            </Link>
          </div>
       </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row">
            
            {/* LEFT COLUMN: Gallery */}
            <div className="w-full md:w-2/3 md:min-h-screen bg-white md:sticky md:top-[44px] p-6 md:p-12 flex flex-col items-center">
                 <div className="w-full max-w-2xl">
                     <div className="relative aspect-square w-full rounded-3xl overflow-hidden mb-6 md:mb-10 bg-gray-50 flex items-center justify-center group">
                         <img 
                            src={currentImages[activeImageIndex]} 
                            alt={`${productData.title} view ${activeImageIndex + 1}`}
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500"
                         />
                         
                         {currentImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                         )}
                     </div>
                     
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

            {/* RIGHT COLUMN: Details */}
            <div className="w-full md:w-1/3 px-6 py-10 md:pt-24 md:pr-12 lg:pr-24 flex flex-col gap-8 md:min-h-screen border-l border-gray-100">
                
                <div>
                    {productData.isNew && (
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-wide mb-2 block">New</span>
                    )}
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">{productData.title}</h1>
                    <p className="text-gray-900 font-medium text-xl">{formattedPrice}</p>
                </div>

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
                                />
                            ))}
                        </div>
                    </div>
                )}

                {productData.sizes.length > 0 && (
                    <div>
                        <span className="text-sm font-semibold text-gray-900 block mb-3">Size/Compatibility</span>
                        <div className="grid grid-cols-1 gap-3">
                            {productData.sizes.map((size: string) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                                        py-3 px-4 rounded-xl border text-sm font-medium transition-all text-left
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

                <div className="pt-6 border-t border-gray-200 space-y-4">
                    <Button 
                        label={isAdding ? "Adding..." : (isAdded ? "Added!" : "Add to Bag")}
                        variant="primary"
                        size="lg"
                        className={`
                            w-full transition-all duration-300 
                            ${isAdded ? '!bg-green-600 hover:!bg-green-700 !border-green-600' : ''}
                            ${isAdding ? 'opacity-80 cursor-not-allowed' : ''}
                        `}
                        onClick={handleAddToBag}
                        isLoading={isAdding}
                        disabled={isAdding || isAdded}
                    />
                    <div className="flex justify-end gap-4 text-apple-blue text-sm font-medium">
                        <button className="flex items-center gap-1 hover:underline"><Heart size={16} /> Save</button>
                        <button className="flex items-center gap-1 hover:underline"><Share size={16} /> Share</button>
                    </div>
                </div>

                <div className="space-y-4 text-sm bg-gray-50 p-4 rounded-xl">
                    <div className="flex gap-3">
                        <Truck className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-gray-900">Delivery:</p>
                            <p className="text-gray-500">In Stock. Free Shipping.</p>
                        </div>
                    </div>
                </div>

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
                    
                    {productData.compatibility && (
                        <details className="group py-4 border-b border-gray-200 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                                Compatibility
                                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="pt-4 text-gray-600 text-sm animate-fade-in">
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