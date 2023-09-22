import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div>
        Navbar
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link>
      </div>
    </>
  );
}
