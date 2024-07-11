import { create } from 'zustand';

const useUserStore = create((set) => ({
  userId: '',
  isAuthenticated: false,
  setLogIn: () => {},
  setLogOut: () => {}
}));

export default useUserStore;
