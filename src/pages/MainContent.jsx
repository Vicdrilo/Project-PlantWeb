import { Plantas } from "../components/main-content-components/Plantas";
import { Inicio } from "../components/main-content-components/Inicio";
// import { SearchBar } from "../components/features/search-components/SearchBar";
import { SearchBar } from "../components/features/search-components/SearchBarV2";
//import { SearchResults } from "../components/features/search-components/SearchResults";

export function MainContent({ type }) {
  const content = () => {
    if (type === "inicio") {
      return <Inicio />;
    }

    if (type === "plantas") {
      return <Plantas />;
    }

    if (type === "matirials") {
      return <Plantas />;
    }

    if (type === "advice") {
      return <Plantas />;
    }

    if (type === "forum") {
      return <Plantas />;
    }
  };
  return (
    <div className="main-content-container w-full">
      <div className={` h-[50px]  items-center`}>
        <SearchBar />
        {/* <SearchResults /> */}
      </div>

      {content()}
    </div>
  );
}
