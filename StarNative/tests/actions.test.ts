import { Character } from "../model/characters";
import { ADD_FAVORITE_CHARACTER } from "../src/store/constantes";
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import configureMockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
import { deleteFavorites, loadFavoritesSuccess, addFavorites } from '../src/actions/actionsFavorites';
import { Characters } from '../model/characters';
import { LOAD_CHARACTERS_SUCCESS } from "../src/store/constantes";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loadCharacters, loadCharactersSuccess } from '../src/actions/actionsCharacters';

const mockStore = configureMockStore([thunk]);

// describe('loadCharacters', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('should dispatch LOAD_CHARACTERS_SUCCESS when characters are loaded successfully', () => {
//     const characters = [
//       {
//         id: '1',
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         gender: 'male',
//         wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
//         image: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
//         species: 'Human',
//         homeworld: 'Tatooine',
//         masters: ['Obi-Wan Kenobi', 'Yoda'],
//         apprentices: ['Rey']
//       },
//       {
//         id: '2',
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         gender: 'female',
//         wiki: 'http://starwars.wikia.com/wiki/Leia_Organa',
//         image: 'https://vignette.wikia.nocookie.net/starwars/images/b/be/Leia_Organa_TLJ.png',
//         species: 'Human',
//         homeworld: 'Alderaan',
//         masters: [],
//         apprentices: []
//       }
//     ];

//     const modifiedCharacters = characters.map(character => ({
//       ...character,
//       masters: Array.isArray(character.masters)
//         ? character.masters.map(subCharacter =>
//             typeof subCharacter === 'string'
//               ? subCharacter.replace(/ *[)]∗[)]∗ */g, '')
//               : subCharacter)
//         : typeof character.masters === 'string'
//           ? character.masters.replace(/ *[)]∗[)]∗ */g, '')
//           : character.masters,
//       apprentices: Array.isArray(character.apprentices)
//         ? character.apprentices.map(subCharacter =>
//             typeof subCharacter === 'string'
//               ? subCharacter.replace(/ *[)]∗[)]∗ */g, '')
//               : subCharacter)
//         : typeof character.apprentices === 'string'
//           ? character.apprentices.replace(/ *[)]∗[)]∗ */g, '')
//           : character.apprentices
//     }));

//     const charactersList = modifiedCharacters.map(
//       character =>
//         new Characters(
//           character.id,
//           character.name,
//           character.height,
//           character.mass,
//           character.gender,
//           character.wiki,
//           character.image,
//           character.species,
//           character.homeworld,
//           character.masters,
//           character.apprentices
//         )
//     );

//     const expectedActions = [
//       {
//         type: 'LOAD_CHARACTERS_SUCCESS',
//         payload: charactersList
//       }
//     ];

//     fetchMock.getOnce('https://akabab.github.io/starwars-api/api/all.json', {
//       body: characters,
//       headers: { 'content-type': 'application/json' }
//     });

//     const store = mockStore({});

//     return store.dispatch(loadCharacters()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

// describe('loadCharacters', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('should dispatch LOAD_CHARACTERS_SUCCESS when characters are loaded successfully', () => {
//     const characters = [
//       {
//         id: '1',
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         gender: 'male',
//         wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
//         image: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
//         species: 'Human',
//         homeworld: 'Tatooine',
//         masters: ['Obi-Wan Kenobi', 'Yoda'],
//         apprentices: ['Rey']
//       },
//       {
//         id: '2',
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         gender: 'female',
//         wiki: 'http://starwars.wikia.com/wiki/Leia_Organa',
//         image: 'https://vignette.wikia.nocookie.net/starwars/images/b/be/Leia_Organa_TLJ.png',
//         species: 'Human',
//         homeworld: 'Alderaan',
//         masters: [],
//         apprentices: []
//       }
//     ];

//     const modifiedCharacters = characters.map(character => ({
//       ...character,
//       masters: Array.isArray(character.masters)
//         ? character.masters.map(subCharacter =>
//             typeof subCharacter === 'string'
//               ? subCharacter.replace(/ *[)]∗[)]∗ */g, '')
//               : subCharacter)
//         : typeof character.masters === 'string'
//           ? character.masters.replace(/ *[)]∗[)]∗ */g, '')
//           : character.masters,
//       apprentices: Array.isArray(character.apprentices)
//         ? character.apprentices.map(subCharacter =>
//             typeof subCharacter === 'string'
//               ? subCharacter.replace(/ *[)]∗[)]∗ */g, '')
//               : subCharacter)
//         : typeof character.apprentices === 'string'
//           ? character.apprentices.replace(/ *[)]∗[)]∗ */g, '')
//           : character.apprentices
//     }));

//     const charactersList = modifiedCharacters.map(
//       character =>
//         new Characters(
//           character.id,
//           character.name,
//           character.height,
//           character.mass,
//           character.gender,
//           character.wiki,
//           character.image,
//           character.species,
//           character.homeworld,
//           character.masters,
//           character.apprentices
//         )
//     );


//     const store = mockStore({});

//     fetchMock.getOnce('https://akabab.github.io/starwars-api/api/all.json', {
//       body: characters,
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       {
//         type: 'LOAD_CHARACTERS_SUCCESS',
//         payload: charactersList
//       }
//     ];

//     return store.dispatch(loadCharacters()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   // it('should console error message when characters cannot be loaded', () => {
//   //   const store = mockStore({});
//   //   const errorMessage = 'Error while fetching characters:';
//   //   const expectedActions = [];

//   //   fetchMock.getOnce('https://akabab.github.io/starwars-api/api/all.json', {
//   //     status: 404,
//   //     body: { message: 'Not Found' },
//   //     headers: { 'content-type': 'application/json' }
//   //   });

//   //   return store.dispatch(loadCharacters()).then(() => {
//   //     expect(console.error).toHaveBeenCalledWith(errorMessage);
//   //     expect(store.getActions()).toEqual(expectedActions);
//   //   });
//   //});
// });


describe('test favorite actions', () => {

  it('should create an action with LOAD_FAVORITES_SUCCESS type', () => {
    const payload: Characters[] = [
      new Characters("1", "Luke Skywalker", "172", "77", "male", "http://starwars.wikia.com/wiki/Luke_Skywalker", "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg", ["2"], ["1"]),
      new Characters("2", "C-3PO", "167", "75", "n/a", "http://starwars.wikia.com/wiki/C-3PO", "https://vignette.wikia.nocookie.net/starwars/images/5/5c/C-3PO_TLJ.png")
    ];
    const expectation = {
      type: 'LOAD_FAVORITES_SUCCESS',
      payload
    };
    
    expect(loadFavoritesSuccess(payload)).toEqual(expectation);
    
  });
  
    it('should create an action with ADD_FAVORITE_CHARACTER type', () => {
      const payload: Characters[] = [
        new Characters("3", "R2-D2", "96", "32", "n/a", "http://starwars.wikia.com/wiki/R2-D2", "https://vignette.wikia.nocookie.net/starwars/images/7/72/R2-D2_Droid_App.png"),
        new Characters("4", "Darth Vader", "202", "136", "male", "http://starwars.wikia.com/wiki/Darth_Vader", "https://vignette.wikia.nocookie.net/starwars/images/4/4d/Vader_SWTOR.png")
      ];
      const expectation = {
        type: 'ADD_FAVORITE_CHARACTER',
        payload
      };
      
      expect(addFavorites(payload)).toEqual(expectation);
      
    });
  
    it('should create an action with DELETE_FAVORITE_CHARACTER type', () => {
      const payload: Characters[] = [
        new Characters("5", "Leia Organa", "150", "49", "female", "http://starwars.wikia.com/wiki/Leia_Organa", "https://vignette.wikia.nocookie.net/starwars/images/b/ba/Leia_Organa_TLJ.png"),
        new Characters("6", "Yoda", "66", "17", "male", "http://starwars.wikia.com/wiki/Yoda", "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Yoda_SWSB.png")
      ];
      const expectation = {
        type: 'DELETE_FAVORITE_CHARACTER',
        payload
      };
    
      expect(deleteFavorites(payload)).toEqual(expectation);
    
    });
  
  });

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// jest.mock('@react-native-async-storage/async-storage');

// describe('deleteFavorites', () => {
//   it('should create an action with DELETE_FAVORITE_CHARACTER type', () => {
//     const character = new Characters(
//         1,
//         "Luke Skywalker",
//         172,
//         77,
//         "male",
//         "https://starwars.fandom.com/wiki/Luke_Skywalker",
//         "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
//         "Human",
//         "Tatooine",
//         ["Ben Solo"],
//         ["Obi-Wan Kenobi", "Yoda"]
//       );
//     const expectedAction = {
//       type: DELETE_FAVORITE_CHARACTER,
//       payload: character,
//     };
//     expect(deleteFavorites(character)).toEqual(expectedAction);
//   });

//   it('should delete a favorite character from the list', async () => {
//     const character1 = new Characters(
//         1,
//         "Luke Skywalker",
//         172,
//         77,
//         "male",
//         "https://starwars.fandom.com/wiki/Luke_Skywalker",
//         "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
//         "Human",
//         "Tatooine",
//         ["Ben Solo"],
//         ["Obi-Wan Kenobi", "Yoda"]
//       );
//       const character2 = new Characters(
//         2,
//         "Leia Organa",
//         150,
//         49,
//         "female",
//         "https://starwars.fandom.com/wiki/Leia_Organa",
//         "https://vignette.wikia.nocookie.net/starwars/images/5/5c/Leia_Organa_TLJ.png/revision/latest?cb=20180103140918",
//         "Human",
//         "Alderaan",
//         ["Rey"],
//         ["Bail Organa", "Breha Organa", "Obi-Wan Kenobi"]
//       );
      
//     const favorites = [character1, character2];
//     AsyncStorage.getItem.mockResolvedValue(JSON.stringify(favorites));
//     const store = mockStore({ favoriteCharacters: favorites });

//     await store.dispatch(deleteFavorites(character1));

//     const actions = store.getActions();
//     const expectedActions = [
//       { type: DELETE_FAVORITE_CHARACTER, payload: character1 },
//     ];
//     expect(actions).toEqual(expectedActions);
//   });

//   it('should update the favorites in the AsyncStorage', async () => {
//     const character1 = new Characters(
//         1,
//         "Luke Skywalker",
//         172,
//         77,
//         "male",
//         "https://starwars.fandom.com/wiki/Luke_Skywalker",
//         "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
//         "Human",
//         "Tatooine",
//         ["Ben Solo"],
//         ["Obi-Wan Kenobi", "Yoda"]
//       );
//       const character2 = new Characters(
//         2,
//         "Leia Organa",
//         150,
//         49,
//         "female",
//         "https://starwars.fandom.com/wiki/Leia_Organa",
//         "https://vignette.wikia.nocookie.net/starwars/images/5/5c/Leia_Organa_TLJ.png/revision/latest?cb=20180103140918",
//         "Human",
//         "Alderaan",
//         ["Rey"],
//         ["Bail Organa", "Breha Organa", "Obi-Wan Kenobi"]
//       );
//     const favorites = [character1, character2];
//     AsyncStorage.getItem.mockResolvedValue(JSON.stringify(favorites));
//     const store = mockStore({ favoriteCharacters: favorites });

//     await store.dispatch(deleteFavorites(character1));

//     const updatedFavorites = [character2];
//     expect(AsyncStorage.setItem).toHaveBeenCalledWith(
//       'favorites',
//       JSON.stringify(updatedFavorites)
//     );
//   });

//   it('should not update the favorites in the AsyncStorage if the character is not in the list', async () => {
//     const character1 = new Characters(
//         1,
//         "Luke Skywalker",
//         172,
//         77,
//         "male",
//         "https://starwars.fandom.com/wiki/Luke_Skywalker",
//         "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
//         "Human",
//         "Tatooine",
//         ["Ben Solo"],
//         ["Obi-Wan Kenobi", "Yoda"]
//       );
//       const character2 = new Characters(
//         2,
//         "Leia Organa",
//         150,
//         49,
//         "female",
//         "https://starwars.fandom.com/wiki/Leia_Organa",
//         "https://vignette.wikia.nocookie.net/starwars/images/5/5c/Leia_Organa_TLJ.png/revision/latest?cb=20180103140918",
//         "Human",
//         "Alderaan",
//         ["Rey"],
//         ["Bail Organa", "Breha Organa", "Obi-Wan Kenobi"]
//       );
//     const favorites = [character2];
//     AsyncStorage.getItem.mockResolvedValue(JSON.stringify(favorites));
//     const store = mockStore({ favoriteCharacters: favorites });

//     await store.dispatch(deleteFavorites(character1));

//     expect(AsyncStorage.setItem).not.toHaveBeenCalled();
//   });
// });


// describe('test addFavorites', () => {
//   it('should create an action with ADD_FAVORITE_CHARACTER type', () => {
//     const characters = new List<Character>([
//         new Characters(
//           1,
//           "Luke Skywalker",
//           172,
//           77,
//           "male",
//           "https://starwars.fandom.com/wiki/Luke_Skywalker",
//           "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20171216001113",
//           "Human",
//           "Tatooine",
//           ["Ben Solo"],
//           ["Obi-Wan Kenobi", "Yoda"]
//         )
//       ]);
      
//     const expectation = {
//       type: ADD_FAVORITE_CHARACTER,
//       payload: characters
//     };

//     expect(addFavorites(characters)).toEqual(expectation);
//   });
// });


describe('loadCharactersSuccess action', () => {
  it('should create an action with LOAD_CHARACTERS_SUCCESS type', () => {
    const characters = [
      {
      id: 1,
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      gender: "male",
      wiki: "http://starwars.wikia.com/wiki/Luke_Skywalker",
      image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      species: "Human",
      homeworld: "Tatooine",
      masters: ["Obi-Wan Kenobi", "Yoda"],
      apprentices: ["Ben Solo"]
      },
      {
      id: 2,
      name: "Leia Organa",
      height: "150",
      mass: "49",
      gender: "female",
      wiki: "http://starwars.wikia.com/wiki/Leia_Organa",
      image: "https://vignette.wikia.nocookie.net/starwars/images/1/1b/Leia_Organa_TLJ.png",
      species: "Human",
      homeworld: "Alderaan",
      masters: ["Yoda"],
      apprentices: ["Jaina Solo"]
      }
    ];
    const expectedAction = {
      type: LOAD_CHARACTERS_SUCCESS,
      characters
    };
    expect(loadCharactersSuccess(characters)).toEqual(expectedAction);
    });
  });