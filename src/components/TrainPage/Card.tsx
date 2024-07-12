'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CardProps {
  data: {
    adultcharge: string;
    arrplacename: string;
    arrplandtime: number;
    depplacename: string;
    depplandtime: number;
    traingradename: string;
    trainno: number;
  };
}

export default function Card({ data }: CardProps) {
  const { adultcharge, arrplacename, arrplandtime, depplacename, depplandtime, traingradename, trainno } = data;

  const arrTime = String(arrplandtime).slice(8, 10) + ' : ' + String(arrplandtime).slice(10, 12);
  const depTime = String(depplandtime).slice(8, 10) + ' : ' + String(depplandtime).slice(10, 12);
  const charge = adultcharge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <div className="w-[700px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-blue-400">
        <div className="flex flex-row items-center gap-2 w-[100px]">
          <Image
            src="https://yaimg.yanolja.com/joy/train/logo/h16/logo-train-ktx-h-16.png"
            alt="train_logo"
            width="40"
            height="16"
          />
          <p className="text-center text-xs">{`${trainno} 호`}</p>
        </div>
        <div className="flex flex-col w-[300px]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-l font-extrabold">{depTime}</h1>
            <h3 className="text-xs text-gray-400">━━━━━━━━━</h3>
            <h1 className="text-l font-extrabold">{arrTime}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-xs">{depplacename}</h3>
            <h3 className="text-xs">{arrplacename}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[200px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto">{`${charge}원`}</h3>
          <button className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-blue-400 border-gray-6 rounded-md">
            즐겨찾기
          </button>
        </div>
      </div>
    </>
  );
}
