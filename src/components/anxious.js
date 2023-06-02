import React, {useContext} from "react";
import {Howl} from 'howler';
import gif from "./ATEd.gif"
import {UserContext} from "../App.js"
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";




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


     







return (
<div style={{ height: "100vh", backgroundColor:"floralwhite"}}>
    <Box display="flex" flexDirection="column" borderRadius="32px" border={1}alignItems="center" backgroundColor="lavender" sx={{flexGrow:1}} >
    <br/>
    <br/>
    <Typography component="h1" variant="h3"textAlign="center" color="black">Give me 10 minutes of your time, {name}, let's walk through this together.</Typography>
    <br/><br/>
    <img src={gif} alt="wait till the img loads!" width= "70%"
  height= "auto"></img>
    <br/>
    <br/>
    <Button onClick={handleStart} variant= "outlined" color="secondary">Start</Button>
    <Button onClick={handlePause} variant= "outlined" color="secondary">Pause</Button>
    </Box>
    </div>





    



)

}








export default Anxious 