import { createClient } from '@/supabase/supabaseServerClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabase = createClient();

  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    });
    console.log('OAuth Response Data:', authData);
    console.log('OAuth Response Error:', authError);
    if (authError) {
      console.error('OAuth Response Error:', authError);
      return NextResponse.json({ error: '로그인 중 에러가 발생했습니다.' }, { status: 500 });
    }

    if (authData.url) {
      return NextResponse.redirect(authData.url);
    }

    return NextResponse.json({ error: 'OAuth URL이 제공되지 않았습니다.' }, { status: 500 });
  } catch (error) {
    console.error('Unexpected Error:', error);
    return NextResponse.json({ error: '예기치 않은 에러가 발생했습니다.' }, { status: 500 });
  }
}
