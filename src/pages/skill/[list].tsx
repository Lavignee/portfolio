import type { NextPage } from 'next';
import SkillDetail from '@/pages/skillDetail/skillDetail';
import { useCursorHandlers } from '@/hooks/useCursorHandlers';

const SkillPage: NextPage = () => {
  const { _onHover, _onLeave } = useCursorHandlers();

  return <SkillDetail _onHover={_onHover} _onLeave={_onLeave} />;
};

export default SkillPage;
