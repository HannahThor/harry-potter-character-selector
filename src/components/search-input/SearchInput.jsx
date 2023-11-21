import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const SearchInput = () => {
  const { setSearchFilter } = useContext(SearchFilterContext);
  return (
    <div>
      <input
        onChange={(event) => setSearchFilter(event.target.value)}
        className="rounded-md w-[300px] mb-5 mx-5 px-2 bg-white-500 shadow-lg hover:shadow-white"
        placeholder="Type name to filter"
      ></input>
    </div>
  );
};

export default SearchInput;
