'use client';

import Tag from '@/components/SearchPage/Tag';
import { useState } from 'react';
import locationData from '../../assets/location.json';

const initialLocationData = Object.keys(locationData);

function SearchPage() {
  const [locations, setLocations] = useState<string[]>(initialLocationData);
  const [selectedDeparture, setSelectedDeparture] = useState<null | string>(null);
  const [selectedArrival, setSelectedArrival] = useState<null | string>(null);

  const handleDepartureClick = (location: string) => {
    setSelectedDeparture(location);
  };

  const handleArrivalClick = (location: string) => {
    setSelectedArrival(location);
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
        />
      </section>
      <p className="mt-4 text-sm text-gray-600">성인 기준입니다.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">완료</button>
    </div>
  );
}

export default SearchPage;
