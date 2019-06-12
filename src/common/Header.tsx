import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/updateProfile">Update Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
