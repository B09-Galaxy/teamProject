'use client';

import { showToast } from '@/utils/toastHelper';
import useUserStore from '@/zustand/user.store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SignInBtn from './SignInBtn';
import ThreeBarsSvg from './ThreeBarsSvg';
import UserCircleSvg from './UserCircleSvg';
import XMarkSvg from './XMarkSvg';

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);
  const { userName, isAuthenticated } = useUserStore();

  useEffect(() => {
    if (isAuthenticated && !isToastShown) {
      showToast('info', `${userName}님, 환영합니다! 👋`);
      setIsToastShown(true);
    }
  }, [isAuthenticated, isToastShown, userName]);

  return (
    <nav className="bg-gray-100">
      <div className=" mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴1 */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700">
                <Image
                  src="/train-512.png"
                  alt="홈페이지 로고"
                  width={50}
                  height={50}
                  className="h-5 w-5 mr-2 text-blue-400"
                />
                <span className="font-bold">Home</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">
                고객센터
              </Link>
              <Link href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 font-bold">
                이벤트
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated && <p>{userName}님, 안녕하세요! 👋</p>}
            {/* 마이페이지 아이콘 */}
            <Link href="/my-page">
              <UserCircleSvg />
            </Link>
            <SignInBtn />
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <Link href="#">
              <UserCircleSvg />
            </Link>
            <SignInBtn />
            <button onClick={() => setMenuToggle(!menuToggle)}>{menuToggle ? <XMarkSvg /> : <ThreeBarsSvg />}</button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`md:hidden ${menuToggle ? '' : 'hidden'}`}>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          고객센터
        </Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          이벤트
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
