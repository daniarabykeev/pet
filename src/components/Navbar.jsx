import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <NavLink style={{ marginRight: "50px" }} to="/">
        Home Page
      </NavLink>
      <NavLink to="/add">Add product</NavLink>
    </div>
  );
}

export default Navbar;
