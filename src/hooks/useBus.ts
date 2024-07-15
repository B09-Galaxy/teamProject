'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const getBusDataFn = async (busParams: TBusParams) => {
  if (!busParams.depTerminalId || !busParams.arrTerminalId) {
    return { error: '해당하는 버스터미널이 없습니다' };
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
