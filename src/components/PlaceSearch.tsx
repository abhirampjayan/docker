import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useWeather } from '../hooks/useWeather';
import { useWeatherContext } from '../hooks/useWeatherContext';
import { usePlaceSearchContext } from '../hooks/usePlaceSearchContext';

type Props = {};

const PlaceSearch: React.FC<Props> = () => {
  const { onSubmit, cityText, setCityText } = usePlaceSearchContext();

  return (
    <form
      action=""
      className="flex justify-center items-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search City"
        value={cityText}
        onChange={(e) => setCityText(e.target.value)}
        className="border-solid border bg-transparent py-2 px-4 rounded-full placeholder:text-gray-100 outline-none w-80"
      />
      <button className="p-4" type="submit">
        <IoSearchOutline size={30} />
      </button>
    </form>
  );
};

export default PlaceSearch;
