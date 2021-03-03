const SCROLL_INTRO = 'SCROLL_INTRO';
const SCROLL_INTRO2 = 'SCROLL_INTRO2';
const SCROLL_ABOUT_FIRST = 'SCROLL_ABOUT_FIRST';
const SCROLL_ABOUT_SECOND = 'SCROLL_ABOUT_SECOND';
const SCROLL_ABOUT_THIRD = 'SCROLL_ABOUT_THIRD';
const SCROLL_SKILL = 'SCROLL_SKILL';

export const ScrollIntro = scrollValue => ({
  type: SCROLL_INTRO,
  scrollValue
});
export const ScrollIntro2 = scrollValue => ({
  type: SCROLL_INTRO2,
  scrollValue
});
export const ScrollAboutFirst = scrollValue => ({
  type: SCROLL_ABOUT_FIRST,
  scrollValue
});
export const ScrollAboutSecond = scrollValue => ({
  type: SCROLL_ABOUT_SECOND,
  scrollValue
});
export const ScrollAboutThird = scrollValue => ({
  type: SCROLL_ABOUT_THIRD,
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
    case SCROLL_INTRO2:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    case SCROLL_ABOUT_FIRST:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    case SCROLL_ABOUT_SECOND:
      return {
        ...state,
        scrollValue: action.scrollValue
      };
    case SCROLL_ABOUT_THIRD:
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