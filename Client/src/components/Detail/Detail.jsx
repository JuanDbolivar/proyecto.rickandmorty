import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
// import Swal from "sweetalert2";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        }
        // else {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "¡Debes ingresar un ID!",
        //   });
        // }
      }
    );
    return setCharacter({});
  }, [id]);

  // useEffect(() => {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacter(data);
  //         setLoading(false);
  //       }
  //        else {
  //          Swal.fire({
  //            icon: "error",
  //            title: "Oops...",
  //           text: "¡Debes ingresar un ID!",
  //          });
  //       }
  //     }
  //   );
  //   return setCharacter({});
  // }, [id]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={style.container}>
      <h2>Name: {character.name}</h2>
      <h2>Status: {character.status}</h2>
      <h2>Specie: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>Origin: {character.origin.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
