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

// ReturnType으로 interface 중복없이 작성.
type CursorAction =
  | ReturnType<typeof changeText>
  | ReturnType<typeof changeFirstClassName>
  | ReturnType<typeof changeSecondClassName>;

// state들의 interface 정의.
interface CursorState {
  // 커서에 출력할 텍스트
  text: string;
  // 커서 변화를 위한 스타일
  firstClassName: string;
  // 커서 변화를 위한 추가 스타일
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