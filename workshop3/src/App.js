
import './App.css';
import data from './Accordion/data';
import {useState} from 'react'
import SingleContent from './SingleContent';
import { createContext } from 'react';
import Switch from "react-switch";

export const ThemeContext = createContext()

function App() {

  const [content,setContent] = useState(data)
  const [theme,setTheme] = useState('light')

  const toggleTheme = ()=>{
    setTheme( (curr) => (curr ==='light'?'dark':'light'))
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <main id={theme}>

      <div className='container'>
        <div className="head-control" >
          
          <h3>Accordion Workshop</h3>
          
          <div className="switch">
          <label style={{margin:5}}>{theme === "light" ? "Light Mode " : "Dark Mode " } </label>
          <Switch onChange={toggleTheme} checked={theme === 'dark'}/>
          </div>

          
        </div>
        

        <section>
          
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data} />
          })}
        </section>

      </div>

    </main>
    </ThemeContext.Provider>

  
  );
}

export default App;
