import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const CharacterProfile = () => {
  const { selectedCharacter } = useContext(SearchFilterContext);
  console.log({ selectedCharacter });
  return (
    <div
      className="w-[300px] h-[450px] mr-5  text-white p-2
    
 bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
 "
    >
      {selectedCharacter ? (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-medium">Character Profile</h2>
          <p className="font-medium">{selectedCharacter.name}</p>
          <img
            className="h-[230px] rounded-lg my-4"
            src={selectedCharacter.image}
          ></img>
          {selectedCharacter.house && <p>House: {selectedCharacter.house}</p>}
          {selectedCharacter.patronus && (
            <p className="font-light">Patronus: {selectedCharacter.patronus}</p>
          )}
          {selectedCharacter.wand.core && (
            <p className="font-light text-center">
              Wand Core: {selectedCharacter.wand?.core}
            </p>
          )}
        </div>
      ) : (
        <p className="text-center">Select your character on the left</p>
      )}
    </div>
  );
};

export default CharacterProfile;
