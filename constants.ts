import { NavItem, FooterSection, SubMenuData, Language } from './types';

// Helper to generate localized constants
export const getNavItems = (lang: Language): NavItem[] => {
  const isVi = lang === 'vi';
  return [
    { label: isVi ? 'Cửa Hàng' : 'Store', href: '/store' },
    { label: 'Mac', href: '/mac' },
    { label: 'iPad', href: '/ipad' },
    { label: 'iPhone', href: '/iphone' },
    { label: 'Watch', href: '/watch' },
    { label: 'AirPods', href: '/airpods' },
    { label: isVi ? 'TV & Nhà' : 'TV & Home', href: '/tv-home' },
    { label: isVi ? 'Giải Trí' : 'Entertainment', href: '/entertainment' },
    { label: isVi ? 'Phụ Kiện' : 'Accessories', href: '/accessories' },
    { label: isVi ? 'Hỗ Trợ' : 'Support', href: '/support' },
  ];
};

export const getNavSubmenus = (lang: Language): SubMenuData => {
  const isVi = lang === 'vi';
  return {
    [isVi ? 'Cửa Hàng' : 'Store']: [
      {
        title: isVi ? 'Mua Sắm' : 'Shop',
        links: [
          { label: isVi ? 'Mua sản phẩm mới nhất' : 'Shop the Latest', href: '/store' },
          { label: 'Mac', href: '/mac' },
          { label: 'iPad', href: '/ipad' },
          { label: 'iPhone', href: '/iphone' },
          { label: 'Apple Watch', href: '/watch' },
          { label: isVi ? 'Phụ kiện' : 'Accessories', href: '/accessories' },
        ]
      },
      {
        title: isVi ? 'Liên kết nhanh' : 'Quick Links',
        links: [
          { label: isVi ? 'Tìm cửa hàng' : 'Find a Store', href: '/store/find-store' },
          { label: isVi ? 'Tình trạng đơn hàng' : 'Order Status', href: '/store/order-status' },
          { label: isVi ? 'Tài chính' : 'Financing', href: '/store/financing' },
        ]
      },
      {
        title: isVi ? 'Ưu đãi đặc biệt' : 'Shop Special Stores',
        links: [
          { label: isVi ? 'Sản phẩm tân trang' : 'Certified Refurbished', href: '/store/refurbished' },
          { label: isVi ? 'Giáo dục' : 'Education', href: '/store/education' },
          { label: isVi ? 'Doanh nghiệp' : 'Business', href: '/store/business' },
        ]
      }
    ],
    'Mac': [
      {
        title: isVi ? 'Khám Phá Mac' : 'Explore Mac',
        links: [
          { label: isVi ? 'Khám phá tất cả Mac' : 'Explore All Mac', href: '/mac' },
          { label: 'MacBook Air', href: '/mac/macbook-air' },
          { label: 'MacBook Pro', href: '/mac/macbook-pro' },
          { label: 'iMac', href: '/mac/imac' },
          { label: 'Mac mini', href: '/mac/mac-mini' },
          { label: 'Mac Studio', href: '/mac/mac-studio' },
          { label: 'Mac Pro', href: '/mac/mac-pro' },
          { label: isVi ? 'Màn hình' : 'Displays', href: '/mac/displays' },
        ]
      },
      {
        title: isVi ? 'Mua Mac' : 'Shop Mac',
        links: [
          { label: isVi ? 'Mua Mac' : 'Shop Mac', href: '/store/buy-mac' },
          { label: isVi ? 'Phụ kiện Mac' : 'Mac Accessories', href: '/mac/accessories' },
          { label: isVi ? 'Tài chính' : 'Financing', href: '/mac/financing' },
        ]
      },
      {
        title: isVi ? 'Hơn nữa về Mac' : 'More from Mac',
        links: [
          { label: isVi ? 'Hỗ trợ Mac' : 'Mac Support', href: '/support/mac' },
          { label: 'macOS Sequoia', href: '/mac/macos-sequoia' },
          { label: 'Apple Intelligence', href: '/mac/apple-intelligence' },
          { label: 'Continuity', href: '/mac/continuity' },
        ]
      }
    ],
    'iPad': [
      {
        title: isVi ? 'Khám Phá iPad' : 'Explore iPad',
        links: [
          { label: isVi ? 'Khám phá tất cả iPad' : 'Explore All iPad', href: '/ipad' },
          { label: 'iPad Pro', href: '/ipad/ipad-pro' },
          { label: 'iPad Air', href: '/ipad/ipad-air' },
          { label: 'iPad', href: '/ipad/ipad-10th-gen' },
          { label: 'iPad mini', href: '/ipad/ipad-mini' },
          { label: 'Apple Pencil', href: '/ipad/apple-pencil' },
          { label: isVi ? 'Bàn phím' : 'Keyboards', href: '/ipad/keyboards' },
        ]
      },
      {
        title: isVi ? 'Mua iPad' : 'Shop iPad',
        links: [
          { label: isVi ? 'Mua iPad' : 'Shop iPad', href: '/store/buy-ipad' },
          { label: isVi ? 'Phụ kiện iPad' : 'iPad Accessories', href: '/ipad/accessories' },
        ]
      },
      {
        title: isVi ? 'Hơn nữa về iPad' : 'More from iPad',
        links: [
          { label: isVi ? 'Hỗ trợ iPad' : 'iPad Support', href: '/support/ipad' },
          { label: 'iPadOS 18', href: '/ipad/ipados-18' },
        ]
      }
    ],
    'iPhone': [
      {
        title: isVi ? 'Khám Phá iPhone' : 'Explore iPhone',
        links: [
          { label: isVi ? 'Khám phá tất cả iPhone' : 'Explore All iPhone', href: '/iphone' },
          { label: 'iPhone 16 Pro', href: '/iphone/iphone-16-pro' },
          { label: 'iPhone 16', href: '/iphone/iphone-16' },
          { label: 'iPhone 15', href: '/iphone/iphone-15' },
          { label: 'iPhone 14', href: '/iphone/iphone-14' },
          { label: 'iPhone SE', href: '/iphone/iphone-se' },
        ]
      },
      {
        title: isVi ? 'Mua iPhone' : 'Shop iPhone',
        links: [
          { label: isVi ? 'Mua iPhone' : 'Shop iPhone', href: '/store/buy-iphone' },
          { label: isVi ? 'Phụ kiện iPhone' : 'iPhone Accessories', href: '/iphone/accessories' },
        ]
      },
      {
        title: isVi ? 'Hơn nữa về iPhone' : 'More from iPhone',
        links: [
          { label: isVi ? 'Hỗ trợ iPhone' : 'iPhone Support', href: '/support/iphone' },
          { label: 'iOS 18', href: '/iphone/ios-18' },
          { label: isVi ? 'Quyền riêng tư' : 'Privacy', href: '/iphone/privacy' },
        ]
      }
    ],
    'Watch': [
      {
        title: isVi ? 'Khám Phá Watch' : 'Explore Watch',
        links: [
          { label: isVi ? 'Khám phá tất cả Apple Watch' : 'Explore All Apple Watch', href: '/watch' },
          { label: 'Apple Watch Series 10', href: '/watch/apple-watch-series-10' },
          { label: 'Apple Watch Ultra 2', href: '/watch/apple-watch-ultra-2' },
          { label: 'Apple Watch SE', href: '/watch/apple-watch-se' },
          { label: 'Apple Watch Nike', href: '/watch/apple-watch-nike' },
        ]
      },
      {
        title: isVi ? 'Mua Watch' : 'Shop Watch',
        links: [
          { label: isVi ? 'Mua Apple Watch' : 'Shop Apple Watch', href: '/store/buy-watch' },
          { label: isVi ? 'Dây đeo' : 'Bands', href: '/watch/bands' },
          { label: isVi ? 'Phụ kiện Watch' : 'Watch Accessories', href: '/watch/accessories' },
        ]
      },
      {
        title: isVi ? 'Hơn nữa về Watch' : 'More from Watch',
        links: [
          { label: isVi ? 'Hỗ trợ Apple Watch' : 'Apple Watch Support', href: '/support/watch' },
          { label: 'watchOS 11', href: '/watch/watchos-11' },
        ]
      }
    ],
    'AirPods': [
      {
        title: isVi ? 'Khám Phá AirPods' : 'Explore AirPods',
        links: [
          { label: isVi ? 'Khám phá tất cả AirPods' : 'Explore All AirPods', href: '/airpods' },
          { label: 'AirPods 4', href: '/airpods/airpods-4' },
          { label: 'AirPods Pro 2', href: '/airpods/airpods-pro-2' },
          { label: 'AirPods Max', href: '/airpods/airpods-max' },
        ]
      },
      {
        title: isVi ? 'Mua AirPods' : 'Shop AirPods',
        links: [
          { label: isVi ? 'Mua AirPods' : 'Shop AirPods', href: '/store/buy-airpods' },
          { label: isVi ? 'Hỗ trợ AirPods' : 'AirPods Support', href: '/support/airpods' },
        ]
      }
    ],
    [isVi ? 'TV & Nhà' : 'TV & Home']: [
      {
        title: isVi ? 'Khám Phá TV & Nhà' : 'Explore TV & Home',
        links: [
          { label: isVi ? 'Khám phá TV & Nhà' : 'Explore TV & Home', href: '/tv-home' },
          { label: 'Apple TV 4K', href: '/tv-home/apple-tv-4k' },
          { label: 'HomePod', href: '/tv-home/homepod' },
          { label: 'HomePod mini', href: '/tv-home/homepod-mini' },
        ]
      },
      {
        title: isVi ? 'Mua TV & Nhà' : 'Shop TV & Home',
        links: [
          { label: isVi ? 'Mua Apple TV 4K' : 'Shop Apple TV 4K', href: '/store/buy-apple-tv' },
          { label: isVi ? 'Mua HomePod' : 'Shop HomePod', href: '/store/buy-homepod' },
          { label: isVi ? 'Phụ kiện TV & Nhà' : 'TV & Home Accessories', href: '/tv-home/accessories' },
        ]
      }
    ],
    [isVi ? 'Giải Trí' : 'Entertainment']: [
      {
        title: isVi ? 'Khám Phá Giải Trí' : 'Explore Entertainment',
        links: [
          { label: 'Apple One', href: '/entertainment/apple-one' },
          { label: 'Apple TV+', href: '/entertainment/apple-tv-plus' },
          { label: 'Apple Music', href: '/entertainment/apple-music' },
          { label: 'Apple Arcade', href: '/entertainment/apple-arcade' },
          { label: 'Apple Podcasts', href: '/entertainment/apple-podcasts' },
          { label: 'Apple Books', href: '/entertainment/apple-books' },
          { label: 'App Store', href: '/entertainment/app-store' },
        ]
      }
    ]
  };
};

export const getFooterColumns = (lang: Language): FooterSection[][] => {
  const isVi = lang === 'vi';
  return [
    [ // Column 1
      {
        title: isVi ? 'Khám Phá và Mua Hàng' : 'Shop and Learn',
        links: [
            { label: isVi ? 'Cửa Hàng' : 'Store', href: '/store' },
            { label: 'Mac', href: '/mac' },
            { label: 'iPad', href: '/ipad' },
            { label: 'iPhone', href: '/iphone' },
            { label: 'Watch', href: '/watch' },
            { label: 'AirPods', href: '/airpods' },
            { label: isVi ? 'TV & Nhà' : 'TV & Home', href: '/tv-home' },
            { label: isVi ? 'AirTag' : 'AirTag', href: '/store/airtag' },
            { label: isVi ? 'Phụ Kiện' : 'Accessories', href: '/store/accessories' },
            { label: isVi ? 'Thẻ Quà Tặng' : 'Gift Cards', href: '/store/gift-cards' }
        ],
      },
      {
        title: isVi ? 'Ví Apple' : 'Apple Wallet',
        links: [
            { label: isVi ? 'Ví' : 'Wallet', href: '/wallet' },
            { label: 'Apple Pay', href: '/apple-pay' }
        ],
      },
    ],
    [ // Column 2
      {
        title: isVi ? 'Tài Khoản' : 'Account',
        links: [
            { label: isVi ? 'Quản Lý ID Apple' : 'Manage Your Apple ID', href: 'https://appleid.apple.com' },
            { label: isVi ? 'Tài Khoản Apple Store' : 'Apple Store Account', href: '/account' },
            { label: 'iCloud.com', href: 'https://www.icloud.com' }
        ],
      },
      {
        title: isVi ? 'Giải Trí' : 'Entertainment',
        links: [
            { label: 'Apple One', href: '/entertainment/apple-one' },
            { label: 'Apple TV+', href: '/entertainment/apple-tv-plus' },
            { label: 'Apple Music', href: '/entertainment/apple-music' },
            { label: 'Apple Arcade', href: '/entertainment/apple-arcade' },
            { label: 'Apple Podcasts', href: '/entertainment/apple-podcasts' },
            { label: 'Apple Books', href: '/entertainment/apple-books' },
            { label: 'App Store', href: '/entertainment/app-store' }
        ],
      },
    ],
    [ // Column 3
      {
        title: isVi ? 'Cửa Hàng Apple' : 'Apple Store',
        links: [
            { label: isVi ? 'Tìm Cửa Hàng' : 'Find a Store', href: '/store/find' },
            { label: 'Genius Bar', href: '/store/genius-bar' },
            { label: 'Today at Apple', href: '/store/today' },
            { label: isVi ? 'Trại Hè Apple' : 'Apple Camp', href: '/store/camp' },
            { label: isVi ? 'Ứng dụng Apple Store' : 'Apple Store App', href: 'https://apps.apple.com' },
            { label: isVi ? 'Tài Chính' : 'Financing', href: '/store/financing' },
            { label: isVi ? 'Tái Chế' : 'Apple Trade In', href: '/environment' },
            { label: isVi ? 'Tình Trạng Đơn Hàng' : 'Order Status', href: '/account/orders' },
            { label: isVi ? 'Hỗ Trợ Mua Hàng' : 'Shopping Help', href: '/store/help' }
        ],
      },
    ],
    [ // Column 4
      {
        title: isVi ? 'Dành Cho Doanh Nghiệp' : 'For Business',
        links: [
            { label: isVi ? 'Apple và Doanh Nghiệp' : 'Apple and Business', href: '/business' },
            { label: isVi ? 'Mua Sắm Cho Doanh Nghiệp' : 'Shop for Business', href: '/business/shop' }
        ],
      },
      {
        title: isVi ? 'Dành Cho Giáo Dục' : 'For Education',
        links: [
            { label: isVi ? 'Apple và Giáo Dục' : 'Apple and Education', href: '/education' },
            { label: isVi ? 'Mua Sắm Cho Đại Học' : 'Shop for College', href: '/education/shop' }
        ],
      },
      {
        title: isVi ? 'Dành Cho Chăm Sóc Sức Khỏe' : 'For Healthcare',
        links: [
            { label: isVi ? 'Apple trong Chăm Sóc Sức Khỏe' : 'Apple in Healthcare', href: '/healthcare' },
            { label: isVi ? 'Sức Khỏe trên Apple Watch' : 'Health on Apple Watch', href: '/watch/health' }
        ],
      },
    ],
    [ // Column 5
      {
        title: isVi ? 'Giá Trị Cốt Lõi' : 'Apple Values',
        links: [
            { label: isVi ? 'Trợ Năng' : 'Accessibility', href: '/accessibility' },
            { label: isVi ? 'Giáo Dục' : 'Education', href: '/education-values' },
            { label: isVi ? 'Môi Trường' : 'Environment', href: '/environment' },
            { label: isVi ? 'Quyền Riêng Tư' : 'Privacy', href: '/privacy' },
            { label: isVi ? 'Trách Nhiệm Nhà Cung Cấp' : 'Supplier Responsibility', href: '/supplier-responsibility' }
        ],
      },
      {
        title: isVi ? 'Về Apple' : 'About Apple',
        links: [
            { label: 'Newsroom', href: '/newsroom' },
            { label: isVi ? 'Lãnh Đạo Apple' : 'Apple Leadership', href: '/about/leadership' },
            { label: isVi ? 'Cơ Hội Nghề Nghiệp' : 'Career Opportunities', href: '/jobs' },
            { label: isVi ? 'Nhà Đầu Tư' : 'Investors', href: 'https://investor.apple.com' },
            { label: isVi ? 'Đạo Đức & Tuân Thủ' : 'Ethics & Compliance', href: '/compliance' },
            { label: isVi ? 'Sự Kiện' : 'Events', href: '/events' },
            { label: isVi ? 'Liên Hệ Apple' : 'Contact Apple', href: '/contact' }
        ],
      },
    ],
  ];
};
