export const loadCharactersSuccess = (characters : string[]) => {
    return {
      type: 'LOAD_CHARACTERS_SUCCESS',
      characters
    };
  };
  
export const loadCharacters = () => async dispatch => {
    console.log("test5");
    try {
      const charactersPromise = await fetch('https://akabab.github.io/starwars-api/api/all.json');
      const characters = await charactersPromise.json();
      const modifiedCharactersMaster = characters.map(character => {
        if (Array.isArray(character.masters)) {
          return {
            ...character,
            masters: character.masters.map(subCharacter => {
              if (typeof subCharacter === 'string') {
                return subCharacter.replace(/ *\([^)]*\) */g, "");
              }
              return subCharacter;
            })
          };
        } else if (typeof character.masters === 'string') {
          return {
            ...character,
            masters: character.masters.replace(/ *\([^)]*\) */g, "")
          };
        }
        return character;
      });
      const modifiedCharactersApprentices = modifiedCharactersMaster.map(character => {
        if (Array.isArray(character.apprentices)) {
          return {
            ...character,
            apprentices: character.apprentices.map(subCharacter => {
              if (typeof subCharacter === 'string') {
                return subCharacter.replace(/ *\([^)]*\) */g, "");
              }
              return subCharacter;
            })
          };
        } else if (typeof character.apprentices === 'string') {
          return {
            ...character,
            apprentices: character.apprentices.replace(/ *\([^)]*\) */g, "")
          };
        }
        return character;
      });
      console.log(modifiedCharactersApprentices);
      dispatch(loadCharactersSuccess(modifiedCharactersApprentices));

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