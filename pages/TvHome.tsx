import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const TvHome: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="TV & Nhà"
        subtitle="Giải trí tại gia. Thông minh hơn."
        imageUrl="https://picsum.photos/seed/tvhomehero/1920/1080" 
        textColor="white"
        links={[
            { label: 'Khám phá TV & Nhà', url: '#', primary: true },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="Apple TV 4K"
            subtitle="Trải nghiệm điện ảnh đỉnh cao."
            imageUrl="https://picsum.photos/seed/appletv/1000/1000"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="HomePod"
            subtitle="Âm thanh sống động. Thông minh vượt trội."
            imageUrl="https://picsum.photos/seed/homepod/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="HomePod mini"
            subtitle="Nhỏ nhắn. Đầy sắc màu."
            imageUrl="https://picsum.photos/seed/homepodmini/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Ứng dụng Nhà"
            subtitle="Điều khiển nhà thông minh dễ dàng."
            imageUrl="https://picsum.photos/seed/homeapp/1000/1000?grayscale"
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