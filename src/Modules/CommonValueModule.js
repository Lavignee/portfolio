const CONTACT_STATE = 'CONTACT_STATE';
const CONTACT_STATE_FALSE = 'CONTACT_STATE_FALSE';
const CONTACT_DELAY = 'CONTACT_DELAY';
const GNB_STATE = 'GNB_STATE';
const GNB_DELAY = 'GNB_DELAY';

export const changeContactState = currentContactState => ({
  type: CONTACT_STATE,
  currentContactState
});
export const changeContactStateFalse = currentContactState => ({
  type: CONTACT_STATE_FALSE,
  currentContactState
});
export const changeContactDelay = currentContactDelay => ({
  type: CONTACT_DELAY,
  currentContactDelay
});
export const changeGnbState = currentGnbState => ({
  type: GNB_STATE,
  currentGnbState
});
export const changeGnbDelay = currentGnbDelay => ({
  type: GNB_DELAY,
  currentGnbDelay
});

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  currentContactState: false,
  currentContactDelay: false,
  currentGnbState: false,
  currentGnbDelay: false
};

const CommonValueModule = (state = initialState, action) => {
  switch (action.type) {
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
    case CONTACT_DELAY:
      return {
        ...state,
        currentContactDelay: action.currentContactDelay
      };
    case GNB_STATE:
      return {
        ...state,
        currentGnbState: !state.currentGnbState
      };
    case GNB_DELAY:
      return {
        ...state,
        currentGnbDelay: action.currentGnbDelay
      };
    default:
      return state;
  }
}

export default CommonValueModule