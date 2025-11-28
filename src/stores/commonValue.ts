// src/stores/commonValue.ts
import { create } from 'zustand';

export interface CommonValueState {
  // language: 현재 사용 언어
  language: string;

  // contact 열림 여부
  currentContactState: boolean;

  // 버튼 연속 클릭 방지 플래그
  currentButtonDelay: boolean;

  // GNB(헤더 메뉴) 열림 여부
  currentGnbState: boolean;

  // 스크린 커버 애니메이션 상태
  currentSwitchAnimation: boolean;

  // 필름(노이즈) 추가 레이어 on/off
  currentFilmState: boolean;

  // SmoothScroll 이 최상단으로 올라가는 중인지 여부
  currentSmoothTopState: boolean;

  // SmoothScroll 생성 여부
  makeScrollState: boolean;

  // 스크롤 퍼센트 계산용 현재 값
  currentScrollValue: number;

  // 스크롤 퍼센트 계산용 최대 값
  currentScrollLimit: number;

  // gsap + scrollTrigger 준비 여부
  currentGsapState: boolean;

  // 현재 활성화된 splitText 트리거 키
  currentSplitText: string;

  // ====== Setter / 액션들 ======
  setLanguage: (lang: string) => void;

  toggleContactState: () => void;
  closeContact: () => void;

  setButtonDelay: (value: boolean) => void;

  toggleGnbState: () => void;
  setGnbState: (value: boolean) => void;

  setSwitchAnimation: (value: boolean) => void;
  setFilmState: (value: boolean) => void;

  setSmoothTop: (value: boolean) => void;
  setMakeScrollState: (value: boolean) => void;

  setScrollValue: (value: number) => void;
  setScrollLimit: (value: number) => void;

  setGsapState: (value: boolean) => void;

  setSplitText: (value: string) => void;
}

const initialState: Omit<
  CommonValueState,
  | 'setLanguage'
  | 'toggleContactState'
  | 'closeContact'
  | 'setButtonDelay'
  | 'toggleGnbState'
  | 'setGnbState'
  | 'setSwitchAnimation'
  | 'setFilmState'
  | 'setSmoothTop'
  | 'setMakeScrollState'
  | 'setScrollValue'
  | 'setScrollLimit'
  | 'setGsapState'
  | 'setSplitText'
> = {
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
};

export const useCommonValueStore = create<CommonValueState>((set) => ({
  ...initialState,

  // 언어 변경
  setLanguage: (lang) => set({ language: lang }),

  // contact 열림/닫힘 토글
  toggleContactState: () =>
    set((state) => ({ currentContactState: !state.currentContactState })),

  // contact 강제 닫기
  closeContact: () => set({ currentContactState: false }),

  // 버튼 딜레이 on/off
  setButtonDelay: (value) => set({ currentButtonDelay: value }),

  // GNB 토글
  toggleGnbState: () =>
    set((state) => ({ currentGnbState: !state.currentGnbState })),

  // GNB 강제 세팅
  setGnbState: (value) => set({ currentGnbState: value }),

  // 스크린 커버 on/off
  setSwitchAnimation: (value) => set({ currentSwitchAnimation: value }),

  // 필름 레이어 on/off
  setFilmState: (value) => set({ currentFilmState: value }),

  // SmoothTop 플래그
  setSmoothTop: (value) => set({ currentSmoothTopState: value }),

  // SmoothScroll 생성 여부
  setMakeScrollState: (value) => set({ makeScrollState: value }),

  // 스크롤 값/리미트
  setScrollValue: (value) => set({ currentScrollValue: value }),
  setScrollLimit: (value) => set({ currentScrollLimit: value }),

  // gsap 준비 여부
  setGsapState: (value) => set({ currentGsapState: value }),

  // splitText 키
  setSplitText: (value) => set({ currentSplitText: value }),
}));
