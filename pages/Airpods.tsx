
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Airpods: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="AirPods 4"
        subtitle="Biểu tượng âm thanh. Nay đã lột xác."
        imageUrl="https://www.apple.com/v/airpods-4/a/images/overview/hero__dbq22u8m0a2q_large.jpg" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '/airpods/airpods-4', primary: false },
            { label: 'Mua', url: '/store/product/airpods-4', primary: true }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="AirPods Pro 2"
            subtitle="Âm thanh thích ứng. Chống ồn chủ động."
            imageUrl="https://www.apple.com/v/airpods-pro/h/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '/airpods/airpods-pro-2' },
                { label: 'Mua', url: '/store/product/airpods-pro-2' }
            ]}
        />
        <GridItem 
            title="AirPods Max"
            subtitle="Tuyệt tác âm thanh over-ear."
            imageUrl="https://www.apple.com/v/airpods-max/f/images/overview/hero/hero__d110k4u310aa_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/airpods/airpods-max' },
                { label: 'Mua', url: '/store/product/airpods-max' }
            ]}
        />
      </div>
    </div>
  );
};

export default Airpods;
