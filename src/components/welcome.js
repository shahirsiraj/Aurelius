import React,{useState, useContext, useEffect} from "react";
import { Link} from "react-router-dom";
import {UserContext} from "../App.js"
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider  from '@mui/material/Divider'
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Welcome() {
    const { name, onChange, onSubmit } = useContext(UserContext);



    const [open, setOpen] = useState(false);
    const [selectedMood, setSelectedMood] = useState("");
    const [quote, setQuote] = useState("")

  
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

    useEffect(()=>{
      const stoicQuote="https://api.themotivate365.com/stoic-quote"

      const callQuote = () => {
        fetch(stoicQuote)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setQuote(data);
          });
      };
      callQuote();
        
      }
    ,[])
  
  
    return (
 


      <div style={{ height: "100vh", backgroundColor:"floralwhite"}}>
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
        <Grid item xs={12} sm={8} md={5} backgroundColor='floralwhite' component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border:"1",
             
              borderRadius:"10px"

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
      

        
        <Button variant= "outlined" color="secondary" value = {name} onClick={handleSubmit}>Submit</Button>
        <br/>
        <br/>
        <Divider></Divider>
        <Typography component="span" variant="h5" >
            {quote.quote} - {quote.author} 
          </Typography>
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
            <Button variant= "outlined" color="secondary" onClick={() => setSelectedMood(mood)}>{mood}</Button>
          </Link>
        ))}
        <Button variant= "outlined" color="secondary" onClick={handleCloseDialog}>Go Back!</Button>
        
        
      </DialogActions>
    </Dialog>

</div>

 
    );
  }
  

export default Welcome