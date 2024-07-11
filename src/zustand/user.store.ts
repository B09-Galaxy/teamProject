import { create } from 'zustand';

interface TUserStore{
  userId:string;
  isAuthenticated:boolean;
  setLogIn: () => void;
  setLogOut: () => void;
}

const useUserStore = create<TUserStore>((set) => ({
  userId: "",
  isAuthenticated: false,
  setLogIn: () => {},
  setLogOut: () => {}
}));

export default useUserStore;
