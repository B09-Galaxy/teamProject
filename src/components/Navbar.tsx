'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SignInBtn from './SignInBtn';

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className=" mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴1 */}
          <div className="flex space-x-4">
            <div>
              <Link href="#" className="flex items-center py-5 px-2 text-gray-700">
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
              <Link href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Features
              </Link>
              <Link href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden md:flex items-center space-x-1">
            {/* 마이페이지 아이콘 */}
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-12 w-12 mr-2 text-blue-500 hover:text-blue-400 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <SignInBtn />
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-12 w-12 mr-2 text-blue-500 hover:text-blue-400 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <SignInBtn />
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`md:hidden ${menuToggle ? '' : 'hidden'}`}>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </Link>
        <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </Link>
      </div>
    </nav>
  );
}
