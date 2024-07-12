import { create } from 'zustand';

interface UserState {
  userId: string;
  isAuthenticated: boolean;
  setLogIn: (userId: string) => void;
  setLogOut: () => void;
}

const useUserStore = create<UserState>((set) => ({
  userId: '',
  isAuthenticated: false,
  setLogIn: (userId: string) => set({ userId, isAuthenticated: true }),
  setLogOut: () => set({ userId: '', isAuthenticated: false })
}));

export default useUserStore;
