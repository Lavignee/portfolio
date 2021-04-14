const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const CONTACT_STATE = 'CONTACT_STATE';
const CONTACT_STATE_FALSE = 'CONTACT_STATE_FALSE';
const CONTACT_BUTTON_DELAY = 'BUTTON_DELAY2';
const BUTTON_DELAY = 'BUTTON_DELAY';
const GNB_STATE = 'GNB_STATE';
const SWITCH_ANIMATION = 'SWITCH_ANIMATION';
const SMOOTH_TOP = 'SMOOTH_TOP';
const SMOOTH_SCROLL_STATE = 'SMOOTH_SCROLL_STATE';
const SMOOTH_SCROLL_STATE_FAST = 'SMOOTH_SCROLL_STATE_FAST';
const MAKE_SCROLL_STATE = 'MAKE_SCROLL_STATE';
const CURRENT_SCROLL_VALUE = 'CURRENT_SCROLL_VALUE';
const CURRENT_SCROLL_LIMIT = 'CURRENT_SCROLL_LIMIT';
const GSAP_READY = 'GSAP_READY';
const SPLIT_TEXT_START = 'SPLIT_TEXT_START';

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
});
export const changeContactState = currentContactState => ({
  type: CONTACT_STATE,
  currentContactState
});
export const changeContactStateFalse = currentContactState => ({
  type: CONTACT_STATE_FALSE,
  currentContactState
});
export const changeContactButtonDelay = currentContactButtonDelay => ({
  type: CONTACT_BUTTON_DELAY,
  currentContactButtonDelay
});
export const changeButtonDelay = currentButtonDelay => ({
  type: BUTTON_DELAY,
  currentButtonDelay
});
export const changeGnbState = currentGnbState => ({
  type: GNB_STATE,
  currentGnbState
});
export const changeSwitchAnimation = currentSwitchAnimation => ({
  type: SWITCH_ANIMATION,
  currentSwitchAnimation
});
export const smoothTop = currentSmoothTopState => ({
  type: SMOOTH_TOP,
  currentSmoothTopState
});
export const changeSmoothScrollState = currentScrollState => ({
  type: SMOOTH_SCROLL_STATE,
  currentScrollState
});
export const changeSmoothScrollStateFast = currentScrollStateFast => ({
  type: SMOOTH_SCROLL_STATE_FAST,
  currentScrollStateFast
});
export const makeSmoothScroll = makeScrollState => ({
  type: MAKE_SCROLL_STATE,
  makeScrollState
});
export const checkScrollValue = currentScrollValue => ({
  type: CURRENT_SCROLL_VALUE,
  currentScrollValue
});
export const checkScrollLimit = currentScrollLimit => ({
  type: CURRENT_SCROLL_LIMIT,
  currentScrollLimit
});
export const changeGsapState = currentGsapState => ({
  type: GSAP_READY,
  currentGsapState
});
export const splitTextStart = currentSplitText => ({
  type: SPLIT_TEXT_START,
  currentSplitText
});

const initialState = {
  language: 'ko',
  currentContactState: false,
  currentContactButtonDelay: false,
  currentButtonDelay: false,
  currentGnbState: false,
  currentSwitchAnimation: false,
  currentSmoothTopState: false,
  currentScrollState: false,
  currentScrollStateFast: false,
  makeScrollState: false,
  currentScrollValue: 0,
  currentScrollLimit: 0,
  currentGsapState: false,
  currentSplitText: ''
};

const CommonValueModule = (state = initialState, action) => {
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

export default CommonValueModule