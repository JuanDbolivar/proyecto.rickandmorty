import { ADD_FAV, REMOVE_FAV } from "./actionsTypes";

export const addFav = (char) => {
  return { type: ADD_FAV, payload: char };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
