import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();

  const {isAuth, logout} = useContext(AuthContext);

  return (
    <nav>
        <NavLink to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </NavLink>

      <div>
        <button
          type="button"
          onClick={!isAuth ? () => navigate('/signin') : logout}
        >
            {!isAuth ? 'Log in' : 'Log out'}
        </button>
        {!isAuth && <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>}
      </div>
    </nav>
  );
}

export default NavBar;