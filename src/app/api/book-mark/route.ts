import { createClient } from '@/supabase/server';
import { NextResponse } from 'next/server';

const fakeUserId = '';

export const GET = async () => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from('BookMark')
      .select('*')
      .eq('userId', fakeUserId)
      .order('createdAt', { ascending: true });

    if (error)
      return NextResponse.json({ message: 'Failed to fetch supabase data', error, status: false, statusCode: 500 });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
};
