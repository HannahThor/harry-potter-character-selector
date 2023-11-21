import { useState, useEffect, useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const Results = () => {
  const [characters, setCharacters] = useState();
  const { searchFilter, setSelectedCharacter } =
    useContext(SearchFilterContext);
  const getCharacters = async () => {
    const characterResponse = await fetch(
      "https://hp-api.onrender.com/api/characters"
    );

    const characterJson = await characterResponse.json();
    setCharacters(characterJson);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ul className="ml-5 text-white tracking-wide ">
      {characters
        ?.filter((character) => {
          return character.name
            .toLowerCase()
            .includes(searchFilter.toLowerCase());
        })
        .map((character) => (
          <li
            onClick={() => {
              setSelectedCharacter(character);
            }}
            className="my-1 cursor-pointer transition duration-100 transform hover:scale-105"
            key={character.id}
          >
            {character.name}
          </li>
        ))}
    </ul>
  );
};

export default Results;
