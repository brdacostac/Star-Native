//import axios from 'axios';

// export class Character {
//     private _id: number;
//     private _name: string;
//     private _height: number;
//     private _mass: number;
//     private _gender: string;
//     private _wiki: string;
//     private _image: string;
//     private _species: string;

//     constructor(id: number, name: string, height: number, mass: number, gender: string, wiki: string, image: string, species: string) {
//         this._id = id;
//         this._name = name;
//         this._height = height;
//         this._mass = mass;
//         this._gender = gender;
//         this._wiki = wiki;
//         this._image = image;
//         this._species = species;
//     }
  
//     get name(): string {
//       return this._name;
//     }
  
//     set name(value: string) {
//       this._name = value;
//     }
  
//     get id(): number {
//       return this._id;
//     }
  
//     set id(value: number) {
//       this._id = value;
//     }
  
//     get height(): number {
//       return this._height;
//     }
  
//     set height(value: number) {
//       this._height = value;
//     }

//     get mass(): number {
//         return this._mass;
//       }
    
//     set mass(value: number) {
//     this._mass = value;
//     }

//     get gender(): string {
//         return this._gender;
//       }
    
//     set gender(value: string) {
//     this._gender = value;
//     }

//     get wiki(): string {
//         return this._wiki;
//       }
    
//     set wiki(value: string) {
//     this._wiki = value;
//     }

//     get image(): string {
//         return this._image;
//       }
    
//     set image(value: string) {
//     this._image = value;
//     }

//     get species(): string {
//         return this._species;
//       }
    
//     set species(value: string) {
//     this._species = value;
//     }
//   }

//   export const CHARACTER_DATA: Character[] = [
//   ];

// export const getCurrentCharacter = (characterId: number) => {
//     if (characterId === undefined) return {};
//     return CHARACTER_DATA.filter(elt => elt.id === characterId)[0];
// }

// const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';

// async function fetchData() {
//   try {
//     const response = await axios.get(API_URL);
//     const characterIds = response.data.map((character: { id: any; }) => character.id);
//     //console.log(characterIds);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();