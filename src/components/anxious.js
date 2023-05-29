import React, {useEffect, useContext} from "react";
import {Howl, Howler} from 'howler';
import gif from "./ATEd.gif"
import {UserContext} from "../App.js"
// import sound.mp3 from "./sound.mp3"
//npm install react-sound 
//find a way to animate text 
//OR just import react-player then call a video url 


function Anxious () {

    // const user = useContext(userContext)



const {name} = useContext(UserContext)




    const sound = new Howl({
        src: ['/sound.mp3'],
      });




    const handleStart = () => {
        sound.play()
    }

    const handlePause = () => {
        sound.pause()
    }


     


    //   useEffect((
    //     setTimeout((
    //         // sound.play()
    //     ), 10000)
    //   ),[])






return (
    <>
    <h1>Give me 10 minutes of your time, {name}, let's walk through this together.</h1>
    <img src={gif} alt="wait till the img loads!"></img>
    <br/>
    <br/>
    <button onClick={handleStart}>Start!</button>
    <button onClick={handlePause}>Pause!</button>
    </>
)

}








export default Anxious 