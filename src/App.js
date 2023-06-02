import Welcome from './components/welcome'
import Moods from './components/mood';
import Happy from './components/happy';
import Sad from './components/sad';
import Anxious from './components/anxious'
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useState, createContext,useContext } from 'react';
import './App.css';

// TODO 
// 1) wrap everything with react-router, add back buttons to each mood to go back to main page 
// 2) change states to useReducer => look into Redux library 
// 3) fix styling materials.ui?
// 4) save name to context hook 
// 5) optimizations -> improve openai speed, fix the infinite fetch on the anxious.js 
// 6) try to style pop ups => onClick will result in the page popping up/fading 
// 7) consider a resource tab to refer user to professional resources -> can take from SOS resources file 
// 8) change tab image from the react logo to perhaps a picture of aurelius 
// 9) consider whether you wanna add the dictum/daily stoic quotes api to the main mood page as well 






export const UserContext = createContext({});

function App() {
  const [name, setName] = useState("");

  const onChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const onSubmit = () => {
    setName(name);
    console.log(name);
  };

  const contextValue = {
    name,
    onChange,
    onSubmit,
  };

  return (
    
      <UserContext.Provider value={contextValue}>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/mood" element={<Moods />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/anxious" element={<Anxious />} />
      </Routes>
    </UserContext.Provider>


    
  );
}




export default App;
