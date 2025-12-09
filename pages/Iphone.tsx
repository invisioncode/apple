import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Iphone: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="iPhone 16 Pro"
        subtitle="Titan đẳng cấp. Camera chuyên nghiệp."
        imageUrl="https://picsum.photos/seed/iphone16prohero/1920/1080?grayscale" 
        textColor="white"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="mt-4">
        <Hero 
            title="iPhone 16"
            subtitle="Sức mạnh mới. Màu sắc mới."
            imageUrl="https://picsum.photos/seed/iphone16hero/1920/1080" 
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#', primary: true },
                { label: 'Mua', url: '#', primary: false }
            ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="iPhone 15"
            subtitle="Vẫn tuyệt vời. Giá tốt hơn."
            imageUrl="https://picsum.photos/seed/iphone15/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="iPhone SE"
            subtitle="Mạnh mẽ. Nhỏ gọn."
            imageUrl="https://picsum.photos/seed/iphonese/1000/1000?grayscale"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
      </div>
    </div>
  );
};

export default Iphone;