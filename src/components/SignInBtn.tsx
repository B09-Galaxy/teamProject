'use client';

import { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { createClient } from '@/supabase/supabaseBrowserClient';
import { Session } from '@supabase/supabase-js';

export default function SignInBtn() {
  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const handleGetSession = async () => {
      const { data, error } = await createClient().auth.getSession();
      setSession(data?.session);
      console.log('data => ', data);
    };
    handleGetSession();
  }, []);

  const user = session?.user;

  return <>{user ? <LogoutButton /> : <LoginButton />}</>;
}
