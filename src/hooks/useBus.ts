'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

function useBus(busParams: TBusParams) {
  const {
    data: datas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['bus'],
    queryFn: () => api.bus.getBusData(busParams)
  });

  return { datas, isLoading, isError };
}

export default useBus;
