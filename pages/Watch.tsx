
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Watch: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="Apple Watch Series 10"
        subtitle="Màn hình lớn nhất, thiết kế mỏng nhất."
        imageUrl="https://www.apple.com/v/apple-watch-series-10/a/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '/watch/apple-watch-series-10', primary: false },
            { label: 'Mua', url: '/store/product/apple-watch-series-10', primary: true }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="Apple Watch Ultra 2"
            subtitle="Phiêu lưu đỉnh cao."
            imageUrl="https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '/watch/apple-watch-ultra-2' },
                { label: 'Mua', url: '/store/product/apple-watch-ultra-2' }
            ]}
        />
        <GridItem 
            title="Apple Watch SE"
            subtitle="Nhiều tính năng. Giá nhẹ nhàng."
            imageUrl="https://www.apple.com/v/apple-watch-se/k/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/watch/apple-watch-se' },
                { label: 'Mua', url: '/store/product/apple-watch-se' }
            ]}
        />
      </div>
    </div>
  );
};

export default Watch;
