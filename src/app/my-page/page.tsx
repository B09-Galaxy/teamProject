import OperationCard from '@/components/myPage/OperationCard';
import { createClient } from '@/supabase/server';
import { Tables } from '@/types/supabase';

const fakeUserId = 'edd2629c-82d7-4d2d-9c7f-e692afc978f5';

type BookMark = Tables<'BookMark'>;

async function MyPage() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('BookMark')
    .select()
    .eq('userId', fakeUserId)
    .order('createdAt', { ascending: true });

  if (error) return <div>error</div>;

  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <div className="mt-10 border-4 border-[#195DAE] rounded-md p-5">
        <h1 className="text-2xl font-bold mb-5">마이페이지</h1>
        <p className="text-md font-bold mb-5">userID: {fakeUserId}</p>
        <h3 className="text-md font-bold">즐겨찾기</h3>
        {data?.map((data: BookMark) => (
          <OperationCard key={data.bookMarkId} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MyPage;
