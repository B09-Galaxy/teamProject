'use client';
import MyPageMain from '@/components/myPage/MyPageMain';
import SideBar from '@/components/myPage/SideBar';

function MyPage() {
  return (
    <>
      <div className="flex flex-row ml-3 mr-10 mt-5 gap-3">
        <SideBar />
        <MyPageMain />
      </div>
    </>
  );
}

export default MyPage;
