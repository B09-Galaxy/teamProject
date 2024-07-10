'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <button onClick={closeModal} className="float-right text-gray-600 hover:text-black">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="flex flex-col items-center">
          <Image src="/how-traffic.png" alt="야교통어때 로고" width={300} height={300} />
          <div>
            <Image
              src="/kakao-login.png"
              alt="카카오 로그인 이미지"
              width={210}
              height={210}
              className="cursor-pointer hover:shadow-lg"
            />
          </div>
          <br />
          <div className="flex items-center justify-center w-52 h-14 bg-white rounded cursor-pointer shadow hover:shadow-lg text-sm">
            <Image src="/google-icon.png" alt="구글 로고 이미지" width={20} height={20} className=" mr-5" />
            <span className="text-black-54 ">Google 계정으로 로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
