'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/supabase/supabaseBrowserClient';
import useUserStore from '../zustand/user.store';
import { useRouter } from 'next/navigation';
import { showToast } from '@/utils/toastHelper';

function SignInBtn() {
  const { isAuthenticated, setLogIn, setLogOut } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const handleGetSession = async () => {
      try {
        const { data, error } = await createClient().auth.getSession();
        if (error) throw error;

        if (data?.session) {
          const userName = data.session.user.user_metadata.name;
          const userId = data.session.user.id;
          setLogIn(userName, userId);
        } else {
          setLogOut();
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        showToast('error', '세션을 가져오는 중 오류가 발생했습니다.');
        setLogOut();
      }
    };
    handleGetSession();
  }, [setLogIn, setLogOut]);

  const handleLogout = async () => {
    try {
      const { error } = await createClient().auth.signOut();
      if (error) throw error;

      setLogOut();
      showToast('success', '로그아웃 되었습니다.');
      router.refresh();
    } catch (error) {
      console.error('Error during logout:', error);
      showToast('error', '로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-400 text-white-900 hover:text-white-800 rounded transition duration-300"
        >
          로그아웃
        </button>
      ) : (
        <Link
          href="/login"
          scroll={false}
          className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-400 text-white-900 hover:text-white-800 rounded transition duration-300"
        >
          로그인
        </Link>
      )}
    </>
  );
}

export default SignInBtn;
