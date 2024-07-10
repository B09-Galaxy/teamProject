'use client';

import Card from '@/components/TrainPage/Card';
import { useSearchParams } from 'next/navigation';

export default function TrainPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure');
  const arrival = searchparams.get('arrival');
  const date = searchparams.get('date');

  const people = '성인';
  const peopleCount = '1';

  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {`${departure} → ${arrival} | ${people} ${peopleCount} 명 | ${date}`}
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center gap-2.5">
        <button className="w-2/5 h-10 m-1.5 text-xl font-bold  text-gray-600 rounded border border-solid">버스</button>
        <button className="w-2/5 h-10 m-1.5 bg-blue-400 text-white text-xl font-bold rounded border border-solid border-white">
          열차
        </button>
      </div>
      <Card></Card>
    </div>
  );
}
