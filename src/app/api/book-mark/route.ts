import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { URL } from 'url';

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
    return NextResponse.json({ message: 'Failed to fetch data', error, status: false, statusCode: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const bookMarkId = Number(searchParams.get('bookMarkId'));
  const supabase = createClient();

  try {
    const { error } = await supabase.from('BookMark').delete().eq('bookMarkId', bookMarkId);

    if (error)
      return NextResponse.json({ message: 'Failed to delete supabase data', error, status: false, statusCode: 500 });
    return NextResponse.json({ message: 'Success to delete data', error, status: false, statusCode: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete data', error, status: false, statusCode: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const bookMark = JSON.parse(searchParams.get('bookMark')!);
  const supabase = createClient();

  try {
    const { error } = await supabase.from('BookMark').insert(bookMark);

    if (error)
      return NextResponse.json({ message: 'Failed to insert supabase data', error, status: false, statusCode: 500 });
    return NextResponse.json({ message: 'Success to insert data', error, status: false, statusCode: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to post data', error, status: false, statusCode: 500 });
  }
};
