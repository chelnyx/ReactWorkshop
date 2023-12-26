import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";


const SingleContent = ({title,description})=>{

    const [showcontent,setShowContent] = useState(false)
    const [animate,setanimete] = useState('hide')

    const changebox =()=>{

        if(!showcontent){

            setanimete('hide')
            setShowContent(true)
            
            
        }else{

            setanimete('show')
            setShowContent(false) 
        }

    }



    return(

        <article className="content" >
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={changebox}>
                    {showcontent ? <AiOutlineMinus/> : <AiOutlinePlus/>}

                </button>
            </header>
            <div className={showcontent && animate ? 'show' : 'hide'}>
               
               {description}
                

            </div>
        
            
            
        </article>
    )
}

export default SingleContent