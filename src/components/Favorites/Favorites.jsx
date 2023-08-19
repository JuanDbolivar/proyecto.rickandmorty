import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card";

const Favorite = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites); // asi se suscribe al estado global
  return (
    <div>
      {myFavorites.map((char) => (
        <Card key={char.id} char={char} onClose={onClose} />
      ))}
    </div>
  );
};

export default Favorite;
