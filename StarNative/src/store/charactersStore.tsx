import { LOAD_CHARACTERS_SUCCESS } from "./constantes";


const initialState = {
    characters: []
};
  
const charactersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_CHARACTERS_SUCCESS:
            //console.log(action.characters);
            return {
                ...state,
                characters: action.characters
            };
        default:
            return state;
    }
};
  

export default charactersReducer;