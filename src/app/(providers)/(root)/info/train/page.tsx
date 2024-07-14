'use client';

import trainStation from '@/assets/trainStation.json';
import LoadingPage from '@/components/common/LoadingPage';
import InfoCard from '@/components/Info/InfoCard';
import InfoMain from '@/components/Info/InfoMain';
import NonTrainApi from '@/components/TrainPage/NonTrainApi';
import useTrain from '@/hooks/useTrain';
import { useSearchParams } from 'next/navigation';

function TrainPage() {
  const searchparams = useSearchParams();
  const departure = searchparams.get('departure') as string;
  const arrival = searchparams.get('arrival') as string;
  const date = searchparams.get('date') as string;

  const PAGE_NO = '1';
  const NUM_OF_ROWS = '100';
  const PEOPLE = '성인';
  const PEOPLE_COUNT = '1';
  const depPlandTime = date;
  const depPlaceId = (trainStation as TrainStationType)[departure];
  const arrPlaceId = (trainStation as TrainStationType)[arrival];
  const depYear = date && date.slice(0, 4);
  const depMonth = date && date.slice(4, 6);
  const depDay = date && date.slice(6);
  const params = {
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
    depPlaceId,
    arrPlaceId,
    depPlandTime
  };

  const { datas, isLoading }: { datas: TTrainInfo[] | undefined; isLoading: boolean } = useTrain(params);

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
        type="train"
      >
        <NonTrainApi />
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
      type="train"
    >
      {datas &&
        datas.map((data: TTrainInfo, index: number) => (
          <InfoCard
            key={index}
            charge={data.adultcharge}
            arrPlace={data.arrplacename}
            arrTime={data.arrplandtime}
            depPlace={data.depplacename}
            depTime={data.depplandtime}
            grade={data.traingradename}
            type={data.trainno}
            transportType = "train"
          />
        ))}
    </InfoMain>
  );
}

export default TrainPage;
