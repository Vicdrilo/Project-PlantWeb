import { useContext, useState } from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";
import whiteSearchIcon from "../../../assets/icons/white-search-icon.svg";
import { dataPovider } from "../../../context/FunctionalityDataProvider";
import { useForm } from "react-hook-form";
import { SearchResults } from "./SearchResults";
import { searchDataProvider } from "../../../context/SearchDataProvider";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { data } = useContext(dataPovider);
  const objetos = data.objects.plants.concat(data.objects.materials);

  const { results, setResults } = useContext(searchDataProvider);

  //Estado del valor que va recibiendo el input - QUIZÁS NO HAGA FALTA
  const [inputValue, setInputValue] = useState("");
  const handleInput = (value) => {
    setInputValue(value);
  };

  const handleResults = (value) => {
    const output = objetos.filter((obj) => {
      return (
        value &&
        obj &&
        obj.name &&
        obj.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    console.log("OUTPUT: ", output);
    setResults(output);
  };

  //Método que englova los métodos necesarios con el evento onChange
  const handleOnChange = (value) => {
    handleInput(value);
    handleResults(value);
  };

  const handleBtn = (value) => {
    objetos.map((obj) => {
      if (obj.name.toLowerCase() === value.search.toLowerCase()) {
        navigate(`/${obj.group}/${obj.id}`);
      }
    });
  };

  const [visibleList, setVisible] = useState(false);

  return (
    <>
      <div className="search-container relative">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            handleBtn(data);
          })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit((data) => {
                console.log(data);
                handleBtn(data);
              });
            }
          }}
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
              onChange={(e) => handleOnChange(e.target.value)}
              // onFocus={() => setVisible(true)}
              // onBlur={() => setVisible(false)}
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
        <div
          className={`search-results-container absolute w-full bg-verde-claro shadow-sm mt-2 p-2`}
        >
          <SearchResults setInputValue={setInputValue} />
        </div>
      </div>
    </>
  );
}
