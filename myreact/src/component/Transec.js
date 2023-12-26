import Item from "./Item"
import './Transection.css'



const Transection =(props)=>{
    const {item} = props
    
    return(
        <div>
        <ul className="item-list">

            
            {item.map((item)=>{
                
                return<Item {...item} key={item.id}/>
            })}   
              
        </ul>
        
           
        
        </div>
    )
}

export default Transection