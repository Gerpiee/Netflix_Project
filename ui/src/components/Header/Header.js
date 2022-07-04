import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            width="100%"
            height="30"
            className="d-inline-block align-top"
            alt="NETFLİX"
          />
        </div>
      </Link>

      <div className=" user-image">
        <img
          src={
            "https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png"
          }
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
