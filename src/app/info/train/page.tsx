import Card from '@/components/Card';

export default function TrainPage() {
  const depPlaceId = '서울';
  const arrPlaceId = '부산';
  const people = '성인';
  const peopleCount = '1';
  const date = '2024.07.15.';

  return (
    <div className="w-1000px mx-auto">
      <div className="text-center m-5 text-3xl font-extrabold">승차권 조회</div>
      <div className="text-center mb-2.5 text-base text-gray-600 ">
        {`${depPlaceId} → ${arrPlaceId} | ${people} ${peopleCount} 명 | ${date}`}
      </div>
      <div className="mb-2.5 mx-auto items-center justify-center gap-2.5">
        <button className="w-96 h-10 m-1.5 bg-blue-400 text-white text-xl font-bold rounded border border-solid border-white">
          버스
        </button>
        <button className="w-96 h-10 m-1.5 bg-white text-blue-400 text-xl font-bold rounded border border-solid border-blue-400">
          열차
        </button>
      </div>
      <Card></Card>
    </div>
  );
}
