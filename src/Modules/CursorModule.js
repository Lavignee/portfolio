const CHANGE_TEXT = 'CHANGE_TEXT';
const CHANGE_CLASS_NAME = 'CHANGE_CLASS_NAME'
const CHANGE_SECOND_CLASS_NAME = 'CHANGE_SECOND_CLASS_NAME'

export const changeText = text => ({
  type: CHANGE_TEXT,
  text
});
export const changeClassName = className => ({
  type: CHANGE_CLASS_NAME,
  className
});
export const changeSecondClassName = secondClassName => ({
  type: CHANGE_SECOND_CLASS_NAME,
  secondClassName
});

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  text: null,
  className: '',
  secondClassName: ''
};

const CursorModule = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case CHANGE_CLASS_NAME:
      return {
        ...state,
        className: action.className
      };
    case CHANGE_SECOND_CLASS_NAME:
      return {
        ...state,
        secondClassName: action.secondClassName
      };
    default:
      return state;
  }
}

export default CursorModule