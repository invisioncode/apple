import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Search, ChevronRight, MessageCircle, Wrench, Lock, CreditCard, Users, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const { Link } = ReactRouterDOM as any;

const SUPPORT_PRODUCTS = [
  { id: 'iphone', label: 'iPhone', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_iphone_icon__cnj82l621oq6_large.png' },
  { id: 'mac', label: 'Mac', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_mac_icon__d5x4u402y34i_large.png' },
  { id: 'ipad', label: 'iPad', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_ipad_icon__f9j1l9u887mm_large.png' },
  { id: 'watch', label: 'Watch', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_watch_icon__g8phv683g06e_large.png' },
  { id: 'airpods', label: 'AirPods', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_airpods_icon__365z39h1r0ia_large.png' },
  { id: 'music', label: 'Music', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_music_icon__f80c6q6k9s6a_large.png' },
  { id: 'tv', label: 'TV', image: 'https://www.apple.com/v/support/home/an/images/homepage/product-nav/product-nav_tv_icon__8d2b634832u6_large.png' },
];

const Support: React.FC = () => {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const TOPICS = [
    { icon: <Lock className="w-8 h-8 text-blue-600" />, title: isVi ? 'Quên Mật Khẩu' : 'Forgot Password', desc: isVi ? 'Đặt lại mật khẩu Apple ID.' : 'Reset your Apple ID password.' },
    { icon: <Wrench className="w-8 h-8 text-blue-600" />, title: isVi ? 'Sửa chữa' : 'Apple Repair', desc: isVi ? 'Tìm tùy chọn sửa chữa.' : 'Find repair options.' },
    { icon: <CreditCard className="w-8 h-8 text-blue-600" />, title: isVi ? 'Thanh toán' : 'Billing', desc: isVi ? 'Xem lịch sử mua hàng.' : 'View purchase history.' },
    { icon: <Users className="w-8 h-8 text-blue-600" />, title: isVi ? 'Dịch vụ' : 'Subscriptions', desc: isVi ? 'Quản lý đăng ký của bạn.' : 'Manage your subscriptions.' },
  ];

  return (
    <div className="pt-[44px] min-h-screen bg-white font-sans">
      
      {/* Hero / Search Section */}
      <section 
        className="relative bg-center bg-cover bg-no-repeat h-[400px] md:h-[500px] flex flex-col items-center justify-center text-center px-4"
        style={{ 
            backgroundImage: 'url("https://www.apple.com/v/support/home/an/images/homepage/hero-banner/hero-banner__b5v641y48y6q_large.jpg")',
            backgroundSize: 'cover' 
        }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-8">
          {isVi ? 'Hỗ trợ của Apple' : 'Apple Support'}
        </h1>
        
        <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-apple-blue transition-colors" />
            </div>
            <input 
                type="text" 
                placeholder={isVi ? 'Tìm chủ đề hỗ trợ...' : 'Search for topics...'}
                className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg border-0 outline-none focus:ring-4 focus:ring-blue-100 text-lg placeholder:text-gray-500"
            />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1024px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#1d1d1f]">
            {isVi ? 'Chọn một sản phẩm' : 'Select a product'}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {SUPPORT_PRODUCTS.map((prod) => (
                <Link to={`/${prod.id}`} key={prod.id} className="group flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110">
                        <img src={prod.image} alt={prod.label} className="w-full h-full" />
                    </div>
                    <span className="text-sm font-medium text-[#1d1d1f] group-hover:underline decoration-apple-blue underline-offset-4">
                        {prod.label}
                    </span>
                </Link>
            ))}
        </div>
      </section>

      {/* Common Topics Grid */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-[1024px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1d1d1f]">
                {isVi ? 'Trợ giúp nhanh' : 'Quick Help'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TOPICS.map((topic, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="mb-4">{topic.icon}</div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-apple-blue">{topic.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{topic.desc}</p>
                        <div className="mt-4 flex items-center text-apple-blue text-sm font-medium group-hover:underline">
                            {isVi ? 'Xem thêm' : 'Learn more'} <ChevronRight size={14} className="ml-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Get Support Banner */}
      <section className="max-w-[1024px] mx-auto px-6 py-16">
         <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4 text-[#1d1d1f]">
                    {isVi ? 'Nhận hỗ trợ' : 'Get Support'}
                </h2>
                <p className="text-gray-500 mb-6 text-lg">
                    {isVi 
                     ? 'Chọn một sản phẩm và chúng tôi sẽ tìm giải pháp tốt nhất cho bạn.' 
                     : 'Choose a product and we’ll find you the best solution.'}
                </p>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-apple-blue text-white px-6 py-3 rounded-full hover:bg-apple-blue-hover transition-colors font-medium">
                        {isVi ? 'Bắt đầu ngay' : 'Start now'}
                    </button>
                    <button className="flex items-center gap-2 text-apple-blue px-6 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                        {isVi ? 'Tải ứng dụng Hỗ trợ' : 'Download Support App'}
                    </button>
                </div>
            </div>
            <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-8">
                 <img 
                    src="https://www.apple.com/v/support/home/an/images/homepage/main-content/get-support/get_support_icon__fcik235b2e6y_large.png" 
                    alt="Genius Bar" 
                    className="max-w-[160px] md:max-w-[200px]" 
                 />
            </div>
         </div>
      </section>

      {/* Warning / Footer Info */}
      <section className="bg-white pb-16 pt-8 border-t border-gray-200">
         <div className="max-w-[1024px] mx-auto px-6">
            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100 mb-8">
                <ShieldAlert className="text-yellow-600 shrink-0" />
                <div>
                    <h4 className="font-semibold text-[#1d1d1f] mb-1">
                        {isVi ? 'Cảnh báo lừa đảo' : 'Beware of Gift Card Scams'}
                    </h4>
                    <p className="text-sm text-gray-600">
                        {isVi 
                         ? 'Đừng bao giờ chia sẻ mã thẻ quà tặng Apple của bạn với bất kỳ ai bạn không biết.' 
                         : 'Never share your Apple Gift Card numbers with anyone you don’t know.'}
                        <a href="#" className="text-apple-blue hover:underline ml-1">
                            {isVi ? 'Tìm hiểu thêm' : 'Learn more'} &gt;
                        </a>
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">{isVi ? 'Các dịch vụ khác' : 'Other Services'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <a href="#" className="text-apple-blue hover:underline flex items-center gap-2">
                    <MessageCircle size={16} /> {isVi ? 'Cộng đồng Hỗ trợ Apple' : 'Apple Support Community'}
                </a>
                <a href="#" className="text-apple-blue hover:underline flex items-center gap-2">
                    <Users size={16} /> {isVi ? 'Kiểm tra bảo hành' : 'Check Coverage'}
                </a>
                <a href="#" className="text-apple-blue hover:underline flex items-center gap-2">
                    <Wrench size={16} /> {isVi ? 'Chương trình sửa chữa' : 'Repair Programs'}
                </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Support;