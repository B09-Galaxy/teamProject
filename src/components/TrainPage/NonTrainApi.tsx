import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/how-traffic.png';
import Link from 'next/link';

function NonTrainApi() {
  return (
    <div className="h-[900px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src={Logo} width={100} height={500} alt="로딩중" />
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-4xl text-[#0076be] ">해당 열차가 없습니다</p>
          <p className="animate-pulse">출발지 또는 도착지를 바꿔주세요</p>
        </div>
        <Link
          href={`/search`}
          className="w-[150px] m-2 p-2 text-center text-xl font-bold rounded-md border hover:bg-[#0076be] text-gray-600 hover:text-white"
        >
          뒤로가기
        </Link>
      </div>
    </div>
  );
}

export default NonTrainApi;
