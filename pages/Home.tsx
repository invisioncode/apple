
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Home: React.FC = () => {
  return (
    <div className="pt-[44px]">
      {/* Section 1: iPhone 16 Pro */}
      <Hero 
        title="iPhone 16 Pro"
        subtitle="Hello, Apple Intelligence."
        imageUrl="https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg" 
        textColor="white"
        links={[
          { label: 'Tìm hiểu thêm', url: '/iphone', primary: true },
          { label: 'Mua', url: '/store', primary: false }
        ]}
      />

      {/* Section 2: iPhone 16 */}
      <div className="mt-4">
          <Hero 
          title="iPhone 16"
          subtitle="Hello, Apple Intelligence."
          imageUrl="https://www.apple.com/v/iphone-16/c/images/overview/welcome/hero_large.jpg" 
          textColor="black"
          links={[
              { label: 'Tìm hiểu thêm', url: '/iphone', primary: true },
              { label: 'Mua', url: '/store', primary: false }
          ]}
          />
      </div>

      {/* Section 3: Apple Watch */}
      <div className="mt-4">
          <Hero 
          title="Apple Watch"
          subtitle="Mỏng hơn. Ấn tượng hơn."
          description="SERIES 10"
          imageUrl="https://www.apple.com/v/apple-watch-series-10/a/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg" 
          textColor="black"
          links={[
              { label: 'Tìm hiểu thêm', url: '/watch', primary: true },
              { label: 'Mua', url: '/store', primary: false }
          ]}
          />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <GridItem 
              title="iPad Pro"
              subtitle="Mỏng không tưởng."
              imageUrl="https://www.apple.com/v/ipad-pro/aq/images/overview/hero/hero_endframe__ovj8dbnra82q_large.jpg"
              imageAlt="iPad Pro displaying vibrant graphics"
              textColor="white"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/ipad' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="MacBook Air"
              subtitle="Gọn nhẹ. Mạnh mẽ. M3."
              imageUrl="https://www.apple.com/v/macbook-air/s/images/overview/hero_mba_13_15__8083041y1qyq_large.jpg"
              imageAlt="MacBook Air M3 in midnight color"
              textColor="black"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/mac' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="AirPods 4"
              subtitle="Biểu tượng âm thanh. Nay đã lột xác."
              imageUrl="https://www.apple.com/v/airpods-4/a/images/overview/hero__dbq22u8m0a2q_large.jpg"
              imageAlt="AirPods 4 charging case and earbuds"
              textColor="black"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/airpods' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="Apple Intelligence"
              subtitle="Trí thông minh tích hợp trên iPhone, iPad và Mac."
              imageUrl="https://www.apple.com/v/apple-intelligence/a/images/overview/hero/hero_endframe__ex4x77n5qj6u_large.jpg"
              imageAlt="Abstract Apple Intelligence glowing icon"
              textColor="white"
              links={[
                  { label: 'Tìm hiểu thêm về Apple Intelligence', url: '#' },
              ]}
          />
      </div>
    </div>
  );
};

export default Home;
