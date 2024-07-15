import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import Logo from '@/assets/how-traffic.png';
import Link from 'next/link';

function LoadingPage() {
  return (
    <div className="h-[900px] flex items-center justify-center">
      <div className="h-[400px] flex flex-col items-center justify-center gap-4">
        <Image src={Logo} width={100} height={500} alt="로딩중" />
        <div className="flex items-center gap-2">
          <p className="font-bold text-3xl text-gray-700">Loading...</p>
          <LoadingSpinner />
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

export default LoadingPage;
