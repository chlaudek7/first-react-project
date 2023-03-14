import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function Movie({title,coverImg ,description,author,isbn,search}){
    return (
        <li>
            <img src={coverImg} alt="" />
            <p><Link to={`/book/${isbn}/${search}`}>{title}</Link></p>
            <p>{author}</p>
        </li>
    )
}

export default Movie;