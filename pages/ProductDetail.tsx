import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GridItem from '../components/GridItem';

const ProductDetail: React.FC = () => {
  const { category, productSlug } = useParams<{ category: string; productSlug: string }>();

  // Helper to format slug to title (e.g., "macbook-air" -> "MacBook Air")
  const formatTitle = (slug: string) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = formatTitle(productSlug || '');
  const categoryTitle = formatTitle(category || '');
  
  // Deterministic seed for images based on slug
  const imageSeed = productSlug?.replace(/[^a-z0-9]/g, '') || 'apple';

  return (
    <div className="pt-[44px]">
      {/* Product Hero */}
      <Hero 
        title={title}
        subtitle={`Sản phẩm ${categoryTitle} mới nhất.`}
        description="Mạnh mẽ. Tuyệt đẹp. Được thiết kế cho bạn."
        imageUrl={`https://picsum.photos/seed/${imageSeed}hero/1920/1080`} 
        textColor="black"
        links={[
            { label: 'Mua ngay', url: '#buy', primary: true },
            { label: 'Xem thông số', url: '#specs', primary: false }
        ]}
      />

      {/* Breadcrumb / Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[44px] z-30">
        <div className="max-w-[1024px] mx-auto px-4 py-3 flex justify-between items-center">
             <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
             <div className="flex gap-4 text-xs md:text-sm">
                 <a href="#overview" className="text-gray-600 hover:text-apple-blue">Tổng quan</a>
                 <a href="#tech-specs" className="text-gray-600 hover:text-apple-blue">Thông số kỹ thuật</a>
                 <Link to={`/store`} className="px-3 py-1 bg-apple-blue text-white rounded-full hover:bg-apple-blue-hover transition-colors">
                    Mua
                 </Link>
             </div>
        </div>
      </div>

      {/* Feature Section 1 */}
      <div className="bg-white py-20 px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Trải nghiệm vượt trội.</h2>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">
               {title} mang đến hiệu suất đáng kinh ngạc và thời lượng pin cả ngày, giúp bạn làm việc, giải trí và sáng tạo mọi lúc mọi nơi.
           </p>
           <img 
              src={`https://picsum.photos/seed/${imageSeed}feature1/1200/600`} 
              alt="Feature 1" 
              className="mt-12 rounded-3xl shadow-2xl mx-auto"
           />
      </div>

       {/* Grid Features */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#f5f5f7]">
        <GridItem 
            title="Hiệu năng"
            subtitle="Nhanh hơn bao giờ hết."
            imageUrl={`https://picsum.photos/seed/${imageSeed}perf/1000/1000?grayscale`}
            textColor="white"
            large
        />
        <GridItem 
            title="Thiết kế"
            subtitle="Mỏng. Nhẹ. Bền bỉ."
            imageUrl={`https://picsum.photos/seed/${imageSeed}design/1000/1000`}
            textColor="black"
            large
        />
      </div>

       {/* Feature Section 2 */}
       <div className="bg-black text-white py-24 px-6 text-center">
           <h2 className="text-4xl md:text-5xl font-semibold mb-6">Màn hình Retina tuyệt đẹp.</h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
               Mọi thứ trông đẹp hơn trên màn hình Liquid Retina với công nghệ True Tone.
           </p>
           <div className="max-w-4xl mx-auto">
                <img 
                    src={`https://picsum.photos/seed/${imageSeed}screen/1000/600`} 
                    alt="Screen" 
                    className="rounded-xl border border-gray-800"
                />
           </div>
      </div>
    </div>
  );
};

export default ProductDetail;