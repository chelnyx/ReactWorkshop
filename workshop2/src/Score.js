import { Datacontext } from "./App"
import { useContext } from "react"
import QuestionsData from "./data/QuestionsData"


const Score = () =>{

    const {score,setAppState,setScore} = useContext(Datacontext)

    const reQuestion= () =>{

        setAppState('quiz')
        setScore(0)

    }

    return(
        <div className='score'>
            
            <h1>สรุปผลคะแนนสอบ</h1>
            <h2>{`คะแนนที่ได้ ${score} / ${QuestionsData.length}`}</h2>
            <button onClick={reQuestion}>ทำแบบทดสอบใหม่</button>


        </div>
    )

 
}

export default Score