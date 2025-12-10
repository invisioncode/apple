
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Entertainment: React.FC = () => {
  return (
    <div className="pt-[44px]">
       <section className="bg-black text-white py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Giải Trí Apple</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">Thế giới giải trí tuyệt vời nhất. Ngay trong tầm tay bạn.</p>
       </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <GridItem 
            title="Apple Music"
            subtitle="Hơn 100 triệu bài hát. Không quảng cáo."
            imageUrl="https://www.apple.com/v/apple-music/aa/images/overview/hero/hero_c__c935k5c6axeu_large.jpg"
            textColor="white"
            links={[
                { label: 'Dùng thử miễn phí', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple TV+"
            subtitle="Các Apple Original độc quyền."
            imageUrl="https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero/hero_startframe__ea64m580i26q_large.jpg"
            textColor="white"
            links={[
                { label: 'Xem ngay', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple Arcade"
            subtitle="Hơn 200 trò chơi cực hay. Không quảng cáo."
            imageUrl="https://www.apple.com/v/apple-arcade/p/images/overview/hero/hero_endframe__d6g0j31n5n6q_large.jpg"
            textColor="black"
            links={[
                { label: 'Chơi ngay', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple One"
            subtitle="Gói dịch vụ tất cả trong một."
            imageUrl="https://www.apple.com/v/apple-one/f/images/overview/hero/hero__gn7u1o1n506u_large.jpg"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
            ]}
        />
      </div>
    </div>
  );
};

export default Entertainment;
