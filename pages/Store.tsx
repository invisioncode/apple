import React from 'react';
import GridItem from '../components/GridItem';

const Store: React.FC = () => {
  return (
    <div className="pt-[44px] bg-[#f5f5f7] min-h-screen">
      <div className="max-w-[1024px] mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Cửa Hàng. <span className="text-gray-500">Cách tốt nhất để mua sản phẩm bạn yêu thích.</span>
        </h1>
        
        {/* Simplified Store Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
           {[
             { name: 'Mac', img: 'https://picsum.photos/seed/macstore/200/150' },
             { name: 'iPhone', img: 'https://picsum.photos/seed/iphonestore/200/150' },
             { name: 'iPad', img: 'https://picsum.photos/seed/ipadstore/200/150' },
             { name: 'Apple Watch', img: 'https://picsum.photos/seed/watchstore/200/150' },
             { name: 'AirPods', img: 'https://picsum.photos/seed/airpodsstore/200/150' },
             { name: 'AirTag', img: 'https://picsum.photos/seed/airtagstore/200/150' },
             { name: 'Apple TV 4K', img: 'https://picsum.photos/seed/tvstore/200/150' },
             { name: 'Phụ Kiện', img: 'https://picsum.photos/seed/accstore/200/150' },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                <img src={item.img} alt={item.name} className="w-full h-auto rounded-2xl shadow-sm group-hover:shadow-md transition-shadow" />
                <span className="text-sm font-medium text-gray-900 group-hover:underline">{item.name}</span>
             </div>
           ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Sản phẩm mới nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GridItem 
                  title="iPhone 16 Pro"
                  subtitle="Mạnh mẽ. Đẹp ngỡ ngàng."
                  imageUrl="https://picsum.photos/seed/iphonenew/800/600"
                  textColor="black"
                  large
                  links={[{ label: 'Mua ngay', url: '#' }]}
              />
              <GridItem 
                  title="Apple Watch Series 10"
                  subtitle="Màn hình lớn hơn, thiết kế mỏng hơn."
                  imageUrl="https://picsum.photos/seed/watchnew/800/600"
                  textColor="white"
                  large
                  links={[{ label: 'Mua ngay', url: '#' }]}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;