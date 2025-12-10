
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import ProductNav, { ProductNavItem } from '../components/ProductNav';

const TV_NAV_ITEMS: ProductNavItem[] = [
    { id: 'tv4k', label: 'Apple TV 4K', image: 'https://www.apple.com/v/tv-home/k/images/chapternav/apple_tv_4k_light__c21g76w3182u_large.svg', url: '/tv-home/apple-tv-4k' },
    { id: 'homepod', label: 'HomePod', image: 'https://www.apple.com/v/tv-home/k/images/chapternav/homepod_light__b517ntk20v2q_large.svg', url: '/tv-home/homepod' },
    { id: 'mini', label: 'HomePod mini', image: 'https://www.apple.com/v/tv-home/k/images/chapternav/homepod_mini_light__c517ntk20v2q_large.svg', url: '/tv-home/homepod-mini' },
    { id: 'home', label: 'Home App', image: 'https://www.apple.com/v/tv-home/k/images/chapternav/home_app_light__d517ntk20v2q_large.svg', url: '/tv-home/home-app' },
];

const TvHome: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <ProductNav items={TV_NAV_ITEMS} />

      <Hero 
        title="TV & Nhà"
        subtitle="Giải trí tại gia. Thông minh hơn."
        imageUrl="https://www.apple.com/v/tv-home/k/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg" 
        textColor="white"
        links={[
            { label: 'Khám phá TV & Nhà', url: '#', primary: false },
            { label: 'Mua', url: '/store', primary: true },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="Apple TV 4K"
            subtitle="Trải nghiệm điện ảnh đỉnh cao."
            imageUrl="https://www.apple.com/v/apple-tv-4k/ah/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '/tv-home/apple-tv-4k' },
                { label: 'Mua', url: '/store/product/apple-tv-4k' }
            ]}
        />
        <GridItem 
            title="HomePod"
            subtitle="Âm thanh sống động. Thông minh vượt trội."
            imageUrl="https://www.apple.com/v/homepod-2nd-generation/d/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/tv-home/homepod' },
                { label: 'Mua', url: '/store/product/homepod' }
            ]}
        />
        <GridItem 
            title="HomePod mini"
            subtitle="Nhỏ nhắn. Đầy sắc màu."
            imageUrl="https://www.apple.com/v/homepod-mini/j/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/tv-home/homepod-mini' },
                { label: 'Mua', url: '/store/product/homepod-mini' }
            ]}
        />
      </div>
    </div>
  );
};

export default TvHome;
