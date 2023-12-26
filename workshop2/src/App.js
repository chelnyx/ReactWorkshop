import './App.css';
import Menu from './Menu';
import Quiz from './Quiz';
import Score from './Score';
import {createContext,useState} from 'react'
import Switch from "react-switch";


export const Datacontext = createContext()



function App() {

  const [appState,setAppState] = useState('menu')
  const [score,setScore] = useState(0)
  const [theme,setTheme] = useState('light')

  const toggleTheme = ()=>{
    setTheme( (curr) => (curr ==='light'?'dark':'light'))
  }
  

  

  
  return (
    
    

    <Datacontext.Provider value={{appState,setAppState,score,setScore,theme,setTheme}}>

      <div className="App" id={theme}>

        <div> 

        <h1>Web Development Quiz</h1>

        {appState === 'quiz' && <Quiz className='quiz'/>}
        {appState === 'menu' && <Menu className='menu'/>}
        {appState === 'score' && <Score className='score'/>}

        <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode" }</label>
          <Switch onChange={toggleTheme} checked={theme === 'dark'}/>
          </div>

        <div>Quiz by nakarin</div>

        </div>
      
      </div>
    

    </Datacontext.Provider>
   

  );
}

export default App;
