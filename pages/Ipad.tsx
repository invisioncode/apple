
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import ProductNav, { ProductNavItem } from '../components/ProductNav';

const IPAD_NAV_ITEMS: ProductNavItem[] = [
    { id: 'pro', label: 'iPad Pro', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/ipadpro_light__cdf60f3w5q2q_large.svg', url: '/ipad/ipad-pro', isNew: true },
    { id: 'air', label: 'iPad Air', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/ipadair_light__f9z26y85un6u_large.svg', url: '/ipad/ipad-air', isNew: true },
    { id: 'ipad', label: 'iPad', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/ipad_light__gan6yv9ae56q_large.svg', url: '/ipad/ipad-10th-gen' },
    { id: 'mini', label: 'iPad mini', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/ipadmini_light__bxpwa95j0e7m_large.svg', url: '/ipad/ipad-mini' },
    { id: 'pencil', label: 'Apple Pencil', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg', url: '/ipad/apple-pencil' },
    { id: 'keyboard', label: 'Keyboards', image: 'https://www.apple.com/v/ipad/home/ck/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg', url: '/ipad/keyboards' },
];

const Ipad: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <ProductNav items={IPAD_NAV_ITEMS} />

      <Hero 
        title="iPad Pro"
        subtitle="Mỏng không tưởng. Mạnh không ngờ."
        imageUrl="https://www.apple.com/v/ipad-pro/aq/images/overview/hero/hero_endframe__ovj8dbnra82q_large.jpg" 
        textColor="white"
        links={[
            { label: 'Tìm hiểu thêm', url: '/ipad/ipad-pro', primary: false },
            { label: 'Mua', url: '/store/product/ipad-pro', primary: true }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="iPad Air"
            subtitle="Hai kích cỡ. Chip M2. Tuyệt đẹp."
            imageUrl="https://www.apple.com/v/ipad-air/w/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/ipad/ipad-air' },
                { label: 'Mua', url: '/store/product/ipad-air' }
            ]}
        />
        <GridItem 
            title="iPad"
            subtitle="Yêu vẽ. Yêu viết. Yêu luôn."
            imageUrl="https://www.apple.com/v/ipad-10.9/d/images/overview/hero/hero__e3j42m33506u_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/ipad/ipad-10th-gen' },
                { label: 'Mua', url: '/store/product/ipad-10th-gen' }
            ]}
        />
        <GridItem 
            title="iPad mini"
            subtitle="Nhỏ gọn. Đầy sức mạnh."
            imageUrl="https://www.apple.com/v/ipad-mini/q/images/overview/hero/hero__d110k4u310aa_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '/ipad/ipad-mini' },
                { label: 'Mua', url: '/store/product/ipad-mini' }
            ]}
        />
        <GridItem 
            title="Apple Pencil"
            subtitle="Mơ gì, viết nấy."
            imageUrl="https://www.apple.com/v/apple-pencil/e/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '/ipad/apple-pencil' },
                { label: 'Mua', url: '/store/product/apple-pencil' }
            ]}
        />
      </div>
    </div>
  );
};

export default Ipad;
