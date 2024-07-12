'use client';

import useBookMark from '@/hooks/useBookMark';
import Image from 'next/image';
import { useId } from 'react';

interface CardProps {
  data: TTrainInfo;
}

const fakeUserId = 'edd2629c-82d7-4d2d-9c7f-e692afc978f5';

export default function Card({ data }: CardProps) {
  const { adultcharge, arrplacename, arrplandtime, depplacename, depplandtime, trainno, traingradename } = data;
  const { bookMarks, postBookMark, delBookMark } = useBookMark();
  const arrHour = String(arrplandtime).slice(8, 10);
  const arrMinute = String(arrplandtime).slice(10, 12);
  const depHour = String(depplandtime).slice(8, 10);
  const depMinute = String(depplandtime).slice(10, 12);
  const bookMarkId = useId();
  const arrTimeSupabase = String(arrplandtime).slice(0, 8);
  const depTimeSupabase = String(depplandtime).slice(0, 8);
  const charge = adultcharge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const isExist = bookMarks && bookMarks[bookMarkId];

  const handleBookMarkClick = async () => {
    const bookMarkObj = {
      bookMarkId,
      departurePlace: depplacename,
      arrivalPlace: arrplacename,
      departureTime: depTimeSupabase,
      arrivalTime: arrTimeSupabase,
      charge: Number(adultcharge),
      detailType: traingradename,
      transportType: 'train',
      userId: fakeUserId
    };
    await postBookMark(bookMarkObj);
  };

  const handleDelClick = async () => {
    await delBookMark(bookMarkId);
  };

  return (
    <>
      <div className="w-[650px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-[#0076be]">
        <div className="flex flex-row items-center gap-2 w-[100px]">
          <Image
            src="https://yaimg.yanolja.com/joy/train/logo/h16/logo-train-ktx-h-16.png"
            alt="train_logo"
            width="40"
            height="16"
          />
          <p className="text-center text-xs">{`${trainno} 호`}</p>
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
            <h3 className="text-xs">{depplacename}</h3>
            <h3 className="text-xs">{arrplacename}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[150px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto text-[#0076be]">
            {charge} <span className="text-sm font-bold text-black">원</span>
          </h3>
          <button
            className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-blue-400 border-gray-6 rounded-md"
            onClick={isExist ? handleDelClick : handleBookMarkClick}
          >
            {isExist ? '즐겨찾기취소' : '즐겨찾기'}
          </button>
        </div>
      </div>
    </>
  );
}
