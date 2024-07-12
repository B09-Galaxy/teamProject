'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const getTrainDataFn = async (trainParams: TTrainParams) => {
  if (!trainParams.depPlaceId || !trainParams.arrPlaceId) {
    return;
  }
  api.train.getTrainData(trainParams);
};

function useTrain(trainParams: TTrainParams) {
  const {
    data: datas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['train'],
    queryFn: () => getTrainDataFn(trainParams)
  });

  return { datas, isLoading, isError };
}

export default useTrain;
