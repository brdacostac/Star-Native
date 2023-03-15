import { Characters } from "../../model/characters";

export const loadCharactersSuccess = (characters : Characters[]) => {
    return {
      type: 'LOAD_CHARACTERS_SUCCESS',
      characters
    };
  };
  
export const loadCharacters = () => async dispatch => {
    try {
      const charactersPromise = await fetch('https://akabab.github.io/starwars-api/api/all.json');
      const characters = await charactersPromise.json();
      const modifiedCharacters = characters.map(character => {
          const masters = Array.isArray(character.masters)
          ? character.masters.map(subCharacter => typeof subCharacter === 'string' ? subCharacter.replace(/ *[)]∗[)]∗ */g, "") : subCharacter)
          : typeof character.masters === 'string' ? character.masters.replace(/ *[)]∗[)]∗ */g, "") : character.masters;
        const apprentices = Array.isArray(character.apprentices)
          ? character.apprentices.map(subCharacter => typeof subCharacter === 'string' ? subCharacter.replace(/ *[)]∗[)]∗ */g, "") : subCharacter)
        : typeof character.apprentices === 'string' ? character.apprentices.replace(/ *[)]∗[)]∗ */g, "") : character.apprentices;
        return {
        ...character,
        masters,
        apprentices
      };
    });
    const charactersList : Characters[] = modifiedCharacters.filter(elt => new Characters(elt["id"], elt["name"], elt["height"], elt["mass"], elt["gender"], elt["wiki"], elt["image"], elt["species"], elt["homeworld"], elt["masters"], elt["apprentices"]))
    dispatch(loadCharactersSuccess(charactersList));

    } catch (error) {
        console.error('Error while fetching characters:', error);
    }
};
  

// try {
//   const charactersPromise = await fetch('https://akabab.github.io/starwars-api/api/all.json');
//   const characters = await charactersPromise.json();
//   const modifiedCharacters = characters.map(character => {
//       const masters = Array.isArray(character.masters)
//       ? character.masters.map(subCharacter => typeof subCharacter === 'string' ? subCharacter.replace(/ *[)]∗[)]∗ */g, "") : subCharacter)
//       : typeof character.masters === 'string' ? character.masters.replace(/ *[)]∗[)]∗ */g, "") : character.masters;
//     const apprentices = Array.isArray(character.apprentices)
//       ? character.apprentices.map(subCharacter => typeof subCharacter === 'string' ? subCharacter.replace(/ *[)]∗[)]∗ */g, "") : subCharacter)
//     : typeof character.apprentices === 'string' ? character.apprentices.replace(/ *[)]∗[)]∗ */g, "") : character.apprentices;
//   return {
//     ...character,
//     masters,
//     apprentices
//   };
// });