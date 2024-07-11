import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    });

    console.log('OAuth Response Data:', data);
    console.log('OAuth Response Error:', error);

    if (error) {
      console.error('Login Error:', error);
      return NextResponse.json({ error: '로그인 중 에러가 발생했습니다.' }, { status: 500 });
    }

    if (data && data.url) {
      console.log('User data:', data);
      return NextResponse.json({ url: data.url }, { status: 200 });
    } else {
      console.error('Unexpected data format:', data);
      return NextResponse.json({ error: 'Unexpected data format from authentication service.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected Error:', error);
    return NextResponse.json({ error: '로그인 중 예상치 못한 에러가 발생했습니다.' }, { status: 500 });
  }
}
