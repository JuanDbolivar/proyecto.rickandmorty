import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Swal from "sweetalert2";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
// import Home from './components/Home/Home'

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      console.log(data);
      setAccess(data);
      access && navigate("/home");
    });
  }

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const EMAIL = "juanD@henry.com";
  // const PASSWORD = "123Jdb";
  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //------------------------------------------------------//

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Debes ingresar un ID!",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Character not fount",
        });
      });
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const onSearch = (id) => {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then(({ data }) => {
  //     if (data.id) {
  //       setCharacters((oldChars) => [...oldChars, data]);
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "¡Debes ingresar un ID!",
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: error.response.data.error,
  //     });
  //   });
  // };
  //------------------------------------------------------//
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const onClose = (id) => {
    const characterFil = characters.filter((char) => char.id !== Number(id));
    setCharacters(characterFil);
  };

  let location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
