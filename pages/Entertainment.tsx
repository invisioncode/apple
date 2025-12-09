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
            imageUrl="https://picsum.photos/seed/applemusic/1000/1000?grayscale"
            textColor="white"
            links={[
                { label: 'Dùng thử miễn phí', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple TV+"
            subtitle="Các Apple Original độc quyền."
            imageUrl="https://picsum.photos/seed/appletvplus/1000/1000"
            textColor="white"
            links={[
                { label: 'Xem ngay', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple Arcade"
            subtitle="Hơn 200 trò chơi cực hay. Không quảng cáo."
            imageUrl="https://picsum.photos/seed/applearcade/1000/1000"
            textColor="black"
            links={[
                { label: 'Chơi ngay', url: '#' },
            ]}
        />
        <GridItem 
            title="Apple One"
            subtitle="Gói dịch vụ tất cả trong một."
            imageUrl="https://picsum.photos/seed/appleone/1000/1000"
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