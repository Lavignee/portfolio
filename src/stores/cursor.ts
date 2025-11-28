import { create } from 'zustand';

export interface CursorState {
  text: string;
  firstClassName: string;
  secondClassName: string;

  setText: (text: string) => void;
  setFirstClassName: (value: string) => void;
  setSecondClassName: (value: string) => void;
  resetCursor: () => void;
}

const initialState: Omit<
  CursorState,
  'setText' | 'setFirstClassName' | 'setSecondClassName' | 'resetCursor'
> = {
  text: '',
  firstClassName: '',
  secondClassName: '',
};

export const useCursorStore = create<CursorState>((set) => ({
  ...initialState,

  setText: (text) => set({ text }),
  setFirstClassName: (value) => set({ firstClassName: value }),
  setSecondClassName: (value) => set({ secondClassName: value }),

  resetCursor: () => set({ ...initialState }),
}));
