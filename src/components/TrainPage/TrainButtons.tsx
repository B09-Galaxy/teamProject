import Link from 'next/link';

interface TrainButtonsProps {
  departure: string;
  arrival: string;
  date: string;
}

function TrainButtons({ departure, arrival, date }: TrainButtonsProps) {
  return (
    <>
      <Link
        className="w-2/5 h-10 m-1.5 pt-1.5 text-center text-xl font-bold rounded-md border hover:border-2 border-solid border-gray-300 hover:border-[#0076be] text-gray-600"
        href={`/info/bus?departure=${departure}&arrival=${arrival}&date=${date}`}
      >
        버스
      </Link>
      <button className="w-2/5 h-10 m-1.5 text-xl font-bold rounded-md border border-solid bg-[#0076be] text-white">
        열차
      </button>
    </>
  );
}

export default TrainButtons;
