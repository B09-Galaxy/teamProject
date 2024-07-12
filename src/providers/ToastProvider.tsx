'use client';

import 'react-toastify/ReactToastify.css';
import '../app/globals.css';
import { ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer position="top-center" limit={1} closeButton={true} />
    </>
  );
}
