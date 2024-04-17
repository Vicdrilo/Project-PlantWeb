import { useContext } from "react";
import { searchDataProvider } from "../../../context/SearchDataProvider";
import { Link } from "react-router-dom";

export function SearchResults() {
  const { results, setResults } = useContext(searchDataProvider);

  const list = results.map((obj, index) => {
    return (
      <Link
        key={index}
        to={`/${obj.group}/${obj.id}`}
        className="text-verde md:text-2xl"
        onClick={() => {
          setResults([]);
        }}
      >
        {obj.name}
      </Link>
    );
  });

  console.log("RESULTS.LENGTH: ", results.length);
  return (
    <>
      <div
        className={`z-10 flex flex-col items-start gap-2 md:gap-3 h-auto transition-height duration-800 ease-in-out`}
      >
        {list}
      </div>
    </>
  );
}
