export class Characters {
    private _id: number;
    private _name: string;
    private _height: number;
    private _mass: number;
    private _gender: string;
    private _wiki: string;
    private _image: string;
    private _species: string;
    private _homeworld: string;
    private _apprentices : [];
    private _masters : [];
    
    constructor(id: number, name: string, height: number, mass: number, gender: string, wiki: string, image: string, species: string, homeworld: string, apprentices: [], masters: []) {
        this._id = id;
        this._name = name;
        this._height = height;
        this._mass = mass;
        this._gender = gender;
        this._wiki = wiki;
        this._image = image;
        this._species = species;
        this._homeworld = homeworld;
        this._apprentices = apprentices;
        this._masters = masters;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get height(): number {
      return this._height;
    }
  
    set height(value: number) {
      this._height = value;
    }

    get mass(): number {
        return this._mass;
      }
    
    set mass(value: number) {
        this._mass = value;
    }

    get gender(): string {
        return this._gender;
      }
    
    set gender(value: string) {
        this._gender = value;
    }

    get wiki(): string {
        return this._wiki;
      }
    
    set wiki(value: string) {
        this._wiki = value;
    }

    get image(): string {
        return this._image;
      }
    
    set image(value: string) {
        this._image = value;
    }

    get species(): string {
        return this._species;
      }
    
    set species(value: string) {
        this._species = value;
    }
    
    get homeworld(): string {
        return this._homeworld;
      }
    
    set homeworld(value: string) {
        this._homeworld = value;
    }

    get apprentices(): [] {
        return this._apprentices;
      }
    
    set apprentices(value: []) {
        this._apprentices = value;
    }
    
    get masters(): [] {
        return this._masters;
      }
    
    set masters(value: []) {
        this._masters = value;
    }
  }