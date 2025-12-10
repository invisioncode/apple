
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import ProductNav, { ProductNavItem } from '../components/ProductNav';

const IPHONE_NAV_ITEMS: ProductNavItem[] = [
    { id: '16pro', label: 'iPhone 16 Pro', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_pro_light__e6axc9d1d266_large.svg', url: '/iphone/iphone-16-pro', isNew: true },
    { id: '16', label: 'iPhone 16', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_16_light__b517ntk20v2q_large.svg', url: '/iphone/iphone-16', isNew: true },
    { id: '15', label: 'iPhone 15', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_15_light__bmk32j8342yq_large.svg', url: '/iphone/iphone-15' },
    { id: 'se', label: 'iPhone SE', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_se_light__c517ntk20v2q_large.svg', url: '/iphone/iphone-se' },
    { id: 'compare', label: 'Compare', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/iphone_compare_light__f517ntk20v2q_large.svg', url: '/iphone/compare' },
    { id: 'airpods', label: 'AirPods', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/airpods_light__8517ntk20v2q_large.svg', url: '/airpods' },
    { id: 'ios', label: 'iOS 18', image: 'https://www.apple.com/v/iphone/home/bw/images/chapternav/ios_18_light__a517ntk20v2q_large.svg', url: '/iphone/ios-18' },
];

const Iphone: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <ProductNav items={IPHONE_NAV_ITEMS} />

      <Hero 
        title="iPhone 16 Pro"
        subtitle="Hello, Apple Intelligence."
        imageUrl="https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg" 
        textColor="white"
        imagePosition="center bottom"
        links={[
            { label: 'Tìm hiểu thêm', url: '/iphone/iphone-16-pro', primary: false },
            { label: 'Mua', url: '/store/product/iphone-16-pro', primary: true }
        ]}
      />

      <div className="mt-4">
        <Hero 
            title="iPhone 16"
            subtitle="Sức mạnh mới. Màu sắc mới."
            imageUrl="https://www.apple.com/v/iphone-16/c/images/overview/welcome/hero_large.jpg" 
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/iphone/iphone-16', primary: false },
                { label: 'Mua', url: '/store/product/iphone-16', primary: true }
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
                { label: 'Tìm hiểu thêm', url: '/iphone/iphone-15' },
                { label: 'Mua', url: '/store/product/iphone-15' }
            ]}
        />
        <GridItem 
            title="iPhone SE"
            subtitle="Mạnh mẽ. Nhỏ gọn."
            imageUrl="https://www.apple.com/v/iphone-se/d/images/overview/hero/hero__e3j42m33506u_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/iphone/iphone-se' },
                { label: 'Mua', url: '/store/product/iphone-se' }
            ]}
        />
      </div>
    </div>
  );
};

export default Iphone;
