'use client';

import { createClient } from '@/supabase/supabaseBrowserClient';
import Link from 'next/link';

export default function LoginButton(props: { nextUrl?: string }) {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${props.nextUrl || ''}`
      }
    });
  };
  return (
    <Link
      href={'/login'}
      // onClick={handleLogin}
      className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-400 text-white-900 hover:text-white-800 rounded transition duration-300"
    >
      로그인
    </Link>
  );
}
