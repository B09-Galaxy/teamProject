'use client';

import useBookMark from '@/hooks/useBookMark';
import useUserStore from '@/zustand/user.store';
import { useRouter } from 'next/navigation';

interface CardProps {
  data: TBusInfo;
}

function BusCard({ data }: CardProps) {
  const { charge, arrPlaceNm, arrPlandTime, depPlaceNm, depPlandTime, gradeNm } = data;
  const id = arrPlaceNm + arrPlandTime + gradeNm; ;
  const { bookMarks, postBookMark, delBookMark } = useBookMark();
  const arrHour = String(arrPlandTime).slice(8, 10);
  const arrMinute = String(arrPlandTime).slice(10, 12);
  const depHour = String(depPlandTime).slice(8, 10);
  const depMinute = String(depPlandTime).slice(10, 12);
  const arrTimeSupabase = String(arrPlandTime).slice(0, 8);
  const depTimeSupabase = String(depPlandTime).slice(0, 8);
  const Charge = charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const curBookMark = bookMarks && bookMarks[id];
  const isExist = curBookMark;
  const { isAuthenticated, userId } = useUserStore();
  const isUser = curBookMark && curBookMark.userId === userId;
  const router = useRouter();

  const handleBookMarkClick = async () => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      const bookMarkObj = {
        bookMarkId: id,
        departurePlace: depPlaceNm,
        arrivalPlace: arrPlaceNm,
        departureTime: depTimeSupabase,
        arrivalTime: arrTimeSupabase,
        charge: Number(charge),
        detailType: gradeNm,
        transportType: 'train',
        userId
      };

      await postBookMark(bookMarkObj);
    }
  };

  const handleDelClick = async () => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {  
      await delBookMark(id);
    }
  };

  return (
    <>
      <div className="pl-10 pr-10 w-[650px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-[#0076be]">
        <div className="flex flex-col w-[280px]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-l font-extrabold">
              {depHour} : {depMinute}
            </h1>
            <h3 className="text-xs text-gray-400">━━━━━━━</h3>
            <h1 className="text-l font-extrabold">
              {arrHour} : {arrMinute}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-xs">{depPlaceNm}</h3>
            <h3 className="text-xs">{arrPlaceNm}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[150px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto text-[#0076be]">
            {charge} <span className="text-sm font-bold text-black">원</span>
          </h3>
          <button
            className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-[#0076be] text-black hover:text-white border-gray-6 rounded-md"
            onClick={isExist && isUser ? handleDelClick : handleBookMarkClick}
          >
            {isExist && isUser ? '즐겨찾기취소' : '즐겨찾기'}
          </button>
        </div>
      </div>
    </>
  );
}

export default BusCard;
