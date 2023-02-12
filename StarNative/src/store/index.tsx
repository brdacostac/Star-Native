import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersStore";
import favoritesReducer from "./favoritesStore";

const reducer = {
    favoritesReducer: favoritesReducer,
    charactersReducer: charactersReducer,
}

const store = configureStore({
    reducer,
});
  
  export default store;