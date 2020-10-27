const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
});

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  language: 'ko'
};

const LanguageModule = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return state;
  }
}

export default LanguageModule