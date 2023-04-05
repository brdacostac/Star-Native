import { loadCharactersSuccess } from "../src/actions/actionsCharacters";
import { Characters } from "../model/characters";
import charactersReducer from "../src/store/charactersStore";

describe('characters reducer', () => {
    it('should handle LOAD_CHARACTERS_SUCCESS', () => {
      const characters = [
        new Characters('1', 'Luke Skywalker', '172', '77', 'male', 'http://...', 'http://...', 'Human', 'Tatooine', ['Obi-Wan Kenobi', 'Yoda'], ['Leia Organa']),
        new Characters('2', 'Darth Vader', '202', '136', 'male', 'http://...', 'http://...', 'Human', 'Tatooine', ['Obi-Wan Kenobi', 'Sheev Palpatine'], ['Luke Skywalker'])
      ];
  
      const action = loadCharactersSuccess(characters);
      const state = charactersReducer({ characters: [] }, action);
  
      expect(state.characters).toEqual(characters);
    });
  });
  