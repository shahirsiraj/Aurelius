# Aurelius, you mental health buddy! 
The Aurelius Mental Health App is a React-based application designed to provide mental health support and resources to users. The app offers various features to help users manage their mental well-being, including mood tracking, gratitude journaling, and interactive conversations with a virtual mental health professional.

-Happy: a simple gratitude journal 

-Sad: Speak to aurelius through the OpenAI api

-Anxious: Be taken through a guided meditation for 10 minutes 

## Technologies used 
- Frontend : react.js 
- Hooks : useState, createContext, useContext, useEffect, useRef
- Packages : Howler, OpenAI, Materials UI, react-router 
- Deployment : Vercel

## User Stories 
-The user must be able to input their name 

-The user must be able to select their emotions

-The user must be able to log why they are happy 

-The user must be able to see what made them happy previously 

-The user must be able to remove what made them happy previously 

-The user must be able to send a message to Aurelius 

-The user must be able to receive a message from Aurelius 

-The user must be able to hear and play the guided meditation session 

-The user must be able to pause the guided meditation session 

## Wireframes
![Screenshot_2023-06-03_11-35-08](https://github.com/shahirsiraj/seif-project2-Aurelius/assets/125945242/ebddea31-69fb-433b-b0e5-9d83ce40d108)
![Screenshot_2023-06-03_11-35-30](https://github.com/shahirsiraj/seif-project2-Aurelius/assets/125945242/8559981c-21b9-4760-ac92-38c8836a49c1)
![Screenshot_2023-06-03_11-35-48](https://github.com/shahirsiraj/seif-project2-Aurelius/assets/125945242/2e3721e8-4c95-4e5f-83c2-915723815607)
![Screenshot_2023-06-03_11-36-03](https://github.com/shahirsiraj/seif-project2-Aurelius/assets/125945242/68005ae9-1098-49b7-91a8-30661e578b87)
![Screenshot_2023-06-03_11-36-19](https://github.com/shahirsiraj/seif-project2-Aurelius/assets/125945242/0603715a-138d-4fcc-b316-2d97ffd4d48e)



## Ideation and Development
I came with the idea for this app based on my previous work experience as a crisis support executive. It started off as an idea to leverage OpenAI to create a more specific chatbot to discuss your emotions with and to feel like your are being listened to. I then decided to expand it further to include other ranges of emotions as I realised that majority of people out there don't celebrate happiness. 

### Development Process
After coming up with the idea, I wanted to create something that was welcoming visually and didn't look too complicated for everyone to use. I started off using basic hooks such as useState and useRef, with the intention of migrating to a state management library like Redux. I started off with figma wireframes


## Issues faced
- The biggest issue faced was with the OpenAI Key, as it constantly gets banned when commited to github. Currently, I have set an env variable to Vercel but it is still not working to as of right now, the Sad component does not work when deployed.
- Another issue that I faced was with styling, learning materials ui was a challenge and currently, the app does not look polished. 
- Learning to work with the OpenAI package and configuring it

## Future additions 
- Migrating to a state management library 
- Improving styling and adding a theme context for each component/box/grid 
- Adding more emotions that the user may be feeling
- Turning the sad component into a full chatbot, that keeps track of all the messages 

