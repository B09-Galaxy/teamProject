'use client';
import MyPageMain from '@/components/MyPage/MyPageMain';
import SideBar from '@/components/MyPage/SideBar';

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
