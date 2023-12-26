import { useContext } from "react"
import './App.css';
import { Datacontext } from "./App"

const Menu = () =>{

    const {setAppState} = useContext(Datacontext)

    return(

        <div className='menu'>

            <h1>Menu Compoonent</h1>
            <button onClick={() =>setAppState('quiz')}>เริ่มทำแบบทดสอบ</button>

        </div>
    )

}

export default Menu