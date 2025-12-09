import { NavItem, FooterSection, SubMenuData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cửa Hàng', href: '/store' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV & Nhà', href: '/tv-home' },
  { label: 'Giải Trí', href: '/entertainment' },
  { label: 'Phụ Kiện', href: '/accessories' },
  { label: 'Hỗ Trợ', href: '/support' },
];

export const NAV_SUBMENUS: SubMenuData = {
  'Cửa Hàng': [
    {
      title: 'Mua Sắm',
      links: [
        { label: 'Mua sản phẩm mới nhất', href: '/store' },
        { label: 'Mac', href: '/mac' },
        { label: 'iPad', href: '/ipad' },
        { label: 'iPhone', href: '/iphone' },
        { label: 'Apple Watch', href: '/watch' },
        { label: 'Phụ kiện', href: '/accessories' },
      ]
    },
    {
      title: 'Liên kết nhanh',
      links: [
        { label: 'Tìm cửa hàng', href: '/store/find-store' },
        { label: 'Tình trạng đơn hàng', href: '/store/order-status' },
        { label: 'Tài chính', href: '/store/financing' },
      ]
    },
    {
      title: 'Ưu đãi đặc biệt',
      links: [
        { label: 'Sản phẩm tân trang', href: '/store/refurbished' },
        { label: 'Giáo dục', href: '/store/education' },
        { label: 'Doanh nghiệp', href: '/store/business' },
      ]
    }
  ],
  'Mac': [
    {
      title: 'Khám Phá Mac',
      links: [
        { label: 'Khám phá tất cả Mac', href: '/mac' },
        { label: 'MacBook Air', href: '/mac/macbook-air' },
        { label: 'MacBook Pro', href: '/mac/macbook-pro' },
        { label: 'iMac', href: '/mac/imac' },
        { label: 'Mac mini', href: '/mac/mac-mini' },
        { label: 'Mac Studio', href: '/mac/mac-studio' },
        { label: 'Mac Pro', href: '/mac/mac-pro' },
        { label: 'Màn hình', href: '/mac/displays' },
      ]
    },
    {
      title: 'Mua Mac',
      links: [
        { label: 'Mua Mac', href: '/store/buy-mac' },
        { label: 'Phụ kiện Mac', href: '/mac/accessories' },
        { label: 'Tài chính', href: '/mac/financing' },
      ]
    },
    {
      title: 'Hơn nữa về Mac',
      links: [
        { label: 'Hỗ trợ Mac', href: '/support/mac' },
        { label: 'macOS Sequoia', href: '/mac/macos-sequoia' },
        { label: 'Apple Intelligence', href: '/mac/apple-intelligence' },
        { label: 'Continuity', href: '/mac/continuity' },
      ]
    }
  ],
  'iPad': [
    {
      title: 'Khám Phá iPad',
      links: [
        { label: 'Khám phá tất cả iPad', href: '/ipad' },
        { label: 'iPad Pro', href: '/ipad/ipad-pro' },
        { label: 'iPad Air', href: '/ipad/ipad-air' },
        { label: 'iPad', href: '/ipad/ipad-10th-gen' },
        { label: 'iPad mini', href: '/ipad/ipad-mini' },
        { label: 'Apple Pencil', href: '/ipad/apple-pencil' },
        { label: 'Bàn phím', href: '/ipad/keyboards' },
      ]
    },
    {
      title: 'Mua iPad',
      links: [
        { label: 'Mua iPad', href: '/store/buy-ipad' },
        { label: 'Phụ kiện iPad', href: '/ipad/accessories' },
      ]
    },
    {
      title: 'Hơn nữa về iPad',
      links: [
        { label: 'Hỗ trợ iPad', href: '/support/ipad' },
        { label: 'iPadOS 18', href: '/ipad/ipados-18' },
      ]
    }
  ],
  'iPhone': [
    {
      title: 'Khám Phá iPhone',
      links: [
        { label: 'Khám phá tất cả iPhone', href: '/iphone' },
        { label: 'iPhone 16 Pro', href: '/iphone/iphone-16-pro' },
        { label: 'iPhone 16', href: '/iphone/iphone-16' },
        { label: 'iPhone 15', href: '/iphone/iphone-15' },
        { label: 'iPhone 14', href: '/iphone/iphone-14' },
        { label: 'iPhone SE', href: '/iphone/iphone-se' },
      ]
    },
    {
      title: 'Mua iPhone',
      links: [
        { label: 'Mua iPhone', href: '/store/buy-iphone' },
        { label: 'Phụ kiện iPhone', href: '/iphone/accessories' },
      ]
    },
    {
      title: 'Hơn nữa về iPhone',
      links: [
        { label: 'Hỗ trợ iPhone', href: '/support/iphone' },
        { label: 'iOS 18', href: '/iphone/ios-18' },
        { label: 'Quyền riêng tư', href: '/iphone/privacy' },
      ]
    }
  ],
  'Watch': [
    {
      title: 'Khám Phá Watch',
      links: [
        { label: 'Khám phá tất cả Apple Watch', href: '/watch' },
        { label: 'Apple Watch Series 10', href: '/watch/apple-watch-series-10' },
        { label: 'Apple Watch Ultra 2', href: '/watch/apple-watch-ultra-2' },
        { label: 'Apple Watch SE', href: '/watch/apple-watch-se' },
        { label: 'Apple Watch Nike', href: '/watch/apple-watch-nike' },
      ]
    },
    {
      title: 'Mua Watch',
      links: [
        { label: 'Mua Apple Watch', href: '/store/buy-watch' },
        { label: 'Dây đeo', href: '/watch/bands' },
        { label: 'Phụ kiện Watch', href: '/watch/accessories' },
      ]
    },
    {
      title: 'Hơn nữa về Watch',
      links: [
        { label: 'Hỗ trợ Apple Watch', href: '/support/watch' },
        { label: 'watchOS 11', href: '/watch/watchos-11' },
      ]
    }
  ],
  'AirPods': [
    {
      title: 'Khám Phá AirPods',
      links: [
        { label: 'Khám phá tất cả AirPods', href: '/airpods' },
        { label: 'AirPods 4', href: '/airpods/airpods-4' },
        { label: 'AirPods Pro 2', href: '/airpods/airpods-pro-2' },
        { label: 'AirPods Max', href: '/airpods/airpods-max' },
      ]
    },
    {
      title: 'Mua AirPods',
      links: [
        { label: 'Mua AirPods', href: '/store/buy-airpods' },
        { label: 'Hỗ trợ AirPods', href: '/support/airpods' },
      ]
    }
  ],
  'TV & Nhà': [
    {
      title: 'Khám Phá TV & Nhà',
      links: [
        { label: 'Khám phá TV & Nhà', href: '/tv-home' },
        { label: 'Apple TV 4K', href: '/tv-home/apple-tv-4k' },
        { label: 'HomePod', href: '/tv-home/homepod' },
        { label: 'HomePod mini', href: '/tv-home/homepod-mini' },
      ]
    },
    {
      title: 'Mua TV & Nhà',
      links: [
        { label: 'Mua Apple TV 4K', href: '/store/buy-apple-tv' },
        { label: 'Mua HomePod', href: '/store/buy-homepod' },
        { label: 'Phụ kiện TV & Nhà', href: '/tv-home/accessories' },
      ]
    }
  ],
  'Giải Trí': [
    {
      title: 'Khám Phá Giải Trí',
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

export const FOOTER_COLUMNS: FooterSection[][] = [
  [ // Column 1
    {
      title: 'Khám Phá và Mua Hàng',
      links: ['Cửa Hàng', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Nhà', 'AirTag', 'Phụ Kiện', 'Thẻ Quà Tặng'],
    },
    {
      title: 'Ví Apple',
      links: ['Ví', 'Apple Pay'],
    },
  ],
  [ // Column 2
    {
      title: 'Tài Khoản',
      links: ['Quản Lý ID Apple', 'Tài Khoản Apple Store', 'iCloud.com'],
    },
    {
      title: 'Giải Trí',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
    },
  ],
  [ // Column 3
    {
      title: 'Cửa Hàng Apple',
      links: ['Tìm Cửa Hàng', 'Genius Bar', 'Today at Apple', 'Trại Hè Apple', 'Ứng dụng Apple Store', 'Tài Chính', 'Tái Chế', 'Tình Trạng Đơn Hàng', 'Hỗ Trợ Mua Hàng'],
    },
  ],
  [ // Column 4
    {
      title: 'Dành Cho Doanh Nghiệp',
      links: ['Apple và Doanh Nghiệp', 'Mua Sắm Cho Doanh Nghiệp'],
    },
    {
      title: 'Dành Cho Giáo Dục',
      links: ['Apple và Giáo Dục', 'Mua Sắm Cho Đại Học'],
    },
    {
      title: 'Dành Cho Chăm Sóc Sức Khỏe',
      links: ['Apple trong Chăm Sóc Sức Khỏe', 'Sức Khỏe trên Apple Watch'],
    },
  ],
  [ // Column 5
    {
      title: 'Giá Trị Cốt Lõi',
      links: ['Trợ Năng', 'Giáo Dục', 'Môi Trường', 'Quyền Riêng Tư', 'Trách Nhiệm Nhà Cung Cấp'],
    },
    {
      title: 'Về Apple',
      links: ['Newsroom', 'Lãnh Đạo Apple', 'Cơ Hội Nghề Nghiệp', 'Nhà Đầu Tư', 'Đạo Đức & Tuân Thủ', 'Sự Kiện', 'Liên Hệ Apple'],
    },
  ],
];