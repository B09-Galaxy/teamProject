'use client';

import useBookMark from '@/hooks/useBookMark';
import useUserStore from '@/zustand/user.store';
import MyPageLoading from './MyPageLoading';
import OperationCard from './OperationCard';

function MyPageMain() {
  const { bookMarks, isLoading, isError } = useBookMark();
  const { userId } = useUserStore();

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
        {bookMarks &&
          Object.keys(bookMarks).map(
            (bookMarkKey) =>
              userId === bookMarks[bookMarkKey].userId && (
                <OperationCard key={bookMarks[bookMarkKey].bookMarkId} data={bookMarks[bookMarkKey]} />
              )
          )}
      </div>
    </div>
  );
}

export default MyPageMain;
