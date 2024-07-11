'use client';
import OperationCard from '@/components/myPage/OperationCard';
import SideBar from '@/components/myPage/SideBar';
import useBookMark from '@/hooks/useBookMark';
import { Tables } from '@/types/supabase';

const fakeUserId = 'edd2629c-82d7-4d2d-9c7f-e692afc978f5';

type BookMark = Tables<'BookMark'>;

function MyPage() {
  const { bookMarks, isLoading, isError } = useBookMark();

  if (isError) return <div>error</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className="flex flex-row ml-3 mr-10 mt-5 gap-3">
        <SideBar />
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
      </div>
    </>
  );
}

export default MyPage;
