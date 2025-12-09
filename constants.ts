import { NavItem, FooterSection } from './types';

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