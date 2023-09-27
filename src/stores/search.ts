import { create } from 'zustand';

type State = {
  text: string;
  setText: (text: string) => void;
};

const useSearchStore = create<State>((set) => ({
  text: '',
  setText: (text) => {
    set({ text });
  },
}));

export default useSearchStore;
