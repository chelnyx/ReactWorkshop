import { useState,useEffect, useContext } from "react"
import QuestionsData from "./data/QuestionsData"
import { Datacontext } from "./App"

const Quiz = () =>{

    const [current,setCurrent] = useState(0)
    const [selectchoices,setSelectchoices] = useState('')
    const {score,setScore,setAppState} = useContext(Datacontext)
    

    

    useEffect(()=>{
        checkAnswer()
        // eslint-disable-next-line
    },[selectchoices])


    const checkAnswer = () =>{

        if(selectchoices!==''){

            if(selectchoices === QuestionsData[current].answer){
  
                setScore(score+1)
                nextQuestion()
                  
            }else{

                console.log('ตอบผิด ไม่ได้คะแนน')
                nextQuestion()
                
            } 
            
        }
        
    }

    const nextQuestion = () =>{

        setSelectchoices('')
        
        if(current === QuestionsData.length-1){
            setAppState('score')

        }else{
            setCurrent(current+1)
        }

    }

    return(
        <div className='quiz'>

            <h2>{QuestionsData[current].question}</h2>

            <dvi className='choices'>
                <button onClick={()=>setSelectchoices('A')}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectchoices('B')}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectchoices('C')}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectchoices('D')}>{QuestionsData[current].D}</button>
            </dvi>
            <p>{`คำถามข้อที่ ${current+1} / ${QuestionsData.length}`}</p>
           
            


        </div>
    )


}

export default Quiz