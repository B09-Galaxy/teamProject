`use client`;

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Card() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure');
  const arrival = searchparams.get('arrival');

  const trainNumber = '0001';
  const depTime = '00:00';
  const costTime = '03:00';
  const arrTime = '24:00';
  const costTicket = '50000';

  return (
    <>
      <div className="w-[700px] m-5 mx-auto p-2.5 flex justify-between gap-5 border-solid border-blue-400 border-2 rounded">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="https://yaimg.yanolja.com/joy/train/logo/h16/logo-train-ktx-h-16.png"
            alt="train_logo"
            width="40"
            height="16"
          />
          <p>{trainNumber}</p>
        </div>
        <div className="flex flex-col w-[400px]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-xl font-extrabold">{depTime}</h1>
            <h3 className="text-xs ">{`${costTime} 소요`}</h3>
            <h1 className="text-xl font-extrabold">{arrTime}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-xs">{departure}</h3>
            <h3 className="text-xs">{arrival}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-extrabold">{`총 ${costTicket}원`}</p>
        </div>
      </div>
    </>
  );
}
