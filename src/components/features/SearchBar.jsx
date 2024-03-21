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
        className={`h-[30px] w-full flex items-center mt-1 mx-3`}
      >
        <label
          htmlFor="search"
          className={`input input-bordered h-full w-full bg-verde text-verde-claro flex items-center gap-2`}
        >
          <input
            name="search"
            type="text"
            className={`grow cursor-text`}
            placeholder="Search"
            {...register("search", { required: true })}
          />
          <button
            type="submit"
            className="h-full flex items-center bg-transparent border-0 focus:outline-none active:outline-none"
          >
            <img src={whiteSearchIcon} alt="" className="cursor-pointer" />
          </button>
        </label>
      </form>
    </>
  );
}
