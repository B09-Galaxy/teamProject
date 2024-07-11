'use client';
import OperationCard from '@/components/myPage/OperationCard';
import useBookMark from '@/hooks/useBookMark';
import { Tables } from '@/types/supabase';

const fakeUserId = 'edd2629c-82d7-4d2d-9c7f-e692afc978f5';

type BookMark = Tables<'BookMark'>;

function MyPage() {
  const { bookMarks, isLoading, isError } = useBookMark();

  if (isError) return <div>error</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <div className="mt-10 border-4 border-[#195DAE] rounded-md p-5">
        <h1 className="text-2xl font-bold mb-5">마이페이지</h1>
        <p className="text-md font-bold mb-5">userID: {fakeUserId}</p>
        <h3 className="text-md font-bold">즐겨찾기</h3>
        <div className="flex flex-col gap-2">
          {bookMarks?.map((data: BookMark) => (
            <OperationCard key={data.bookMarkId} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
