import React, { Component } from "react";
import Switch from "react-switch";
import FormComponent from './component/Formcomponent';
import { createContext } from 'react';
import { useState } from 'react';
import './App.css'

export const ThemeContext = createContext(null)

function App() {

  const [theme,setTheme] = useState('light')

  

  const toggleTheme = ()=>{
    setTheme( (curr) => (curr ==='light'?'dark':'light'))
  }

  return (

    
    <ThemeContext.Provider value={{theme,toggleTheme}}>
     <div className="App" id={theme} >
      
       <div>

          <FormComponent/>

          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode" }</label>
          <Switch onChange={toggleTheme} checked={theme === 'dark'}/>
          </div>

          

       </div>

     </div>
      
    </ThemeContext.Provider>


  );
}

export default App;
