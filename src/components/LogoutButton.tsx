'use client';

import { createClient } from '@/supabase/supabaseBrowserClient';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-400 text-white-900 hover:text-white-800 rounded transition duration-300"
    >
      로그아웃
    </button>
  );
}
