import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addFav, removeFav } from "../redux/actions";

const Container = styled.div`
  border: 5px solid #44045f;
  margin: 5px;
  padding-bottom: 20px;
  //align-items: center;
  background-color: #3a0850;
  color: beige;
  border-radius: 8%;
  width: 20%;
  height: 350px;
  position: relative;
  font-size: 90%;
`;

const Prop = styled.div`
  position: relative;
  z-index: 3;
  top: 6%;
  text-align: center;
`;

const Buttons = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  background-color: #03f907;
  color: rgb(5, 90, 33);
  position: absolute;
  left: 83%;
`;
const ButtonH = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  background-color: #03f907;
  color: rgb(5, 90, 33);
  position: absolute;
  left: 0%;
`;
const Name = styled.h2`
  position: absolute;
  bottom: 2%;
  left: 7%;
  color: black;
  background-color: #03f907;
  border-radius: 5px;
  z-index: 3;
`;

const Img = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  z-index: 1;
  margin: auto;
  width: 90%;
  height: 65%;
  border-radius: 8px;
`;
export default function Card({ char, onClose }) {
  const { id, name, species, gender, image } = char;

  const myFavorites = useSelector((state) => state.myFavorites); // asi se suscribe al estado global
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(char));
    }
  };

  let location = useLocation();

  return (
    <Container>
      {isFav ? (
        <ButtonH onClick={handleFavorite}>❤️</ButtonH>
      ) : (
        <ButtonH onClick={handleFavorite}>🤍</ButtonH>
      )}

      {location.pathname !== "/favorites" && (
        <Buttons
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </Buttons>
      )}

      <Link to={`/detail/${id}`}>
        <Name>{name}</Name>
      </Link>
      <Prop>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </Prop>
      <Img src={image} alt="" />
    </Container>
  );
}
