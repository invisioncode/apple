
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';
import ProductNav, { ProductNavItem } from '../components/ProductNav';

const MAC_NAV_ITEMS: ProductNavItem[] = [
    { id: 'air', label: 'MacBook Air', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/macbookair_original__b0k50005n72q_large.svg', url: '/mac/macbook-air' },
    { id: 'pro', label: 'MacBook Pro', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/macbookpro_14_16__f4k53063zsu2_large.svg', url: '/mac/macbook-pro' },
    { id: 'imac', label: 'iMac', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/imac_24__e0tdhb1k5m82_large.svg', url: '/mac/imac' },
    { id: 'mini', label: 'Mac mini', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/mac_mini__c4284n3j25ea_large.svg', url: '/mac/mac-mini' },
    { id: 'studio', label: 'Mac Studio', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/mac_studio__c4284n3j25ea_large.svg', url: '/mac/mac-studio' },
    { id: 'pro-tower', label: 'Mac Pro', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/mac_pro__c4284n3j25ea_large.svg', url: '/mac/mac-pro' },
    { id: 'displays', label: 'Displays', image: 'https://www.apple.com/v/mac/home/ca/images/familybrowser/mac_pro_display__c4284n3j25ea_large.svg', url: '/mac/displays' },
];

const Mac: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <ProductNav items={MAC_NAV_ITEMS} />
      
      <Hero 
        title="MacBook Air"
        subtitle="Mỏng. Nhẹ. Mạnh mẽ với M3."
        imageUrl="https://www.apple.com/v/macbook-air/s/images/overview/hero_mba_13_15__8083041y1qyq_large.jpg" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '/mac/macbook-air', primary: false },
            { label: 'Mua', url: '/store/product/macbook-air', primary: true }
        ]}
      />

      <div className="py-20 text-center bg-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 max-w-3xl mx-auto leading-tight">Mạnh mẽ. Dễ dùng. Tuyệt vời.</h2>
      </div>

      {/* Masonry Layout Container */}
      <div className="px-4 pb-12 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="md:col-span-2">
            <GridItem 
                title="MacBook Pro"
                subtitle="Sức mạnh tối thượng. Chip M3 Pro và M3 Max."
                imageUrl="https://www.apple.com/v/macbook-pro/ak/images/overview/hero_14_16__r1j05o65t0i2_large.jpg"
                imageAlt="MacBook Pro M3"
                textColor="white"
                large
                links={[
                    { label: 'Tìm hiểu thêm', url: '/mac/macbook-pro' },
                    { label: 'Mua', url: '/store/product/macbook-pro' }
                ]}
            />
          </div>

          <GridItem 
                title="iMac"
                subtitle="Màu sắc rực rỡ. Hiệu năng đỉnh cao."
                imageUrl="https://www.apple.com/v/imac/p/images/overview/hero/hero__e3j42m33506u_large.jpg"
                imageAlt="iMac 24-inch"
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/mac/imac' },
                    { label: 'Mua', url: '/store/product/imac' }
                ]}
            />

          <GridItem 
                title="Mac mini"
                subtitle="Nhỏ hơn. Mạnh hơn."
                imageUrl="https://www.apple.com/v/mac-mini/u/images/overview/hero/hero__x8n6j33506u_large.jpg"
                imageAlt="Mac mini"
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/mac/mac-mini' },
                    { label: 'Mua', url: '/store/product/mac-mini' }
                ]}
            />

           <div className="md:col-span-2">
             <GridItem 
                title="Mac Studio"
                subtitle="Sức mạnh sáng tạo chuyên nghiệp."
                imageUrl="https://www.apple.com/v/mac-studio/f/images/overview/hero/hero_static__d110k4u310aa_large.jpg"
                imageAlt="Mac Studio"
                textColor="black"
                large
                links={[
                    { label: 'Tìm hiểu thêm', url: '/mac/mac-studio' },
                    { label: 'Mua', url: '/store/product/mac-studio' }
                ]}
            />
           </div>

        </div>
      </div>
    </div>
  );
};

export default Mac;
