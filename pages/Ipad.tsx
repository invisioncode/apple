import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Ipad: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="iPad Pro"
        subtitle="Mỏng không tưởng. Mạnh không ngờ."
        imageUrl="https://picsum.photos/seed/ipadhero/1920/1080" 
        textColor="white"
        links={[
            { label: 'Tìm hiểu thêm', url: '#', primary: true },
            { label: 'Mua', url: '#', primary: false }
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
        <GridItem 
            title="iPad Air"
            subtitle="Hai kích cỡ. Chip M2. Tuyệt đẹp."
            imageUrl="https://picsum.photos/seed/ipadair/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="iPad"
            subtitle="Yêu vẽ. Yêu viết. Yêu luôn."
            imageUrl="https://picsum.photos/seed/ipadbase/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="iPad mini"
            subtitle="Nhỏ gọn. Đầy sức mạnh."
            imageUrl="https://picsum.photos/seed/ipadmini/1000/1000"
            textColor="black"
            links={[
                { label: 'Tìm hiểu thêm', url: '#' },
                { label: 'Mua', url: '#' }
            ]}
        />
        <GridItem 
            title="Apple Pencil"
            subtitle="Mơ gì, viết nấy."
            imageUrl="https://picsum.photos/seed/applepencil/1000/1000?grayscale"
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

export default Ipad;