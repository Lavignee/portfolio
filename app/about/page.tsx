import type { Metadata } from 'next';
import AboutDetail from '@/views/aboutDetail';

export const metadata: Metadata = {
  title: 'About',
  description: '프론트엔드 개발자 이도영의 성장 배경과 가치관을 소개합니다.',
  alternates: { canonical: '/about' },
};

const Page = () => {
  return <AboutDetail />;
};

export default Page;
