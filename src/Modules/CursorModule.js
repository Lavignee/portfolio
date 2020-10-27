const CHANGE_TEXT = 'CHANGE_TEXT';

export const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  text: null
};

const CursorModule = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}

export default CursorModule