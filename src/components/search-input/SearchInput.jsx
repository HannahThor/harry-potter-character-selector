import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const SearchInput = () => {
  const { setSearchFilter } = useContext(SearchFilterContext);
  return (
    <div>
      <input
        onChange={(event) => setSearchFilter(event.target.value)}
        className="border rounded-md border-black w-[300px] mx-5 px-2"
        placeholder="Type name to filter"
      ></input>
    </div>
  );
};

export default SearchInput;
