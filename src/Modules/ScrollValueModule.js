const SCROLL_INTRO = 'SCROLL_INTRO';
const SCROLL_ABOUT = 'SCROLL_ABOUT';
const SCROLL_SKILL = 'SCROLL_SKILL';

export const ScrollIntro = scrollValue => ({
  type: SCROLL_INTRO,
  scrollValue
});
export const ScrollAbout = scrollValue => ({
  type: SCROLL_ABOUT,
  scrollValue
});
export const ScrollSkill = scrollValue => ({
  type: SCROLL_SKILL,
  scrollValue
});

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  scrollValue: ''
};

const ScrollValueModule = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_INTRO:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    case SCROLL_ABOUT:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    case SCROLL_SKILL:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    default:
      return state;
  }
}

export default ScrollValueModule