import type { Metadata } from 'next';
import FootprintDetail from '@/views/footprintDetail';

export const metadata: Metadata = {
  title: 'Footprint',
  description: '프로젝트 · 경력사항 · 외부수주 등 이도영의 발자취입니다.',
  alternates: { canonical: '/footprint' },
};

const Page = () => {
  return <FootprintDetail />;
};

export default Page;
