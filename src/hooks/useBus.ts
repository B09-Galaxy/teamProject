'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const getBusDataFn = async (busParams: TBusParams) => {
  if (!busParams.depTerminalId || !busParams.arrTerminalId) {
    return;
  }
  return api.bus.getBusData(busParams);
};

function useBus(busParams: TBusParams) {
  const {
    data: datas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['bus'],
    queryFn: () => getBusDataFn(busParams)
  });

  return { datas, isLoading, isError };
}

export default useBus;
