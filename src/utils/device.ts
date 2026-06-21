// react-device-detect(전체 UA 파서가 불리언 2개에 ~13KB gzip)를 대체하는 경량 유틸.
// 이 프로젝트는 데스크탑/모바일 이분 게이트(커서·애니메이션·전화 링크)로만 쓰므로 정규식 1회 평가로 충분.
// SSR(navigator 없음)에선 isMobile=false. 모든 렌더 소비처가 useMounted 게이트 뒤라 하이드레이션 안전.
const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';

export const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
export const isDesktop = !isMobile;
