import { create } from 'zustand';

interface UserState {
  isAuthenticated: boolean;
  userName: string;
  userId: string;
  setLogIn: (userName: string, userId: string) => void;
  setLogOut: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  userName: '',
  userId: '',
  setLogIn: (userName: string, userId: string) => set({ isAuthenticated: true, userName, userId }),
  setLogOut: () => set({ isAuthenticated: false, userName: '', userId: '' })
}));

export default useUserStore;
