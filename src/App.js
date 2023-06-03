import Welcome from './components/welcome'
import Moods from './components/mood';
import Happy from './components/happy';
import Sad from './components/sad';
import Anxious from './components/anxious'
import { Route, Routes} from "react-router-dom";
import { useState, createContext} from 'react';
import './App.css';







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
