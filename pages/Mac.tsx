
import React from 'react';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const Mac: React.FC = () => {
  return (
    <div className="pt-[44px]">
      <Hero 
        title="MacBook Air"
        subtitle="Mỏng. Nhẹ. Mạnh mẽ với M3."
        imageUrl="https://www.apple.com/v/macbook-air/s/images/overview/hero_mba_13_15__8083041y1qyq_large.jpg" 
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
                imageUrl="https://www.apple.com/v/macbook-pro/ak/images/overview/hero_14_16__r1j05o65t0i2_large.jpg"
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
                imageUrl="https://www.apple.com/v/mac-studio/f/images/overview/hero/hero_static__d110k4u310aa_large.jpg"
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
                imageUrl="https://www.apple.com/v/studio-display/c/images/overview/hero/hero__conf0462060u_large.jpg"
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
                imageUrl="https://www.apple.com/v/imac/p/images/overview/hero/hero__e3j42m33506u_large.jpg"
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
                imageUrl="https://www.apple.com/v/mac-mini/u/images/overview/hero/hero__x8n6j33506u_large.jpg"
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
