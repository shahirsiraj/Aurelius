import React, { useState, useEffect, useRef, useContext } from "react";
import { Configuration, OpenAIApi } from "openai";
import {UserContext} from "../App.js"
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box"
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

// $OPENAI_API_KEY 

function Sad() {

  const {name} = useContext(UserContext)

  const [text, setText] = useState("")


  const [response, setResponse] = useState("")

  const inputText = useRef("")

  const responseArr=[]

  const configuration = new Configuration({
    organization: "org-68YwlNwMZtpGRkF6uPxH8lHy",
    apiKey: "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",
  });
  
  const openai = new OpenAIApi(configuration);



  useEffect(() => {

    if (text) {
      async function fetchChatCompletion() {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: ` Hello OpenAI, I need you to pretend you are a mental health professional named Aurelius but don't tell the user that you are a mental health professional. Instead, just introduce yourself as Aurelius, a friend. The user's name is ${name}. Practice active listening to this user and support this user, responding to their inputs : ${text}. Before you respond further, wait for the user to send a request to your API first. ONLY IF the user explicitly asks you for professional resources, ONLY recommend them to approach resources in Singapore such as the Samaritans of Singapore, Institute of Mental Health, or the Family Service Centres. Otherwise, do not tell the user about it at all, just continue to listen to the user. Refer to the user by their name as given to you in the variable above. If I need to debug anything and to ask you question related to your programming, I will use the words Sierra Delta in front of my prompts. For example : Sierra Delta: Why are you not able to access my name from the context variable given to you above.`,
            },
          ],
        });

        setResponse(completion.data.choices[0].message.content);
      }

      fetchChatCompletion();
    }
  }, [text, name])

// console.log(completion.data.choices[0].message.content)


const submitText= (e) => {
  e.preventDefault()
  setText(inputText.current.value)
  responseArr.push(text)
  console.log(responseArr)
  inputText.current.value=""

}






console.log(text)

  return( 
    <div style={{ height: "100vh", backgroundColor:"floralwhite"}}>
        <Grid container  direction="column" component="main" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '100vh' }}>
        <Grid item>
         
          <Box component="form" spacing={4} backgroundColor="lavender" border={1} borderColor="secondary.main" borderRadius="30px" display="flex" flexDirection="column" alignItems="center"  sx={{flexGrow:1
          }}>
    
        
    <Typography component = "h1" variant = "h3">
    Would you like to share with me how you're feeling today?

    </Typography>
    
    

    
<Box item>
<TextField
      id="outlined-multiline-static"
      label="What happened?"
      multiline
      color="secondary"
      inputRef={inputText}
      rows={5}
      sx={{width:1000}}
    />
    <br/>
  <Button onClick={submitText} variant= "outlined" color="secondary">Submit!</Button>

</Box>

          </Box>
 

<Box backgroundColor="azure" border={1} borderColor="secondary.main" borderRadius="30px" display="flex" flexDirection="column" alignItems="center"  sx={{flexGrow:1
          }}>
  <Box item> 
  <Typography component="span" variant="h4">

  {response}
  </Typography>

  </Box>

      </Box>
    
      </Grid>
      </Grid>
      
      
    </div>
  )
}

export default Sad;






  