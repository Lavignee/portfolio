import FootprintDetail from '@/pages/footprintDetail/footprintDetail';
import { useCursorHandlers } from '@/hooks/useCursorHandlers';

export default function FootprintPage() {
  const { _onHover, _onLeave } = useCursorHandlers();

  return <FootprintDetail _onHover={_onHover} _onLeave={_onLeave} />;
}
