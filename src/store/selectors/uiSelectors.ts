import { selector } from 'recoil';
import { uiState } from '../atoms/uiAtom';

export const sidebarOpenSelector = selector({
  key: 'sidebarOpenSelector',
  get: ({ get }) => {
    const ui = get(uiState);
    return ui.sidebarOpen;
  },
});

export const isLoadingSelector = selector({
  key: 'isLoadingSelector',
  get: ({ get }) => {
    const ui = get(uiState);
    return ui.isLoading;
  },
});