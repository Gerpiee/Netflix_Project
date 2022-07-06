import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import "./Header.scss";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "")
      return alert("Lütfen Bir şeyler yazıp aramayı tekrar deneyin");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            width="100%"
            height="30"
            className="d-inline-block align-top"
            alt="NETFLİX"
          />
        </div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>

      <div className=" user-image">
        <img
          src={
            "https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg"
          }
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
