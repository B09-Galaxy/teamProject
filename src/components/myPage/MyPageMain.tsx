'use client';

import useBookMark from '@/hooks/useBookMark';
import { Tables } from '@/types/supabase';
import MyPageLoading from './MyPageLoading';
import OperationCard from './OperationCard';

type BookMark = Tables<'BookMark'>;

function MyPageMain() {
  const { bookMarks, isLoading, isError } = useBookMark();

  if (isError) return <div>error</div>;
  if (isLoading) return <MyPageLoading />;
  return (
    <div className="border-2 border-[#195DAE] w-full rounded-md p-5">
      <h3
        className="text-2xl text-[#6ab0db] font-bold border-4 border-b-slate-400 *
          border-x-0 border-t-0 mb-5 pb-2"
      >
        즐겨찾기
      </h3>
      <div className="flex flex-col gap-2">
        {bookMarks?.map((data: BookMark) => (
          <OperationCard key={data.bookMarkId} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MyPageMain;
