const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE' as const;
const CONTACT_STATE = 'CONTACT_STATE' as const;
const CONTACT_STATE_FALSE = 'CONTACT_STATE_FALSE' as const;
const CONTACT_BUTTON_DELAY = 'BUTTON_DELAY2' as const;
const BUTTON_DELAY = 'BUTTON_DELAY' as const;
const GNB_STATE = 'GNB_STATE' as const;
const SWITCH_ANIMATION = 'SWITCH_ANIMATION' as const;
const FIRM_STATE = 'FIRM_STATE' as const;
const SMOOTH_TOP = 'SMOOTH_TOP' as const;
const SMOOTH_SCROLL_STATE = 'SMOOTH_SCROLL_STATE' as const;
const SMOOTH_SCROLL_STATE_FAST = 'SMOOTH_SCROLL_STATE_FAST' as const;
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
export const changeContactButtonDelay = (currentContactButtonDelay: boolean) => ({
  type: CONTACT_BUTTON_DELAY,
  currentContactButtonDelay
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
export const changeSmoothScrollState = (currentScrollState: boolean) => ({
  type: SMOOTH_SCROLL_STATE,
  currentScrollState
});
export const changeSmoothScrollStateFast = (currentScrollStateFast: boolean) => ({
  type: SMOOTH_SCROLL_STATE_FAST,
  currentScrollStateFast
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

type CommonAction =
  | ReturnType<typeof changeLanguage>
  | ReturnType<typeof changeContactState>
  | ReturnType<typeof changeContactStateFalse>
  | ReturnType<typeof changeContactButtonDelay>
  | ReturnType<typeof changeButtonDelay>
  | ReturnType<typeof changeGnbState>
  | ReturnType<typeof changeSwitchAnimation>
  | ReturnType<typeof changeFilmState>
  | ReturnType<typeof smoothTop>
  | ReturnType<typeof changeSmoothScrollState>
  | ReturnType<typeof changeSmoothScrollStateFast>
  | ReturnType<typeof makeSmoothScroll>
  | ReturnType<typeof checkScrollValue>
  | ReturnType<typeof checkScrollLimit>
  | ReturnType<typeof changeGsapState>
  | ReturnType<typeof splitTextStart>;

type CommonState = {
  language: string;
  currentContactState: boolean;
  currentContactButtonDelay: boolean;
  currentButtonDelay: boolean;
  currentGnbState: boolean;
  currentSwitchAnimation: boolean;
  currentFilmState: boolean;
  currentSmoothTopState: boolean;
  currentScrollState: boolean;
  currentScrollStateFast: boolean;
  makeScrollState: boolean;
  currentScrollValue: number;
  currentScrollLimit: number;
  currentGsapState: boolean;
  currentSplitText: string;
}

const initialState: CommonState = {
  language: 'ko',
  currentContactState: false,
  currentContactButtonDelay: false,
  currentButtonDelay: false,
  currentGnbState: false,
  currentSwitchAnimation: false,
  currentFilmState: false,
  currentSmoothTopState: false,
  currentScrollState: false,
  currentScrollStateFast: false,
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
    case CONTACT_BUTTON_DELAY:
      return {
        ...state,
        currentContactButtonDelay: action.currentContactButtonDelay
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
    case SMOOTH_SCROLL_STATE:
      return {
        ...state,
        currentScrollState: action.currentScrollState
      };
    case SMOOTH_SCROLL_STATE_FAST:
      return {
        ...state,
        currentScrollStateFast: action.currentScrollStateFast
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