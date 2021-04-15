const CHANGE_TEXT = 'CHANGE_TEXT';
const CHANGE_FIRST_CLASS_NAME = 'CHANGE_FIRST_CLASS_NAME'
const CHANGE_SECOND_CLASS_NAME = 'CHANGE_SECOND_CLASS_NAME'

export const changeText = text => ({
  type: CHANGE_TEXT,
  text
});
export const changeFirstClassName = firstClassName => ({
  type: CHANGE_FIRST_CLASS_NAME,
  firstClassName
});
export const changeSecondClassName = secondClassName => ({
  type: CHANGE_SECOND_CLASS_NAME,
  secondClassName
});

const initialState = {
  text: null,
  firstClassName: '',
  secondClassName: ''
};

const Cursor = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case CHANGE_FIRST_CLASS_NAME:
      return {
        ...state,
        firstClassName: action.firstClassName
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

export default Cursor