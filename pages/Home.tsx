import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Home: React.FC = () => {
  return (
    <div className="pt-[44px] bg-white dark:bg-black">
      {/* Full-width Hero Sections with gaps (Apple's Island Style) */}
      <div className="flex flex-col w-full">
        
        {/* Section 1: iPhone 16 Pro - The Headliner */}
        <Hero 
            title="iPhone 16 Pro"
            subtitle="Hello, Apple Intelligence."
            imageUrl="https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg" 
            textColor="white"
            position="top"
            links={[
            { label: 'Tìm hiểu thêm', url: '/iphone/iphone-16-pro', primary: true },
            { label: 'Mua', url: '/store/product/iphone-16-pro', primary: false }
            ]}
        />

        {/* Section 2: iPhone 16 - Vibrant Contrast */}
        <Hero 
            title="iPhone 16"
            subtitle="Hello, Apple Intelligence."
            imageUrl="https://www.apple.com/v/iphone-16/c/images/overview/welcome/hero_large.jpg" 
            textColor="black"
            position="top"
            links={[
                { label: 'Tìm hiểu thêm', url: '/iphone/iphone-16', primary: true },
                { label: 'Mua', url: '/store/product/iphone-16', primary: false }
            ]}
        />

        {/* Section 3: Apple Watch - Clean and Technical */}
        <Hero 
            title="Apple Watch"
            subtitle="Mỏng hơn. Ấn tượng hơn."
            description="SERIES 10"
            imageUrl="https://www.apple.com/v/apple-watch-series-10/a/images/overview/hero/hero_static__c9d15g90w2aq_large.jpg" 
            textColor="black"
            position="top"
            links={[
                { label: 'Tìm hiểu thêm', url: '/watch/apple-watch-series-10', primary: true },
                { label: 'Mua', url: '/store/product/apple-watch-series-10', primary: false }
            ]}
        />
      </div>

      {/* Bento Grid Section */}
      <div className="p-3 md:p-5 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            
            <GridItem 
                title="iPad Pro"
                subtitle="Mỏng không tưởng."
                imageUrl="https://www.apple.com/v/ipad-pro/aq/images/overview/hero/hero_endframe__ovj8dbnra82q_large.jpg"
                imageAlt="iPad Pro displaying vibrant graphics"
                textColor="white"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/ipad/ipad-pro' },
                    { label: 'Mua', url: '/store/product/ipad-pro' }
                ]}
            />
            
            <GridItem 
                title="MacBook Air"
                subtitle="Gọn nhẹ. Mạnh mẽ. M3."
                imageUrl="https://www.apple.com/v/macbook-air/s/images/overview/hero_mba_13_15__8083041y1qyq_large.jpg"
                imageAlt="MacBook Air M3 in midnight color"
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/mac/macbook-air' },
                    { label: 'Mua', url: '/store/product/macbook-air' }
                ]}
            />
            
            <GridItem 
                title="AirPods 4"
                subtitle="Biểu tượng âm thanh. Nay đã lột xác."
                imageUrl="https://www.apple.com/v/airpods-4/a/images/overview/hero__dbq22u8m0a2q_large.jpg"
                imageAlt="AirPods 4 charging case and earbuds"
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/airpods/airpods-4' },
                    { label: 'Mua', url: '/store/product/airpods-4' }
                ]}
            />
            
            {/* Apple Intelligence - Special Styling */}
            <GridItem 
                title="Apple Intelligence"
                subtitle="Trí thông minh tích hợp trên iPhone, iPad và Mac."
                imageUrl="https://www.apple.com/v/apple-intelligence/a/images/overview/hero/hero_endframe__ex4x77n5qj6u_large.jpg"
                imageAlt="Abstract Apple Intelligence glowing icon"
                textColor="white"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/apple-intelligence' },
                ]}
            />

            {/* Trade In - Utility Tile */}
            <GridItem 
                title="Apple Trade In"
                subtitle="Đổi thiết bị của bạn lấy điểm tín dụng."
                imageUrl="https://www.apple.com/v/home/br/images/promos/trade-in/promo_tradein__cwzm1usj6rqu_large.jpg"
                imageAlt="Apple Trade In"
                textColor="black"
                links={[
                    { label: 'Ước tính giá trị', url: '/shop/trade-in' },
                ]}
            />

             {/* Apple Card - Utility Tile */}
             <GridItem 
                title="Apple Card"
                subtitle="Nhận hoàn tiền Daily Cash đến 3%."
                imageUrl="https://www.apple.com/v/home/br/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
                imageAlt="Apple Card"
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '/apple-card' },
                    { label: 'Đăng ký', url: '/apply/apple-card' },
                ]}
            />
          </div>
      </div>
    </div>
  );
};

export default Home;