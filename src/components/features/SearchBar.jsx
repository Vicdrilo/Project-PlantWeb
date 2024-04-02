import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import whiteSearchIcon from "../../assets/icons/white-search-icon.svg";
import { dataPovider } from "../../context/FunctionalityDataProvider";
import { useForm } from "react-hook-form";

export function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className={`h-[40px] w-full flex items-center mt-1`}
      >
        <label
          htmlFor="search"
          className={`input input-bordered h-full w-full bg-verde-claro border-2 border-verde text-verde flex items-center gap-2`}
        >
          <input
            name="search"
            type="text"
            className={`grow cursor-text placeholder-verde`}
            placeholder="Search"
            {...register("search", { required: true })}
          />
          <button
            type="submit"
            className="h-full flex items-center bg-transparent border-0 focus:outline-none active:outline-none"
          >
            {/* <img src={whiteSearchIcon} alt="" className="cursor-pointer" /> */}
            <img src={searchIcon} alt="" className="cursor-pointer" />
          </button>
        </label>
      </form>
    </>
  );
}
