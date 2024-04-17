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
    let url = "";
    objetos.map((obj) => {
      if (obj.name.toLowerCase() === value.toLowerCase()) {
        // navigate(`/${obj.group}/${obj.id}`);
        url = `/${obj.group}/${obj.id}`;
      }
    });

    url ? navigate(url) : alert("No se ha encontrado.");
  };

  const [visibleList, setVisible] = useState(false);

  return (
    <>
      {/* Estilos en Header.css */}
      <div
        className={`search-container ${visibleList && "expanse"}`}
        onClick={(e) => {
          e.stopPropagation();
          setVisible(!visibleList);
        }}
      >
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            handleBtn(data);
          })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleBtn(inputValue);
              setResults([]);
            }
          }}
          className={`h-[40px] md:h-[50px] w-full flex items-center mt-1`}
        >
          <label
            htmlFor="search"
            className={`input input-bordered h-full w-full bg-verde-claro border-2 border-verde text-verde flex items-center gap-2`}
          >
            <input
              name="search"
              type="text"
              className={`grow cursor-text placeholder-verde md:text-2xl`}
              placeholder="Search"
              {...register("search", { required: true })}
              onChange={(e) => handleOnChange(e.target.value)}
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
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
          // Estilos en Header.css
          className={`${
            results.length > 0 && visibleList
              ? "search-results-container"
              : "search-results-container-none"
          } absolute w-full bg-verde-claro shadow-sm p-3`}
        >
          <SearchResults />
        </div>
      </div>
    </>
  );
}
