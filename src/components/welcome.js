import React,{useState, useRef, useContext, createContext} from "react";
import { Link, Routes } from "react-router-dom";
import {UserContext} from "../App.js"
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




// import Moods from "mood.js"





function Welcome() {
    const { name, onChange, onSubmit } = useContext(UserContext);

    const [open, setOpen] = useState(false);
    const [selectedMood, setSelectedMood] = useState("");
  
    const handleClickOpenDialog = (mood) => {
      setSelectedMood(mood);
      setOpen(true);
    };
  
    const handleCloseDialog = () => {
      setOpen(false);
    };

    const handleSubmit = () => {
      onSubmit()
      handleClickOpenDialog()

    }

    const moodArr = ["Happy", "Sad", "Anxious"];
  
  
    return (
      // <>
      //   <h1 id="welcometitle">Welcome to Aurelius, what is your name?</h1>
      //   <br />
      //   <TextField label="Name" variant="outlined" value={name} onChange={onChange}/>
      //   {/* <input type="name" value={name} onChange={onChange}></input> */}
        // <Link to="/mood">
        // <Button variant="outlined" value = {name} onClick={onSubmit}>Submit</Button>
        //   {/* <button type="submit" value={name} onClick={onSubmit}>Submi{}t</button> */}
        // </Link>
      // </>

      // <ThemeProvider theme={defaultTheme}>
      <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
             Hello, my name is Aurelius. What is yours?
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                onChange={onChange}
              />
      
      {/* <Link to="/mood"> */}
        <Button variant="outlined" value = {name} onClick={handleSubmit}>Submit</Button>
          {/* <button type="submit" value={name} onClick={onSubmit}>Submi{}t</button> */}
        {/* </Link> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Dialog
      open={open}
      onClose={handleCloseDialog}
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
        <Button onClick={handleCloseDialog}>Go Back!</Button>
        
        
      </DialogActions>
    </Dialog>

    {selectedMood && (
      <div>
        <h2>Selected Mood: {selectedMood}</h2>
      </div>
    )}
</>

    // </ThemeProvider>
    );
  }
  

export default Welcome