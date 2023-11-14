import React from "react";
import { IoMdSearch } from "react-icons/io";

interface Isearch {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ value, onChange }: Isearch) => {
  return (
    <div className=" flex justify-end items-center mb-4  ">
      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
        className=" w-full outline-none py-2 pl-2 border-2 border-light_green rounded-md"
      />
      <div className=" text-light_green">
        {/* <IoMdSearch size={32} /> */}
      </div>
    </div>
  );
};

export default Search;
