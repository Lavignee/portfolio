import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// 전역 상태 + 액션 정의.
// 기존 Redux의 Cursor / CommonValue 리듀서를 하나의 Zustand 스토어로 통합.
interface StoreState {
  // ----- Cursor 상태 -----
  // 커서에 출력할 텍스트
  text: string;
  // 커서 변화를 위한 스타일
  firstClassName: string;
  // 커서 변화를 위한 추가 스타일
  secondClassName: string;

  // ----- CommonValue 상태 -----
  // language: 언어 변경에 따라 텍스트 변경에 참조.
  language: string;
  // currentContactState: contact의 활성화 여부.
  currentContactState: boolean;
  // currentButtonDelay: 버튼 연속 클릭 방지를 위한 딜레이.
  currentButtonDelay: boolean;
  // currentGnbState: gnb의 활성화 여부.
  currentGnbState: boolean;
  // currentSwitchAnimation: 스크린 커버 애니메이션.
  currentSwitchAnimation: boolean;
  // currentFilmState: 추가 필름의 활성화 여부.
  currentFilmState: boolean;
  // currentSmoothTopState: Top으로 이동 여부.
  currentSmoothTopState: boolean;
  // makeScrollState: 스크롤 재생성 여부.
  makeScrollState: boolean;
  // currentScrollValue: 스크롤 퍼센트 계산을 위한 현재 값.
  currentScrollValue: number;
  // currentScrollLimit: 스크롤 퍼센트 계산을 위한 max 값.
  currentScrollLimit: number;
  // currentGsapState: 스크롤이 gsap와 연계 되었는지 여부.
  currentGsapState: boolean;
  // currentSplitText: 현재 화면에서 동작할 splitText 트리거.
  currentSplitText: string;

  // ----- Cursor 액션 -----
  changeText: (text: string) => void;
  changeFirstClassName: (firstClassName: string) => void;
  changeSecondClassName: (secondClassName: string) => void;

  // ----- CommonValue 액션 -----
  changeLanguage: (language: string) => void;
  // contact 활성화 여부 토글.
  changeContactState: () => void;
  // contact를 비활성화.
  changeContactStateFalse: () => void;
  changeButtonDelay: (currentButtonDelay: boolean) => void;
  // gnb 활성화 여부 토글.
  changeGnbState: () => void;
  changeSwitchAnimation: (currentSwitchAnimation: boolean) => void;
  changeFilmState: (currentFilmState: boolean) => void;
  smoothTop: (currentSmoothTopState: boolean) => void;
  makeSmoothScroll: (makeScrollState: boolean) => void;
  checkScrollValue: (currentScrollValue: number) => void;
  checkScrollLimit: (currentScrollLimit: number) => void;
  changeGsapState: (currentGsapState: boolean) => void;
  splitTextStart: (currentSplitText: string) => void;
}

const useStore = create<StoreState>()(
  devtools(
    (set) => ({
      // ----- 초기 상태 -----
      text: '',
      firstClassName: '',
      secondClassName: '',
      language: 'ko',
      currentContactState: false,
      currentButtonDelay: false,
      currentGnbState: false,
      currentSwitchAnimation: false,
      currentFilmState: false,
      currentSmoothTopState: false,
      makeScrollState: false,
      currentScrollValue: 0,
      currentScrollLimit: 0,
      currentGsapState: false,
      currentSplitText: '',

      // ----- Cursor 액션 -----
      changeText: (text) => set({ text }),
      changeFirstClassName: (firstClassName) => set({ firstClassName }),
      changeSecondClassName: (secondClassName) => set({ secondClassName }),

      // ----- CommonValue 액션 -----
      changeLanguage: (language) => set({ language }),
      changeContactState: () =>
        set((state) => ({ currentContactState: !state.currentContactState })),
      changeContactStateFalse: () => set({ currentContactState: false }),
      changeButtonDelay: (currentButtonDelay) => set({ currentButtonDelay }),
      changeGnbState: () => set((state) => ({ currentGnbState: !state.currentGnbState })),
      changeSwitchAnimation: (currentSwitchAnimation) => set({ currentSwitchAnimation }),
      changeFilmState: (currentFilmState) => set({ currentFilmState }),
      smoothTop: (currentSmoothTopState) => set({ currentSmoothTopState }),
      makeSmoothScroll: (makeScrollState) => set({ makeScrollState }),
      checkScrollValue: (currentScrollValue) => set({ currentScrollValue }),
      checkScrollLimit: (currentScrollLimit) => set({ currentScrollLimit }),
      changeGsapState: (currentGsapState) => set({ currentGsapState }),
      splitTextStart: (currentSplitText) => set({ currentSplitText }),
    }),
    { name: 'portfolio-store' }
  )
);

export default useStore;
