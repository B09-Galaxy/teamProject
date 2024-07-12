'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

function useTrain(trainParams: TTrainParams) {
  const {
    data: datas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['train'],
    queryFn: () => api.train.getTrainData(trainParams)
  });

  return { datas, isLoading, isError };
}

export default useTrain;
