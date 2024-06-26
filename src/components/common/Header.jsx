import React, { useEffect, useState } from "react";
import imgLogo from "assets/img/logo.png";
import classes from "assets/styles/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  });

  return (
    <div className={`bg-white ${classes.header}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-4">
          <Link to="/">
            <img src={imgLogo} alt="logo" />
          </Link>
          <ul className="list-unstyled m-0 d-inline-flex align-items-center column-gap-4">
            <li>
              <Link
                to="/userlist"
                className={`text-decoration-none text-uppercase ${classes.link}`}
              >
                User List +
              </Link>
            </li>
            <li>
              {token ? (
                <button
                  className={`text-decoration-none text-uppercase ${classes.link}`}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className={`text-decoration-none text-uppercase ${classes.link}`}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;