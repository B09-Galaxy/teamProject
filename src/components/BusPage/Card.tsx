'use client';

interface CardProps {
  data: {
    charge: string;
    arrPlaceNm: string;
    arrPlandTime: number;
    depPlaceNm: string;
    depPlandTime: number;
  };
}

function Card({ data }: CardProps) {
  const { charge, arrPlaceNm, arrPlandTime, depPlaceNm, depPlandTime } = data;

  const arrTime = String(arrPlandTime).slice(8, 10) + ' : ' + String(arrPlandTime).slice(10, 12);
  const depTime = String(depPlandTime).slice(8, 10) + ' : ' + String(depPlandTime).slice(10, 12);
  const Charge = charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <div className="pl-10 pr-10 w-[700px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-blue-400">
        <div className="flex flex-col w-[300px]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-l font-extrabold">{depTime}</h1>
            <h3 className="text-xs text-gray-400">━━━━━━━━━</h3>
            <h1 className="text-l font-extrabold">{arrTime}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-xs">{depPlaceNm}</h3>
            <h3 className="text-xs">{arrPlaceNm}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[200px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto">{`${Charge}원`}</h3>
          <button className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-blue-400 border-gray-6 rounded-md">
            즐겨찾기
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
