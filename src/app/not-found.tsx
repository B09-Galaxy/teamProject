'use client';

import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-2">404 Not Found</h1>
      <p>존재하지 않는 페이지입니다.</p>
      <button onClick={handleGoBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        뒤로가기
      </button>
    </div>
  );
}

export default NotFound;
