'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const getTrainDataTest = async (trainParams: TTrainParams) => {
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
    queryFn: () => getTrainDataTest(trainParams)
  });

  return { datas, isLoading, isError };
}

export default useTrain;
