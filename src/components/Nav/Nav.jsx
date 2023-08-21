import React from "react";
import SearchBar from "../SearchBar";
// import style from "../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleList,
  faAtom,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <Link to={"/home"}>
        <span>
          <FontAwesomeIcon icon={faAtom} />
          <br /> HOME
        </span>
        <br />
      </Link>
      <Link to={"/favorites"}>
        <span>
          <FontAwesomeIcon icon={faHeart} /> <br /> FAVORITES
        </span>
        <br />
      </Link>
      <Link to={"/about"}>
        <span>
          <FontAwesomeIcon icon={faRectangleList} /> <br />
          ABOUT
        </span>
      </Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
