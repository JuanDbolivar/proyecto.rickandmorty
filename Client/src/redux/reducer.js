import { ADD_FAV, REMOVE_FAV } from "./actionsTypes";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case ADD_FAV:
    //   return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    // return {
    //   ...state,
    //   myFavorites: state.myFavorites.filter(
    //     (char) => char.id !== action.payload
    //   ),
    // };

    default:
      return { ...state };
  }
};

export default rootReducer;
