import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const CharacterProfile = () => {
  const { selectedCharacter } = useContext(SearchFilterContext);
  console.log({ selectedCharacter });
  return (
    <div className="w-[300px] h-[400px] mr-5 border rounded-lg bg-black text-white p-2 ">
      {selectedCharacter ? (
        <div className="flex items-center flex-col">
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
            <p className="font-light">
              Wand Core: {selectedCharacter.wand?.core}
            </p>
          )}
        </div>
      ) : (
        <p>Select your character on the left</p>
      )}
    </div>
  );
};

export default CharacterProfile;
