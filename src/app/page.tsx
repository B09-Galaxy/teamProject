'use client'
import locationData from '@/assets/location.json';
import Tag from "@/components/SearchPage/Tag";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialLocationData = Object.keys(locationData);

function Home() {
  const [locations, setLocations] = useState<string[]>(initialLocationData);
  const [selectedDeparture, setSelectedDeparture] = useState<null | string>(null);
  const [selectedArrival, setSelectedArrival] = useState<null | string>(null);
  const [selectedDate, setSelectedDate] = useState<null | string>(null);
  const router = useRouter();

  const handleDepartureClick = (location: string) => {
    setSelectedDeparture(location);
  };

  const handleArrivalClick = (location: string) => {
    setSelectedArrival(location);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedDeparture && selectedArrival && selectedDate) {
      const formattingDate = selectedDate?.split('-').join('');
      router.push(`/info/bus?departure=${selectedDeparture}&arrival=${selectedArrival}&date=${formattingDate}`);
    } else {
      alert('출발지, 도착지, 날짜를 모두 선택해주세요.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col px-4">
      <section className="border border-black rounded-2xl w-full md:w-2/4 p-4 mb-4 mt-5">
        <h2 className="text-lg font-semibold mb-2">출발지</h2>
        <div className="flex flex-wrap">
          {locations.map((location: string) => (
            <Tag
              key={location}
              name={location}
              isSelected={selectedDeparture === location}
              onClick={() => handleDepartureClick(location)}
            />
          ))}
        </div>
      </section>
      <section className="border border-black rounded-2xl w-full md:w-2/4 p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">도착지</h2>
        <div className="flex flex-wrap">
          {locations.map((location: string) => (
            <Tag
              key={location}
              name={location}
              isSelected={selectedArrival === location}
              onClick={() => handleArrivalClick(location)}
            />
          ))}
        </div>
      </section>
      <section className="border border-black rounded-2xl w-full md:w-2/4 p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">가는 날짜</h2>
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          onChange={handleDateChange}
        />
      </section>
      <p className="mt-4 text-sm text-gray-600">성인 기준입니다.</p>
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        완료
      </button>
    </div>
  );
}
export default Home;
