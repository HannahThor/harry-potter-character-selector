import CharacterFilter from "../character-filter/CharacterFilter";
import CharacterProfile from "../character-profile/CharacterProfile";
import { createContext, useState } from "react";

export const SearchFilterContext = createContext();

const SearchFilterProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState();

  return (
    <SearchFilterContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

const WizardSearch = () => {
  return (
    <SearchFilterProvider>
      <div className="w-full min-h-full flex flex-row justify-between">
        <CharacterFilter />
        <CharacterProfile />
      </div>
    </SearchFilterProvider>
  );
};
export default WizardSearch;
