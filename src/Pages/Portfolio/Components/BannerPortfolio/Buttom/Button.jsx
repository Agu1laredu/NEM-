import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({ color, texto, url }) => {
  return (
    <button className="btn third">
      <Link to={url} style={{ textDecoration: "none", color: color }}>
        {texto}
      </Link>
    </button>
  );
};
