import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App.js";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";



function Happy() {
  const { name } = useContext(UserContext);
  const [gratitudeEntry, setGratitudeEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  const handleInputChange = (e) => {
    setGratitudeEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gratitudeEntry.trim() !== "") {
      setJournalEntries([...journalEntries, gratitudeEntry]);
      setGratitudeEntry("");
    }
  };

  const handleRemove = (entry) => {
    setJournalEntries((prevEntries) =>
      prevEntries.filter((prevEntry) => prevEntry !== entry)
    );
  };

  useEffect(() => {
    // Retrieving journal entries from local storage on component mount
    const savedJournalEntries = JSON.parse(localStorage.getItem("journal"));
    if (savedJournalEntries) {
      setJournalEntries(savedJournalEntries);
    }
  }, []);

  useEffect(() => {
    // Storing journal entries in local storage whenever it changes
    localStorage.setItem("journal", JSON.stringify(journalEntries));
  }, [journalEntries]);

  return (
    <div style={{ height: "100vh", backgroundColor: "floralwhite" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid item xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius="32px"
            border={1}
          >
            <Typography variant="h5" align="center" color="blueviolet" sx={{ mb: 2 }}>
              Tell me what you're happy about today, {name}!
            </Typography>
            <Typography variant="h5" align="center" color="blueviolet" sx={{ mb: 2 }}>
              Gratitude Journal
            </Typography>
            <Box component="form">
              <TextareaAutosize
                placeholder="Write your gratitude entry..."
                value={gratitudeEntry}
                onChange={handleInputChange}
                minRows={3}
                style={{ width: "100%", padding: "0.5rem" }}
              />
              <Button
                variant="outlined"
                onClick={handleSubmit}
                color="secondary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Add Entry
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius="32px"
            border={1}
          >
            <Typography variant="h5" align="center" color="blueviolet" sx={{ mb: 2 }}>
              Journal Entries
            </Typography>
            <List>
              {journalEntries.map((entry, index) => (
                <ListItem key={index} backgroundColor="lavender">
                <ListItemText primary={entry} />
                <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemove(entry)}
                >
                Remove
                </Button>
                </ListItem>
                ))}
                </List>
                </Box>
                </Grid>
                </Grid>
                </div>
                );
                }
                
                export default Happy;
