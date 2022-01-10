const CHANGE_TEXT = 'CHANGE_TEXT' as const;;
const CHANGE_FIRST_CLASS_NAME = 'CHANGE_FIRST_CLASS_NAME' as const;
const CHANGE_SECOND_CLASS_NAME = 'CHANGE_SECOND_CLASS_NAME' as const;

export const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  text
});
export const changeFirstClassName = (firstClassName: string) => ({
  type: CHANGE_FIRST_CLASS_NAME,
  firstClassName
});
export const changeSecondClassName = (secondClassName: string) => ({
  type: CHANGE_SECOND_CLASS_NAME,
  secondClassName
});

type CursorAction =
  | ReturnType<typeof changeText>
  | ReturnType<typeof changeFirstClassName>
  | ReturnType<typeof changeSecondClassName>;

type CursorState = {
  text: string;
  firstClassName: string;
  secondClassName: string;
}

const initialState: CursorState = {
  text: '',
  firstClassName: '',
  secondClassName: ''
};

const Cursor = (state: CursorState = initialState, action: CursorAction) => {
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