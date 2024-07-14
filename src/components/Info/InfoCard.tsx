'use client';

import useBookMark from '@/hooks/useBookMark';
import useUserStore from '@/zustand/user.store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  charge: string;
  arrPlace: string;
  arrTime: number;
  depPlace: string;
  depTime: number;
  grade: string;
  type?: number;
  transportType: string;
}

function InfoCard({ charge, arrPlace, arrTime, depPlace, depTime, grade, type, transportType }: CardProps) {
  const id = arrPlace + arrTime + +depPlace + depTime + grade + type;
  const { bookMarks, postBookMark, delBookMark } = useBookMark();
  const arrHour = String(arrTime).slice(8, 10);
  const arrMinute = String(arrTime).slice(10, 12);
  const depHour = String(depTime).slice(8, 10);
  const depMinute = String(depTime).slice(10, 12);
  const arrTimeSupabase = String(arrTime).slice(0, 8);
  const depTimeSupabase = String(depTime).slice(0, 8);
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
        departurePlace: depPlace,
        arrivalPlace: arrPlace,
        departureTime: depTimeSupabase,
        arrivalTime: arrTimeSupabase,
        charge: Number(charge),
        detailType: grade,
        transportType,
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
      <div className="w-[650px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-[#0076be]">
        <div className="flex flex-row items-center gap-2 w-[100px]">
          {transportType === 'train' && (
            <>
              <Image
                src="https://yaimg.yanolja.com/joy/train/logo/h16/logo-train-ktx-h-16.png"
                alt="train_logo"
                width="40"
                height="16"
              />
              <p className="text-center text-xs">{`${type} 호`}</p>
            </>
          )}
        </div>

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
            <h3 className="text-xs">{depPlace}</h3>
            <h3 className="text-xs">{arrPlace}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[150px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto text-[#0076be]">
            {Charge} <span className="text-sm font-bold text-black">원</span>
          </h3>

          <button
            className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-blue-400 border-gray-6 rounded-md"
            onClick={isExist && isUser ? handleDelClick : handleBookMarkClick}
          >
            {isExist && isUser ? '즐겨찾기취소' : '즐겨찾기'}
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
