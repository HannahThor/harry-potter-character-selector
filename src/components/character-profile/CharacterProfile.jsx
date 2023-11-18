import { useContext } from "react";
import { SearchFilterContext } from "../wizard-search/WizardSearch";

const CharacterProfile = () => {
  const { selectedCharacter } = useContext(SearchFilterContext);
  console.log({ selectedCharacter });
  return selectedCharacter ? (
    <>
      <div className="w-[400px] border rounded-md border-black p-2">
        Character Profile
        <p>{selectedCharacter.name}</p>
        <img src={selectedCharacter.image}></img>
        {selectedCharacter.house && <p>House: {selectedCharacter.house}</p>}
        {selectedCharacter.patronus && (
          <p>Patronus: {selectedCharacter.patronus}</p>
        )}
        {selectedCharacter.wand.core && (
          <p>Wand Core: {selectedCharacter.wand?.core}</p>
        )}
      </div>
    </>
  ) : (
    <p className="w-[400px] border rounded-md border-black p-2">
      Select your character on the left
    </p>
  );
};

export default CharacterProfile;
