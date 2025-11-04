import { atom } from 'recoil';

export interface UIState {
  sidebarOpen: boolean;
  isLoading: boolean;
}

export const uiState = atom<UIState>({
  key: 'uiState',
  default: {
    sidebarOpen: true,
    isLoading: false,
  },
});