import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Airpods: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="AirPods 4"
        subtitle="Biểu tượng âm thanh. Nay đã lột xác."
        imageUrl="https://picsum.photos/seed/airpods4hero/1920/1080?grayscale" 
        textColor="black"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="AirPods Pro 2"
            subtitle="Âm thanh thích ứng. Chống ồn chủ động."
            imageUrl="https://picsum.photos/seed/airpodspro/1000/1000"
            textColor="white"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="AirPods Max"
            subtitle="Tuyệt tác âm thanh over-ear."
            imageUrl="https://picsum.photos/seed/airpodsmax/1000/1000"
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

export default Airpods;