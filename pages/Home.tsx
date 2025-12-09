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
        imageUrl="https://picsum.photos/seed/iphone16pro/1920/1080" 
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
          imageUrl="https://picsum.photos/seed/iphone16/1920/1080?grayscale" 
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
          imageUrl="https://picsum.photos/seed/watch10/1920/1080?blur=2" 
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
              imageUrl="https://picsum.photos/seed/ipad/1000/1000"
              textColor="white"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/ipad' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="MacBook Air"
              subtitle="Gọn nhẹ. Mạnh mẽ. M3."
              imageUrl="https://picsum.photos/seed/macbook/1000/1000?grayscale"
              textColor="black"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/mac' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="AirPods 4"
              subtitle="Biểu tượng âm thanh. Nay đã lột xác."
              imageUrl="https://picsum.photos/seed/airpods/1000/1000"
              textColor="black"
              links={[
                  { label: 'Tìm hiểu thêm', url: '/airpods' },
                  { label: 'Mua', url: '/store' }
              ]}
          />
           <GridItem 
              title="Apple Intelligence"
              subtitle="Trí thông minh tích hợp trên iPhone, iPad và Mac."
              imageUrl="https://picsum.photos/seed/ai/1000/1000?blur=4"
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