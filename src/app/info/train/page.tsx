'use client';

import api from '@/api/api';
import TrainAPI from '@/api/trainApi';
import Card from '@/components/TrainPage/Card';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import trainStation from '@/assets/trainStation.json';

export default function TrainPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure');
  const arrival = searchparams.get('arrival');
  const date = searchparams.get('date');

  const people = '성인';
  const peopleCount = '1';

  const pageNo = '1';
  const numOfRows = '20';
  const depPlandTime = '20240715';
  const depPlaceId = 'NAT010000'; //서울특별시
  const arrPlaceId = 'NAT014445';

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTrainApi = async () => {
      const response = await api.train.getTrainData({ pageNo, numOfRows, depPlaceId, arrPlaceId, depPlandTime });
      setData(response);
      console.log(response);
    };
    const data = fetchTrainApi();
  }, []);

  console.log(trainStation[departure]);
  console.log(trainStation['서울특별시']);
  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex flex-col m-5 mx-auto gap-2.5">
        <h1 className="text-center text-2xl font-extrabold">승차권 조회</h1>
        <p className="text-center text-sm text-gray-600">
          {`${departure} → ${arrival} | ${people} ${peopleCount} 명 | ${date}`}
        </p>
      </div>
      <div className="w-4/5 mb-2.5 mx-auto flex flex-row justify-center gap-2.5">
        <button className="w-2/5 h-10 m-1.5 text-xl font-bold text-gray-600 rounded border border-solid">버스</button>
        <button className="w-2/5 h-10 m-1.5 bg-blue-400 text-white text-xl font-bold rounded border border-solid border-white">
          열차
        </button>
      </div>
      <Card></Card>
    </div>
  );
}
