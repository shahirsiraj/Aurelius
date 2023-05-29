import React, { useReducer, useContext } from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../App.js"

// Import the components corresponding to each mood
import Happy from "./happy";
import Sad from "./sad";
import Anxious from "./anxious";
import Welcome from "./welcome"



function Moods() {
  const moodArr = ["Happy", "Sad", "Anxious"];

const {name} = useContext(UserContext)



  const moods = moodArr.map((mood) => {
    // Use the mood as the pathname for the Link
    return (
      <Link to={mood.toLowerCase()} key={mood}>
        <button>{mood}</button>
      </Link>
    );
  });

  return (
    <>
    <h1>Greetings {name}, how are you feeling today? </h1>
    <nav>
      {moods}
    </nav>
    </>
  );
}



export default Moods;
