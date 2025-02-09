const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE' as const;
const CONTACT_STATE = 'CONTACT_STATE' as const;
const CONTACT_STATE_FALSE = 'CONTACT_STATE_FALSE' as const;
const BUTTON_DELAY = 'BUTTON_DELAY' as const;
const GNB_STATE = 'GNB_STATE' as const;
const SWITCH_ANIMATION = 'SWITCH_ANIMATION' as const;
const FIRM_STATE = 'FIRM_STATE' as const;
const SMOOTH_TOP = 'SMOOTH_TOP' as const;
const MAKE_SCROLL_STATE = 'MAKE_SCROLL_STATE' as const;
const CURRENT_SCROLL_VALUE = 'CURRENT_SCROLL_VALUE' as const;
const CURRENT_SCROLL_LIMIT = 'CURRENT_SCROLL_LIMIT' as const;
const GSAP_READY = 'GSAP_READY' as const;
const SPLIT_TEXT_START = 'SPLIT_TEXT_START' as const;

export const changeLanguage = (language: string) => ({
  type: CHANGE_LANGUAGE,
  language
});
export const changeContactState = (currentContactState: boolean) => ({
  type: CONTACT_STATE,
  currentContactState
});
export const changeContactStateFalse = (currentContactState: boolean) => ({
  type: CONTACT_STATE_FALSE,
  currentContactState
});
export const changeButtonDelay = (currentButtonDelay: boolean) => ({
  type: BUTTON_DELAY,
  currentButtonDelay
});
export const changeGnbState = (currentGnbState: boolean) => ({
  type: GNB_STATE,
  currentGnbState
});
export const changeSwitchAnimation = (currentSwitchAnimation: boolean) => ({
  type: SWITCH_ANIMATION,
  currentSwitchAnimation
});
export const changeFilmState = (currentFilmState: boolean) => ({
  type: FIRM_STATE,
  currentFilmState
});
export const smoothTop = (currentSmoothTopState: boolean) => ({
  type: SMOOTH_TOP,
  currentSmoothTopState
});
export const makeSmoothScroll = (makeScrollState: boolean) => ({
  type: MAKE_SCROLL_STATE,
  makeScrollState
});
export const checkScrollValue = (currentScrollValue: number) => ({
  type: CURRENT_SCROLL_VALUE,
  currentScrollValue
});
export const checkScrollLimit = (currentScrollLimit: number) => ({
  type: CURRENT_SCROLL_LIMIT,
  currentScrollLimit
});
export const changeGsapState = (currentGsapState: boolean) => ({
  type: GSAP_READY,
  currentGsapState
});
export const splitTextStart = (currentSplitText: string) => ({
  type: SPLIT_TEXT_START,
  currentSplitText
});

// ReturnType으로 interface 중복없이 작성.
type CommonAction =
  | ReturnType<typeof changeLanguage>
  | ReturnType<typeof changeContactState>
  | ReturnType<typeof changeContactStateFalse>
  | ReturnType<typeof changeButtonDelay>
  | ReturnType<typeof changeGnbState>
  | ReturnType<typeof changeSwitchAnimation>
  | ReturnType<typeof changeFilmState>
  | ReturnType<typeof smoothTop>
  | ReturnType<typeof makeSmoothScroll>
  | ReturnType<typeof checkScrollValue>
  | ReturnType<typeof checkScrollLimit>
  | ReturnType<typeof changeGsapState>
  | ReturnType<typeof splitTextStart>;

// state들의 interface 정의.
interface CommonState {
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
  // makeScrollState: 스크롤 재생성이 여부.
  makeScrollState: boolean;
  // currentScrollValue: 스크롤 퍼센트 계산을 위한 현재 값.
  currentScrollValue: number;
  // currentScrollLimit: 스크롤 퍼센트 계산을 위한 max 값.
  currentScrollLimit: number;
  // currentGsapState: 스크롤이 gsap와 연계 되었는지 여부.
  currentGsapState: boolean;
  // currentSplitText: 현재 화면에서 동작할 splitText 트리거.
  currentSplitText: string;
}

const initialState: CommonState = {
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
  currentSplitText: ''
};

const CommonValue = (state: CommonState = initialState, action: CommonAction) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    case CONTACT_STATE:
      return {
        ...state,
        currentContactState: !state.currentContactState
      };
    case CONTACT_STATE_FALSE:
      return {
        ...state,
        currentContactState: action.currentContactState
      };
    case BUTTON_DELAY:
      return {
        ...state,
        currentButtonDelay: action.currentButtonDelay
      };
    case GNB_STATE:
      return {
        ...state,
        currentGnbState: !state.currentGnbState
      };
    case SWITCH_ANIMATION:
      return {
        ...state,
        currentSwitchAnimation: action.currentSwitchAnimation
      };
    case FIRM_STATE:
      return {
        ...state,
        currentFilmState: action.currentFilmState
      };
    case SMOOTH_TOP:
      return {
        ...state,
        currentSmoothTopState: action.currentSmoothTopState
      };
    case MAKE_SCROLL_STATE:
      return {
        ...state,
        makeScrollState: action.makeScrollState
      };
    case CURRENT_SCROLL_VALUE:
      return {
        ...state,
        currentScrollValue: action.currentScrollValue
      };
    case CURRENT_SCROLL_LIMIT:
      return {
        ...state,
        currentScrollLimit: action.currentScrollLimit
      };
    case GSAP_READY:
      return {
        ...state,
        currentGsapState: action.currentGsapState
      };
    case SPLIT_TEXT_START:
      return {
        ...state,
        currentSplitText: action.currentSplitText
      };
    default:
      return state;
  }
}

export default CommonValue