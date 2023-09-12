import axios from "axios";
import Swal from "sweetalert2";
import { ADD_FAV, REMOVE_FAV } from "./actionsTypes";

export const addFav = (character) => {
  //? con express async await
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? con express
  // const endpoint = "http://localhost:3001/rickandmorty/fav";
  // return (dispatch) => {
  //   axios.post(endpoint, character).then(({ data }) => {
  //     return dispatch({
  //       type: ADD_FAV,
  //       payload: data,
  //     });
  //   });
  // };
};

export const removeFav = (id) => {
  //? con express async await
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? con express
  // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: REMOVE_FAV,
  //       payload: data,
  //     });
  //   });
  // };
};

// export const addFav = (char) => {
//   return { type: ADD_FAV, payload: char };
// };
// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id };
// };
