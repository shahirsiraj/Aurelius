import React, { useReducer, useContext, useState } from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../App.js"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// Import the components corresponding to each mood
import Happy from "./happy";
import Sad from "./sad";
import Anxious from "./anxious";
import Welcome from "./welcome"

function Moods() {
  const moodArr = ["Happy", "Sad", "Anxious"];

  const [open, setOpen] = useState(true);
  const [selectedMood, setSelectedMood] = useState("");

  const handleClickOpen = (mood) => {
    setSelectedMood(mood);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { name } = useContext(UserContext);

  return (
    <>
<Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Greetings {name}, how are you feeling today?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           As a computer program, I understand that I won't be able to provide more than simple support. Do refer to the resources tab on the landing page for professional resources! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {moodArr.map((mood) => (
            <Link to={mood.toLowerCase()} key={mood}>
              <Button onClick={() => setSelectedMood(mood)}>{mood}</Button>
            </Link>
          ))}
          <Link to="/">
          <Button>Go Back!</Button>
          </Link>
          
        </DialogActions>
      </Dialog>

      {selectedMood && (
        <div>
          <h2>Selected Mood: {selectedMood}</h2>
        </div>
      )}
    </>

  );
}

export default Moods;
