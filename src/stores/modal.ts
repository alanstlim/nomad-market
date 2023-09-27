import { create } from 'zustand';

export type ModalType = {
  title: string;
  message?: string;
  variant?: 'success' | 'error' | 'warning';
  component?: JSX.Element;
  open?: boolean;
};

type State = {
  data: ModalType;
  openModal: (data: ModalType) => void;
  closeModal: () => void;
};

const useModalStore = create<State>((set) => ({
  data: {} as ModalType,
  openModal: (data) => {
    set({ data: { ...data, open: true } });
  },
  closeModal: () => {
    set({ data: { open: false, title: '', message: '' } });
  },
}));

export default useModalStore;
