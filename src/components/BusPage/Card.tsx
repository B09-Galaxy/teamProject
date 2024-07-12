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

  const arrHour = String(arrPlandTime).slice(8, 10);
  const arrMinute = String(arrPlandTime).slice(10, 12);
  const depHour = String(depPlandTime).slice(8, 10);
  const depMinute = String(depPlandTime).slice(10, 12);
  const Charge = charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <div className="pl-10 pr-10 w-[650px] mb-2 mx-auto p-2.5 flex justify-between gap-5 border-solid border rounded-md border-gray-100 hover:border-[#0076be]">
        <div className="flex flex-col w-[280px]">
          <div className="flex flex-row justify-between items-end">
            <h1 className="text-l font-extrabold">
              {depHour} : {depMinute}
            </h1>
            <h3 className="text-xs text-gray-400">━━━━━━━</h3>
            <h1 className="text-l font-extrabold">
              {arrHour} : {arrMinute}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <h3 className="text-xs">{depPlaceNm}</h3>
            <h3 className="text-xs">{arrPlaceNm}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2.5 w-[150px]">
          <h3 className="text-sm font-bold w-[100px] mx-auto text-[#0076be]">
            {charge} <span className="text-sm font-bold text-black">원</span>
          </h3>
          <button className="text-sm w-[100px] p-1 mx-auto bg-white hover:bg-[#0076be] text-black hover:text-white border-gray-6 rounded-md">
            즐겨찾기
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
