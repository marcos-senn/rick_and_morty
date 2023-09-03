import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
 myFavorites: [],
 allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
 switch (type) {
  case ADD_FAV:
   return {
    ...state,
    myFavorites: [...state.allCharacters, payload],
   allCharacters: [...state.allCharacters, payload],
   };

  case REMOVE_FAV:
   return {
    ...state,
    myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(payload)),
    
   };
  case FILTER:
   const allCharactersFiltered = state.myFavorites.filter((character) => {
    return character.gender === payload;
   });

   return {
    ...state,
    myFavorites:
     payload === "allCharacters"
      ? [...state.allCharacters]
      : allCharactersFiltered,
   };
 

   
  case ORDER:
   const allCharactersCopy = [...state.allCharacters];

   return {
    ...state,
    myFavorites:
     payload === "A"
      ? allCharactersCopy.sort((a, b) => {
         return a.id - b.id;
        })
      : allCharactersCopy.sort((a, b) => {
         return b.id - a.id;
        }),
   };

  default:
   return {
    ...state,
   };
 }
};

export default reducer;
