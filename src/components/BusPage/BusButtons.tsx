import Link from 'next/link';

interface BusButtonsProps {
  departure: string;
  arrival: string;
  date: string;
}

function BusButtons({ departure, arrival, date }: BusButtonsProps) {
  return (
    <>
      <button className="w-2/5 h-10 m-1.5 text-xl font-bold rounded-md border border-solid bg-[#0076be] text-white">
        버스
      </button>
      <Link
        className="w-2/5 h-10 m-1.5 pt-1.5 text-xl text-center font-bold rounded-md border hover:border-2 border-solid border-gray-300 hover:border-[#0076be] text-gray-600"
        href={`/info/train?departure=${departure}&arrival=${arrival}&date=${date}`}
      >
        열차
      </Link>
    </>
  );
}

export default BusButtons;
