function SideBar() {
  return (
    <aside className="hidden lg:flex flex-col w-52 gap-2">
      <div className="flex px-3 py-3 bg-slate-100">
        <h1 className="text-xl font-bold">마이페이지</h1>
      </div>
      <div className="flex px-3 py-3 h-96 bg-slate-100">
        <div className="font-bold">즐겨찾기</div>
      </div>
    </aside>
  );
}

export default SideBar;
