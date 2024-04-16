import { Characters } from "../model/characters";
import charactersReducer from "../src/store/charactersStore";

const initialState = {
    characters: [new Characters(1,
        "Luke Skywalker",
        172,
        77,
        "male",
        "https://starwars.fandom.com/wiki/Luke_Skywalker",
        "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        "Human",
        "Tatooine",
        [],
        []
    )],
};

const testReducer = (state = initialState, action) => {
    return charactersReducer(initialState, action);
};

export default testReducer;