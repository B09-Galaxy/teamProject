'use client';

import api from '@/api/api';
import Card from '@/components/TrainPage/Card';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import trainStation from '@/assets/trainStation.json';
import Link from 'next/link';

export default function TrainPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure') as string;
  const arrival = searchparams.get('arrival') as string;
  const date = searchparams.get('date') as string;

  const pageNo = '1';
  const numOfRows = '100';
  const depPlandTime = date;
  const depPlaceId = (trainStation as TrainStationType)[departure];
  const arrPlaceId = (trainStation as TrainStationType)[arrival];
  const people = '성인';
  const peopleCount = '1';

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchTrainApi = async () => {
      const response = await api.train.getTrainData({ pageNo, numOfRows, depPlaceId, arrPlaceId, depPlandTime });
      setDatas(response.data.items.item);
    };
    fetchTrainApi();
  }, []);

  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {`${departure} → ${arrival} | ${people} ${peopleCount} 명 | ${date}`}
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center gap-2.5">
        <Link
          className="w-2/5 h-10 m-1.5 pt-1.5 text-center text-xl font-bold rounded-md border border-solid text-gray-600"
          href={`/info/bus?departure=${departure}&arrival=${arrival}&date=${date}`}
        >
          버스
        </Link>
        <button className="w-2/5 h-10 m-1.5 text-xl font-bold rounded-md border border-solid bg-blue-400 text-white">
          열차
        </button>
      </div>
      {datas.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
}
