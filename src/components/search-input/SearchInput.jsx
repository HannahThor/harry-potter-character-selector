import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const SearchInput = () => {
  const { setSearchFilter } = useContext(SearchFilterContext);
  return (
    <div>
      <input
        onChange={(event) => setSearchFilter(event.target.value)}
        className="rounded-md w-[300px] mb-5 mx-5 px-2 bg-indigo-500 shadow-lg shadow-indigo-500/50"
        placeholder="Type name to filter"
      ></input>
    </div>
  );
};

export default SearchInput;
