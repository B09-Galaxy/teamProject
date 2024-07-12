'use client';

import busStation from '@/assets/busStation.json';
import Card from '@/components/BusPage/Card';
import useBus from '@/hooks/useBus';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function BusPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure') as string;
  const arrival = searchparams.get('arrival') as string;
  const date = searchparams.get('date') as string;

  const PAGE_NO = '1';
  const NUM_OF_ROWS = '100';
  const PEOPLE = '성인';
  const PEOPLE_COUNT = '1';
  const depPlandTime = date;
  const depTerminalId = (busStation as BusStationType)[departure];
  const arrTerminalId = (busStation as BusStationType)[arrival];
  const params = {
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
    depTerminalId,
    arrTerminalId,
    depPlandTime
  };
  const { datas }: { datas: TBusInfo[] } = useBus(params);

  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {`${departure} → ${arrival} | ${PEOPLE} ${PEOPLE_COUNT} 명 | ${date}`}
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center gap-2.5">
        <button className="w-2/5 h-10 m-1.5 text-xl font-bold rounded-md border border-solid bg-blue-400 text-white">
          버스
        </button>
        <Link
          className="w-2/5 h-10 m-1.5 pt-1.5 text-center text-xl font-bold rounded-md border border-solid text-gray-600"
          href={`/info/train?departure=${departure}&arrival=${arrival}&date=${date}`}
        >
          열차
        </Link>
      </div>
      {datas && datas.map((data, index) => <Card key={index} data={data} />)}
    </div>
  );
}

export default BusPage;
