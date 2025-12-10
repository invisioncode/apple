
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import { Package, CheckCircle, Truck, ChevronRight, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_ORDERS = [
  {
    id: 'W123456789',
    date: '20/10/2024',
    status: 'delivered', // delivered, shipped, processing
    items: [
      { name: 'iPhone 16 Pro Max', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-natural-titanium-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1724342813959', desc: 'Titan Tự Nhiên, 256GB' }
    ]
  },
  {
    id: 'W987654321',
    date: '25/10/2024',
    status: 'shipped',
    estimated: '28/10/2024',
    items: [
      { name: 'AirPods 4', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725502549723', desc: 'Có Chống Ồn Chủ Động' },
      { name: 'Apple Watch Series 10', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-jetblack-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1725515328330', desc: 'Nhôm Đen Jet Black, 42mm' }
    ]
  }
];

const OrderStatus: React.FC = () => {
  const { language } = useLanguage();
  const isVi = language === 'vi';
  
  const [view, setView] = useState<'lookup' | 'list'>('lookup');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ orderNumber: '', email: '' });

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setView('list');
    }, 1500);
  };

  const StepIndicator = ({ status }: { status: string }) => {
    const steps = ['processing', 'shipped', 'delivered'];
    const currentIdx = steps.indexOf(status);
    
    return (
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 text-xs font-medium text-gray-500">
          <span className={currentIdx >= 0 ? 'text-green-600' : ''}>{isVi ? 'Đang xử lý' : 'Processing'}</span>
          <span className={currentIdx >= 1 ? 'text-green-600' : ''}>{isVi ? 'Đã giao cho ĐVVC' : 'Shipped'}</span>
          <span className={currentIdx >= 2 ? 'text-green-600' : ''}>{isVi ? 'Đã giao hàng' : 'Delivered'}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
           <div 
             className="h-full bg-green-500 transition-all duration-1000"
             style={{ width: status === 'delivered' ? '100%' : status === 'shipped' ? '66%' : '33%' }}
           />
        </div>
      </div>
    );
  };

  if (view === 'lookup') {
    return (
      <div className="pt-[44px] min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] mb-6 text-center">
            {isVi ? 'Tình Trạng Đơn Hàng' : 'Order Status'}
          </h1>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto text-lg">
            {isVi 
              ? 'Xem trạng thái hoặc thực hiện thay đổi cho đơn hàng của bạn.' 
              : 'See your order status or make changes to your order.'}
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleLookup} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={isVi ? 'Số đơn hàng (ví dụ: W123456789)' : 'Order Number (e.g., W123456789)'}
                  className="w-full p-4 rounded-xl border border-gray-300 text-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  required
                  value={formData.orderNumber}
                  onChange={e => setFormData({...formData, orderNumber: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={isVi ? 'Địa chỉ email' : 'Email Address'}
                  className="w-full p-4 rounded-xl border border-gray-300 text-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                    label={isVi ? 'Đăng nhập' : 'Sign In'} 
                    variant="primary" 
                    size="lg" 
                    className="w-full text-lg"
                    isLoading={isLoading}
                    onClick={() => {}} // Form handles submit
                />
              </div>
            </form>
            
            <div className="mt-8 text-center">
                <Link to="/store" className="text-apple-blue hover:underline text-sm">
                    {isVi ? 'Cần giúp đỡ? Trò chuyện ngay.' : 'Need help? Chat now.'}
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[44px] min-h-screen bg-[#f5f5f7]">
      <div className="max-w-[1024px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-[#1d1d1f]">
                {isVi ? 'Đơn hàng của bạn' : 'Your Orders'}
            </h1>
            <button 
                onClick={() => setView('lookup')}
                className="text-apple-blue hover:underline text-sm font-medium"
            >
                {isVi ? 'Đăng xuất' : 'Sign Out'}
            </button>
        </div>

        <div className="space-y-6">
            {MOCK_ORDERS.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                             <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                                {isVi ? 'Đơn hàng' : 'Order'} #{order.id}
                             </p>
                             <p className="text-sm text-gray-500 mt-1">
                                {isVi ? 'Đặt ngày' : 'Placed on'} {order.date}
                             </p>
                        </div>
                        <div className="text-right">
                             {order.status === 'delivered' && (
                                 <div className="flex items-center gap-2 text-green-600 font-semibold">
                                     <CheckCircle size={20} />
                                     <span>{isVi ? 'Đã giao hàng' : 'Delivered'}</span>
                                 </div>
                             )}
                             {order.status === 'shipped' && (
                                 <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                     <Truck size={20} />
                                     <span>{isVi ? 'Đang vận chuyển' : 'Shipped'}</span>
                                 </div>
                             )}
                        </div>
                    </div>

                    <div className="p-6">
                        {order.status === 'shipped' && (
                             <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                 <p className="text-sm font-semibold text-gray-900">
                                    {isVi ? 'Dự kiến giao:' : 'Arrives:'} <span className="text-green-600">{order.estimated}</span>
                                 </p>
                             </div>
                        )}

                        <StepIndicator status={order.status} />

                        <div className="mt-8 space-y-6">
                            {order.items.map((item, idx) => (
                                <div key={idx} className="flex gap-4 md:gap-6 items-start">
                                    <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shrink-0">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mix-blend-multiply" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                    <ChevronRight className="text-gray-300 self-center" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                        <Link to={`/order/${order.id}`} className="text-apple-blue text-sm font-medium hover:underline">
                            {isVi ? 'Xem chi tiết đơn hàng' : 'View Order Details'}
                        </Link>
                    </div>
                </div>
            ))}
            
            {/* Promo for Accessories */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <Box size={40} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{isVi ? 'Cần thêm phụ kiện?' : 'Need more accessories?'}</h3>
                <p className="text-gray-500 mb-6">{isVi ? 'Tìm ốp lưng, dây cáp và nhiều thứ khác cho thiết bị mới của bạn.' : 'Find cases, cables and more for your new device.'}</p>
                <Link to="/store/accessories" className="text-apple-blue hover:underline font-medium">
                    {isVi ? 'Mua phụ kiện' : 'Shop Accessories'}
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
