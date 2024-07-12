import LoadingSpinner from '../common/LoadingSpinner';

function MyPageLoading() {
  return (
    <div className="border-2 border-[#195DAE] w-full rounded-md p-5">
      <h3
        className="text-2xl text-[#6ab0db] font-bold border-4 border-b-slate-400 *
          border-x-0 border-t-0 pb-2"
      >
        즐겨찾기
      </h3>
      <div className="flex flex-col h-full items-center justify-center gap-10">
        <LoadingSpinner />
        <div>목록을 불러오고 있습니다...</div>
      </div>
    </div>
  );
}

export default MyPageLoading;
