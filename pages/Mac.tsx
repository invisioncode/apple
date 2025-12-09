import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Mac: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="MacBook Air"
        subtitle="Mỏng. Nhẹ. Mạnh mẽ với M3."
        imageUrl="https://picsum.photos/seed/macbookairhero/1920/1080?grayscale" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="py-20 text-center bg-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10">Mạnh mẽ. Dễ dùng. Tuyệt vời.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <GridItem 
            title="MacBook Pro"
            subtitle="Sức mạnh tối thượng."
            imageUrl="https://picsum.photos/seed/macbookpro/1000/1000"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="iMac"
            subtitle="Màu sắc rực rỡ. Hiệu năng đỉnh cao."
            imageUrl="https://picsum.photos/seed/imac/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Mac mini"
            subtitle="Nhỏ hơn. Mạnh hơn."
            imageUrl="https://picsum.photos/seed/macmini/1000/1000?grayscale"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Mac Studio"
            subtitle="Sức mạnh sáng tạo chuyên nghiệp."
            imageUrl="https://picsum.photos/seed/macstudio/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
      </div>
    </div>
  );
};

export default Mac;