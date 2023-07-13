import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

type Props = {};

const PlaceSearch: React.FC<Props> = (props) => {
  return (
    <form action="" className='flex justify-center items-center'>
      <input
        type="text"
        name="search"
        id="search"
        placeholder='Search City'
        className="border-solid border bg-transparent py-2 px-4 rounded-full placeholder:text-gray-100 outline-none w-80"
      />
      <button className='p-4'>
        <IoSearchOutline size={30} />
      </button>
    </form>
  );
};

export default PlaceSearch;
