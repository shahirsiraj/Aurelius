import React, {useEffect, useContext} from "react";
import {Howl, Howler} from 'howler';
import gif from "./ATEd.gif"
import {UserContext} from "../App.js"
import { Box, Container, Paper } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

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
<div style={{ height: "100vh" }}>
    <Box display="flex" flexDirection="column" alignItems="center" backgroundColor="black" sx={{flexGrow:1}} >
    <br/>
    <br/>
    <Typography component="h1" variant="h3"textAlign="center" color="white">Give me 10 minutes of your time, {name}, let's walk through this together.</Typography>
    <br/><br/>
    <img src={gif} alt="wait till the img loads!" width= "70%"
  height= "auto"></img>
    <br/>
    <br/>
    <button onClick={handleStart}>Start!</button>
    <button onClick={handlePause}>Pause!</button>
    </Box>
    </div>





    



)

}








export default Anxious 