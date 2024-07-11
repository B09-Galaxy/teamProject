'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/api/api';

const dummyBusData = {
  items: [
    {
      routeId: '1',
      depTerminalNm: '서울',
      arrTerminalNm: '부산',
      depPlandTime: '20240711 10:00',
      arrPlandTime: '20240711 14:00',
      fee: '20000'
    },
    {
      routeId: '2',
      depTerminalNm: '서울',
      arrTerminalNm: '대전',
      depPlandTime: '20240711 11:00',
      arrPlandTime: '20240711 13:00',
      fee: '15000'
    }
  ]
};

function Card() {
  const [busData, setBusData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const departure = searchParams.get('departure');
      const arrival = searchParams.get('arrival');
      const date = searchParams.get('date');

      if (!departure || !arrival || !date) {
        setError('출발지, 도착지, 날짜 정보를 확인해주세요.');
        setLoading(false);
        return;
      }

      try {
        const data = await api.bus.getBusData(1, 10, departure, arrival, date.replace(/-/g, '')); // API 호출
        console.log('API 응답 데이터:', data); // API 응답 데이터를 로그로 출력
        setBusData(data);
      } catch (error) {
        console.error('API 요청 실패:', error); // 에러 내용을 콘솔에 출력
        // setError('데이터를 가져오는데 실패했습니다.');
        setBusData(dummyBusData); // API 요청 실패 시 더미 데이터를 사용
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    console.log('busData 상태:', busData); // busData 상태를 로그로 출력
    if (busData && busData.items) {
      console.log('busData.items:', busData.items); // busData.items를 로그로 출력
    }
  }, [busData]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {busData ? (
        <div className="w-full">
          {busData.items.map((item: any) => (
            <div className="w-[700px] m-5 mx-auto p-2.5 flex justify-center gap-5 border-solid border-blue-400 border-2 rounded">
              <div className="flex justify-between w-[250px]">
                <div key={item.routeId} className="flex flex-col">
                  <h1 className="text-xl font-extrabold">{item.depPlandTime.split(' ')[1]}</h1>
                  <h3 className="text-xs flex justify-center">{item.depTerminalNm}</h3>
                </div>
                <h3 className="text-xl flex items-center">→</h3>
                <div key={item.routeId} className="flex flex-col">
                  <h1 className="text-xl font-extrabold">{item.arrPlandTime.split(' ')[1]}</h1>
                  <h3 className="text-xs flex justify-center">{item.arrTerminalNm}</h3>
                </div>
              </div>
              <div className="ml-20 flex items-center justify-center">
                <p className="font-extrabold">{`총 ${item.fee}원`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>버스 정보를 찾을 수 없습니다.</div>
      )}
    </div>
  );
}

export default Card;
