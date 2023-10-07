import { create } from 'zustand';

type State = {
  showLoading: boolean;
  setLoading: (show: boolean) => void;
};

const useLoadingStore = create<State>((set) => ({
  showLoading: false,
  setLoading: (show) => {
    set({ showLoading: show });
  },
}));

export default useLoadingStore;
