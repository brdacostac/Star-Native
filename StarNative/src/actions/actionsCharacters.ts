export const loadCharactersSuccess = (characters : string[]) => {
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
    dispatch(loadCharactersSuccess(modifiedCharacters));

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