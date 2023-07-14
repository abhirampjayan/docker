import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { usePlaceSearchContext } from '../../hooks/usePlaceSearchContext';

type Props = {};

const PlaceSearch: React.FC<Props> = () => {
  const { onSubmit, cityText, setCityText } = usePlaceSearchContext();

  return (
    <form
      action=""
      className="flex justify-center gap-1 items-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search City"
        value={cityText}
        onChange={(e) => setCityText!(e.target.value)}
        className="border-solid border  bg-transparent py-2 px-4 rounded-full placeholder:text-gray-100 outline-none flex-grow w-full"
      />
      <button className="p-3 backdrop-blur-md rounded-full bg-wblack bg-opacity-10" type="submit">
        <IoSearchOutline size={26} />
      </button>
    </form>
  );
};

export default PlaceSearch;
