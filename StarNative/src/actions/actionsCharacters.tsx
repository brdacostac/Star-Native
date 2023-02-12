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
        dispatch(loadCharactersSuccess(characters));
    } catch (error) {
        console.error('Error while fetching characters:', error);
    }
};
  