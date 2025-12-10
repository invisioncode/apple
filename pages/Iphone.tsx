
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Iphone: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="iPhone 16 Pro"
        subtitle="Titan đẳng cấp. Camera chuyên nghiệp."
        imageUrl="https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg" 
        textColor="white"
        imagePosition="center bottom"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="mt-4">
        <Hero 
            title="iPhone 16"
            subtitle="Sức mạnh mới. Màu sắc mới."
            imageUrl="https://www.apple.com/v/iphone-16/c/images/overview/welcome/hero_large.jpg" 
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
            imageUrl="https://www.apple.com/v/iphone-15/c/images/overview/design/design_startframe__d478w07y3u6u_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="iPhone SE"
            subtitle="Mạnh mẽ. Nhỏ gọn."
            imageUrl="https://www.apple.com/v/iphone-se/d/images/overview/hero/hero__e3j42m33506u_large.jpg"
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
