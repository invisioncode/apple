
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

      {/* Masonry Layout Container */}
      <div className="px-4 pb-12 mx-auto max-w-[1400px]">
        <div className="columns-1 md:columns-2 gap-5 space-y-5">
          
          <div className="break-inside-avoid">
            <GridItem 
                title="MacBook Pro"
                subtitle="Sức mạnh tối thượng."
                imageUrl="https://picsum.photos/seed/macbookpro/1000/1000"
                imageAlt="MacBook Pro displaying a vibrant, professional workspace on its Liquid Retina XDR display."
                textColor="white"
                large
                links={[
                    { label: 'Tìm hiểu thêm', url: '#' },
                    { label: 'Mua', url: '#' }
                ]}
            />
          </div>

          <div className="break-inside-avoid">
            <GridItem 
                title="Mac Studio"
                subtitle="Sức mạnh sáng tạo chuyên nghiệp."
                imageUrl="https://picsum.photos/seed/macstudio/1000/1000"
                imageAlt="Front view of the Mac Studio showing ports and its compact aluminum design."
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '#' },
                    { label: 'Mua', url: '#' }
                ]}
            />
          </div>

          <div className="break-inside-avoid">
            <GridItem 
                title="Studio Display"
                subtitle="Màn hình 5K Retina tuyệt đẹp."
                imageUrl="https://picsum.photos/seed/studiodisplay/1000/1000"
                imageAlt="Studio Display monitor showing a colorful abstract wallpaper."
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '#' },
                    { label: 'Mua', url: '#' }
                ]}
            />
          </div>

          <div className="break-inside-avoid">
            <GridItem 
                title="iMac"
                subtitle="Màu sắc rực rỡ. Hiệu năng đỉnh cao."
                imageUrl="https://picsum.photos/seed/imac/1000/1000"
                imageAlt="iMac 24-inch in blue, showing the thin side profile and matching keyboard."
                textColor="black"
                links={[
                    { label: 'Tìm hiểu thêm', url: '#' },
                    { label: 'Mua', url: '#' }
                ]}
            />
          </div>
          
          <div className="break-inside-avoid">
            <GridItem 
                title="Mac mini"
                subtitle="Nhỏ hơn. Mạnh hơn."
                imageUrl="https://picsum.photos/seed/macmini/1000/1000?grayscale"
                imageAlt="Top-down view of the silver Mac mini showing the Apple logo."
                textColor="black"
                large
                links={[
                    { label: 'Tìm hiểu thêm', url: '#' },
                    { label: 'Mua', url: '#' }
                ]}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mac;
