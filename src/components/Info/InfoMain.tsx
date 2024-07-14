'use client';

import { PropsWithChildren } from 'react';
import BusButtons from '../BusPage/BusButtons';
import TrainButtons from '../TrainPage/TrainButtons';

interface InfoPageProps {
  departure: string;
  arrival: string;
  date: string;
  PEOPLE: string;
  PEOPLE_COUNT: string;
  depYear: string;
  depMonth: string;
  depDay: string;
  type: string;
}

function InfoMain({
  departure,
  arrival,
  date,
  PEOPLE,
  PEOPLE_COUNT,
  depYear,
  depMonth,
  depDay,
  type,
  children
}: PropsWithChildren<InfoPageProps>) {
  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {departure} → {arrival} | {PEOPLE} {PEOPLE_COUNT}명 | {depYear}년 {depMonth}월 {depDay}일
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center">
        {type === 'bus' ? (
          <BusButtons departure={departure} arrival={arrival} date={date} />
        ) : (
          <TrainButtons departure={departure} arrival={arrival} date={date} />
        )}
      </div>
        {children}
    </div>
  );
}

export default InfoMain;
