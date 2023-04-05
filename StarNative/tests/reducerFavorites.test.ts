import favoritesReducer from '../src/store/favoritesStore';
import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER, LOAD_FAVORITES_SUCCESS } from '../src/store/constantes';
import { List } from 'immutable';
import { Characters } from '../model/characters';

describe('favoritesReducer', () => {
  const initialState = {
    favoriteCharacters: []
  };

  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FAVORITE_CHARACTER', () => {
    const character = new Characters(
      1,
      "Luke Skywalker",
      172,
      77,
      "male",
      "https://starwars.fandom.com/wiki/Luke_Skywalker",
      "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
      "Human",
      "Tatooine",
      ["Ben Solo"],
      ["Obi-Wan Kenobi", "Yoda"]
    );

    const expectedState = {
      favoriteCharacters: [character]
    };

    expect(
      favoritesReducer(initialState, {
        type: ADD_FAVORITE_CHARACTER,
        payload: character
      })
    ).toEqual(expectedState);
  });

  it('should handle DELETE_FAVORITE_CHARACTER', () => {
    const character1 = new Characters(
        1,
        "Luke Skywalker",
        172,
        77,
        "male",
        "https://starwars.fandom.com/wiki/Luke_Skywalker",
        "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
        "Human",
        "Tatooine",
        ["Ben Solo"],
        ["Obi-Wan Kenobi", "Yoda"]
      );
      const character2 = new Characters(
        2,
        'Darth Vader',
        202,
        136,
        'male',
        'https://swapi.dev/api/people/4/',
        'https://i.imgur.com/pzcjBh5.jpg',
        'Human',
        'Tatooine',
        ['The Empire Strikes Back', 'Return of the Jedi'],
        ['Luke Skywalker', 'Emperor Palpatine']
      );
    const initialState = {
      favoriteCharacters: [ character1, character2]
    };

    const expectedState = {
      favoriteCharacters: [character2]
    };

    const action = deleteFavoriteCharacter(character1);

    expect(favoritesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_FAVORITES_SUCCESS', () => {
    const character1 = new Characters(
      1,
      "Luke Skywalker",
      172,
      77,
      "male",
      "https://starwars.fandom.com/wiki/Luke_Skywalker",
      "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
      "Human",
      "Tatooine",
      ["Ben Solo"],
      ["Obi-Wan Kenobi", "Yoda"]
    );
    const character2 = new Characters(
      2,
      'Darth Vader',
      202,
      136,
      'male',
      'https://swapi.dev/api/people/4/',
      'https://i.imgur.com/pzcjBh5.jpg',
      'Human',
      'Tatooine',
      ['The Empire Strikes Back', 'Return of the Jedi'],
      ['Luke Skywalker', 'Emperor Palpatine']
    );
    const favorites = [character1, character2];
    const action = { type: LOAD_FAVORITES_SUCCESS, payload: favorites };
    const expectedState = { favoriteCharacters: favorites };
  
    expect(favoritesReducer(initialState, action)).toEqual(expectedState);
  });
  
});