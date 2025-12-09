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
  { label: 'Phụ Kiện', href: '#' },
  { label: 'Hỗ Trợ', href: '#' },
];

export const NAV_SUBMENUS: SubMenuData = {
  'Cửa Hàng': [
    {
      title: 'Mua Sắm',
      links: [
        { label: 'Mua sản phẩm mới nhất', href: '#' },
        { label: 'Mac', href: '/mac' },
        { label: 'iPad', href: '/ipad' },
        { label: 'iPhone', href: '/iphone' },
        { label: 'Apple Watch', href: '/watch' },
        { label: 'Phụ kiện', href: '#' },
      ]
    },
    {
      title: 'Liên kết nhanh',
      links: [
        { label: 'Tìm cửa hàng', href: '#' },
        { label: 'Tình trạng đơn hàng', href: '#' },
        { label: 'Tài chính', href: '#' },
      ]
    },
    {
      title: 'Ưu đãi đặc biệt',
      links: [
        { label: 'Sản phẩm tân trang', href: '#' },
        { label: 'Giáo dục', href: '#' },
        { label: 'Doanh nghiệp', href: '#' },
      ]
    }
  ],
  'Mac': [
    {
      title: 'Khám Phá Mac',
      links: [
        { label: 'Khám phá tất cả Mac', href: '/mac' },
        { label: 'MacBook Air', href: '#' },
        { label: 'MacBook Pro', href: '#' },
        { label: 'iMac', href: '#' },
        { label: 'Mac mini', href: '#' },
        { label: 'Mac Studio', href: '#' },
        { label: 'Mac Pro', href: '#' },
        { label: 'Màn hình', href: '#' },
      ]
    },
    {
      title: 'Mua Mac',
      links: [
        { label: 'Mua Mac', href: '#' },
        { label: 'Phụ kiện Mac', href: '#' },
        { label: 'Tài chính', href: '#' },
      ]
    },
    {
      title: 'Hơn nữa về Mac',
      links: [
        { label: 'Hỗ trợ Mac', href: '#' },
        { label: 'macOS Sequoia', href: '#' },
        { label: 'Apple Intelligence', href: '#' },
        { label: 'Continuity', href: '#' },
      ]
    }
  ],
  'iPad': [
    {
      title: 'Khám Phá iPad',
      links: [
        { label: 'Khám phá tất cả iPad', href: '/ipad' },
        { label: 'iPad Pro', href: '#' },
        { label: 'iPad Air', href: '#' },
        { label: 'iPad', href: '#' },
        { label: 'iPad mini', href: '#' },
        { label: 'Apple Pencil', href: '#' },
        { label: 'Bàn phím', href: '#' },
      ]
    },
    {
      title: 'Mua iPad',
      links: [
        { label: 'Mua iPad', href: '#' },
        { label: 'Phụ kiện iPad', href: '#' },
      ]
    },
    {
      title: 'Hơn nữa về iPad',
      links: [
        { label: 'Hỗ trợ iPad', href: '#' },
        { label: 'iPadOS 18', href: '#' },
      ]
    }
  ],
  'iPhone': [
    {
      title: 'Khám Phá iPhone',
      links: [
        { label: 'Khám phá tất cả iPhone', href: '/iphone' },
        { label: 'iPhone 16 Pro', href: '#' },
        { label: 'iPhone 16', href: '#' },
        { label: 'iPhone 15', href: '#' },
        { label: 'iPhone 14', href: '#' },
        { label: 'iPhone SE', href: '#' },
      ]
    },
    {
      title: 'Mua iPhone',
      links: [
        { label: 'Mua iPhone', href: '#' },
        { label: 'Phụ kiện iPhone', href: '#' },
      ]
    },
    {
      title: 'Hơn nữa về iPhone',
      links: [
        { label: 'Hỗ trợ iPhone', href: '#' },
        { label: 'iOS 18', href: '#' },
        { label: 'Quyền riêng tư', href: '#' },
      ]
    }
  ],
  'Watch': [
    {
      title: 'Khám Phá Watch',
      links: [
        { label: 'Khám phá tất cả Apple Watch', href: '/watch' },
        { label: 'Apple Watch Series 10', href: '#' },
        { label: 'Apple Watch Ultra 2', href: '#' },
        { label: 'Apple Watch SE', href: '#' },
        { label: 'Apple Watch Nike', href: '#' },
      ]
    },
    {
      title: 'Mua Watch',
      links: [
        { label: 'Mua Apple Watch', href: '#' },
        { label: 'Dây đeo', href: '#' },
        { label: 'Phụ kiện Watch', href: '#' },
      ]
    },
    {
      title: 'Hơn nữa về Watch',
      links: [
        { label: 'Hỗ trợ Apple Watch', href: '#' },
        { label: 'watchOS 11', href: '#' },
      ]
    }
  ],
  'AirPods': [
    {
      title: 'Khám Phá AirPods',
      links: [
        { label: 'Khám phá tất cả AirPods', href: '/airpods' },
        { label: 'AirPods 4', href: '#' },
        { label: 'AirPods Pro 2', href: '#' },
        { label: 'AirPods Max', href: '#' },
      ]
    },
    {
      title: 'Mua AirPods',
      links: [
        { label: 'Mua AirPods', href: '#' },
        { label: 'Hỗ trợ AirPods', href: '#' },
      ]
    }
  ],
  'TV & Nhà': [
    {
      title: 'Khám Phá TV & Nhà',
      links: [
        { label: 'Khám phá TV & Nhà', href: '/tv-home' },
        { label: 'Apple TV 4K', href: '#' },
        { label: 'HomePod', href: '#' },
        { label: 'HomePod mini', href: '#' },
      ]
    },
    {
      title: 'Mua TV & Nhà',
      links: [
        { label: 'Mua Apple TV 4K', href: '#' },
        { label: 'Mua HomePod', href: '#' },
        { label: 'Phụ kiện TV & Nhà', href: '#' },
      ]
    }
  ],
  'Giải Trí': [
    {
      title: 'Khám Phá Giải Trí',
      links: [
        { label: 'Apple One', href: '#' },
        { label: 'Apple TV+', href: '#' },
        { label: 'Apple Music', href: '#' },
        { label: 'Apple Arcade', href: '#' },
        { label: 'Apple Podcasts', href: '#' },
        { label: 'Apple Books', href: '#' },
        { label: 'App Store', href: '#' },
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