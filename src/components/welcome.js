import React,{useState, useRef, useContext, createContext} from "react";
import { Link, Routes } from "react-router-dom";
import {UserContext} from "../App.js"
// import Moods from "mood.js"





function Welcome() {
    const { name, onChange, onSubmit } = useContext(UserContext);
  
    return (
      <>
        <h1>Welcome to Aurelius, what is your name?</h1>
        <br />
        <input type="name" value={name} onChange={onChange}></input>
        <Link to="/mood">
          <button type="submit" value={name} onClick={onSubmit}>Submit</button>
        </Link>
      </>
    );
  }
  

export default Welcome