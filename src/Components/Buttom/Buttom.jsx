import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';


export const Buttom = ({color, texto}) => {
    return (
        <button className="btn third">
            {" "}
            <Link to={"/Nosotros"} style={{ textDecoration:'none' , color: color}}>{texto}</Link>
        </button>
    )
}
