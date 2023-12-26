import PropTypes from 'prop-types'
import './Item.css'



const Item =(props)=>{

    const {title,amount}=props
    const stats  = amount <0 ? "expense": "income" 
    const symbol = amount <0 ? "-": "+"
    const formatNumber=(num)=> {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    

  
    return(
      <div>
      <li className={stats}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
      
      </div>
    );
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}
export default Item