import AboutDetail from '@/pages/aboutDetail/aboutDetail';
import { useCursorHandlers } from '@/hooks/useCursorHandlers';

export default function AboutPage() {
  const { _onHover, _onLeave } = useCursorHandlers();

  return <AboutDetail _onHover={_onHover} _onLeave={_onLeave} />;
}
