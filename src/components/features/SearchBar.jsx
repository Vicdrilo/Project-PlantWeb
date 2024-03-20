import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import whiteSearchIcon from "../../assets/icons/white-search-icon.svg";
import { dataPovider } from "../../context/FunctionalityDataProvider";

export function SearchBar() {
  const { searchView, setSearchView, searchWord } = useContext(dataPovider);
  const searchBarStyle = !searchView ? "hidden" : "";
  return (
    <>
      <label
        className={`input input-bordered h-[30px] w-full bg-verde text-verde-claro flex items-center gap-2 ${searchBarStyle} transition-all transition-3000 mt-1 mx-3`}
      >
        <input
          type="text"
          className={`grow cursor-text`}
          placeholder="Search"
        />
        {/* <button className="h-full flex items-center"> */}
        <img src={whiteSearchIcon} alt="" className="cursor-pointer" />
        {/* </button> */}
      </label>
    </>
  );
}
