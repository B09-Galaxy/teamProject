'use client';

import busStation from '@/assets/busStation.json';
import NonBusApi from '@/components/BusPage/NonBusApi';
import LoadingPage from '@/components/common/LoadingPage';
import InfoCard from '@/components/Info/InfoCard';
import InfoMain from '@/components/Info/InfoMain';
import useBus from '@/hooks/useBus';
import { useSearchParams } from 'next/navigation';

function BusPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure') as string;
  const arrival = searchparams.get('arrival') as string;
  const date = searchparams.get('date') as string;

  const PAGE_NO = '1';
  const NUM_OF_ROWS = '100';
  const PEOPLE = '성인';
  const PEOPLE_COUNT = '1';
  const depPlandTime = date;
  const depTerminalId = (busStation as BusStationType)[departure];
  const arrTerminalId = (busStation as BusStationType)[arrival];
  const depYear = date.slice(0, 4);
  const depMonth = date.slice(4, 6);
  const depDay = date.slice(6);
  const params = {
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
    depTerminalId,
    arrTerminalId,
    depPlandTime
  };

  const { datas, isLoading }: { datas: TBusInfo[] | undefined; isLoading: boolean } = useBus(params);
  if (isLoading) return <LoadingPage />;
  if (!datas || !Array.isArray(datas))
    return (
      <InfoMain
        departure={departure}
        arrival={arrival}
        date={date}
        PEOPLE={PEOPLE}
        PEOPLE_COUNT={PEOPLE_COUNT}
        depYear={depYear}
        depMonth={depMonth}
        depDay={depDay}
        type="bus"
      >
        <NonBusApi />
      </InfoMain>
    );

  return (
    <InfoMain
      departure={departure}
      arrival={arrival}
      date={date}
      PEOPLE={PEOPLE}
      PEOPLE_COUNT={PEOPLE_COUNT}
      depYear={depYear}
      depMonth={depMonth}
      depDay={depDay}
      type="bus"
    >
      {datas &&
        datas.map((data: TBusInfo, index: number) => (
          <InfoCard
            key={index}
            charge={data.charge}
            arrPlace={data.arrPlaceNm}
            arrTime={data.arrPlandTime}
            depPlace={data.depPlaceNm}
            depTime={data.depPlandTime}
            grade={data.gradeNm}
            transportType="bus"
          />
        ))}
    </InfoMain>
  );
}

export default BusPage;
