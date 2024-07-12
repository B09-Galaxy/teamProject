'use client';

import trainStation from '@/assets/trainStation.json';
import LoadingPage from '@/components/common/LoadingPage';
import Card from '@/components/TrainPage/Card';
import NonTrainApi from '@/components/TrainPage/NonTrainApi';
import useTrain from '@/hooks/useTrain';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function TrainPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure') as string;
  const arrival = searchparams.get('arrival') as string;
  const date = searchparams.get('date') as string;

  const PAGE_NO = '1';
  const NUM_OF_ROWS = '100';
  const PEOPLE = '성인';
  const PEOPLE_COUNT = '1';
  const depPlandTime = date;
  const depPlaceId = (trainStation as TrainStationType)[departure];
  const arrPlaceId = (trainStation as TrainStationType)[arrival];
  const depYear =  date && date.slice(0, 4);
  const depMonth = date && date.slice(4, 6);
  const depDay = date && date.slice(6);
  const params = {
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
    depPlaceId,
    arrPlaceId,
    depPlandTime
  };
  const { datas, isLoading }: { datas: TTrainInfo[]; isLoading: boolean } = useTrain(params);
  console.log(datas);
  if (isLoading) return <LoadingPage />;
  if (!datas) return <NonTrainApi />;

  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {departure} → {arrival} | {PEOPLE} {PEOPLE_COUNT}명 | {depYear}년 {depMonth}월 {depDay}일
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center gap-2.5">
        <Link
          className="w-2/5 h-10 m-1.5 pt-1.5 text-center text-xl font-bold rounded-md border hover:border-2 border-solid border-gray-300 hover:border-[#0076be] text-gray-600"
          href={`/info/bus?departure=${departure}&arrival=${arrival}&date=${date}`}
        >
          버스
        </Link>
        <button className="w-2/5 h-10 m-1.5 text-xl font-bold rounded-md border border-solid bg-[#0076be] text-white">
          열차
        </button>
      </div>
      {datas && datas.map((data, index) => <Card key={index} data={data} />)}
    </div>
  );
}

export default TrainPage;
