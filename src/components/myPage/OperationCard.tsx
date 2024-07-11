import busImg from '@/assets/bus.png';
import trainImg from '@/assets/train.png';
import { Tables } from '@/types/supabase';
import Image from 'next/image';

type BookMark = Tables<'BookMark'>;
interface OperationCardProps {
  data: BookMark;
}

function OperationCard({ data }: OperationCardProps) {
  const { departurePlace, arrivalPlace, detailType, departureTime, charge, transportType } = data;
  const year = departureTime.slice(0, 4);
  const month = departureTime.slice(5, 6);
  const day = departureTime.slice(6);

  return (
    <div className="border border-slate-400 flex flex-col">
      <div className="flex flex-row justify-between bg-slate-50 border border-b-slate-400">
        <div className="flex flex-row gap-4 justify-center items-center ml-2">
          <div className="w-7 aspect-auto ">
            <Image className="object-cover" alt={transportType} src={transportType === 'train' ? trainImg : busImg} />
          </div>
          <div className="text-lg font-bold">{detailType}</div>
        </div>
        <button className="text-sm bg-slate-300 w-40 py-3">즐겨찾기 취소</button>
      </div>
      <div className="flex flex-row py-5 px-3 justify-between">
        <div className="flex flex-row gap-6 justify-around ">
          <div className="flex flex-col gap-2">
            <div className="text-[0.7rem]">
              출발 날짜: {year}년 {month}월 {day}일
            </div>
            <div className="flex flex-row gap-6 font-bold text-lg">
              <div>{departurePlace}</div>
              {/* <div className="w-5 aspect-auto ">
            <Image className="object-cover" alt={transportType} src={arrowImg} />
          </div> */}
              <div>{`-->`}</div>
              <div>{arrivalPlace}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end text-sm gap-1">
          <p className="font-bold text-[#0076be] text-2xl">{charge}</p>원
        </div>
      </div>
    </div>
  );
}

export default OperationCard;
