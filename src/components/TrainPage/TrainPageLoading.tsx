import LoadingSpinner from '../common/LoadingSpinner';

export const TrainPageLoading = () => {
  return (
    <div className="h-[900px] flex items-center">
      <div className="mx-auto justify-items-center bg-blue-200">
        <p>데이터를 가져오는 중입니다. 잠시만 기다려 주세요.</p>
        <div className="flex items-center">
          <div className="mx-auto">
            <LoadingSpinner />
          </div>
        </div>
      </div>
    </div>
  );
};
