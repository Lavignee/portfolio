import type { Metadata } from 'next';
import SkillDetail from '@/views/skillDetail';

const SKILL_TITLES: Record<string, string> = {
  language: '언어',
  lib: '프레임워크 & 라이브러리',
  tool: '개발 도구',
  interest: '최근 관심 기술',
};

// 정적 생성할 4개 카테고리.
export function generateStaticParams() {
  return Object.keys(SKILL_TITLES).map((list) => ({ list }));
}

// 정의된 카테고리 외의 list 값은 404(과거엔 200 soft-404).
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ list: string }>;
}): Promise<Metadata> {
  const { list } = await params;
  const name = SKILL_TITLES[list] ?? 'Skill';
  return {
    title: `Skill — ${name}`,
    description: `이도영의 ${name} 관련 기술 스택과 숙련도입니다.`,
    alternates: { canonical: `/skill/${list}` },
  };
}

const Page = () => {
  return <SkillDetail />;
};

export default Page;
