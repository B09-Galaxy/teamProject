import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import LordingImage from '@/assets/how-traffic.png';

function LoadingPage() {
  return (
    <div className="h-[900px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src={LordingImage} width={100} height={500} alt="로딩중" />
        <div className="flex items-center gap-2">
          <p className="font-bold text-gray-700">데이터를 가져오는 중입니다.</p>
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
