
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const TvHome: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="TV & Nhà"
        subtitle="Giải trí tại gia. Thông minh hơn."
        imageUrl="https://www.apple.com/v/tv-home/k/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg" 
        textColor="white"
        links={[
            { label: 'Khám phá TV & Nhà', url: '#', primary: true },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="Apple TV 4K"
            subtitle="Trải nghiệm điện ảnh đỉnh cao."
            imageUrl="https://www.apple.com/v/apple-tv-4k/ah/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="HomePod"
            subtitle="Âm thanh sống động. Thông minh vượt trội."
            imageUrl="https://www.apple.com/v/homepod-2nd-generation/d/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="HomePod mini"
            subtitle="Nhỏ nhắn. Đầy sắc màu."
            imageUrl="https://www.apple.com/v/homepod-mini/j/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Ứng dụng Nhà"
            subtitle="Điều khiển nhà thông minh dễ dàng."
            imageUrl="https://www.apple.com/v/home-app/g/images/overview/hero/hero__cic32850u6qu_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
            ]}
        />
      </div>
    </div>
  );
};

export default TvHome;
