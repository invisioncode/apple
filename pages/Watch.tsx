import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Watch: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="Apple Watch Series 10"
        subtitle="Màn hình lớn nhất, thiết kế mỏng nhất."
        imageUrl="https://picsum.photos/seed/watch10hero/1920/1080" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="Apple Watch Ultra 2"
            subtitle="Phiêu lưu đỉnh cao."
            imageUrl="https://picsum.photos/seed/watchultra/1000/1000"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Apple Watch SE"
            subtitle="Nhiều tính năng. Giá nhẹ nhàng."
            imageUrl="https://picsum.photos/seed/watchse/1000/1000"
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

export default Watch;