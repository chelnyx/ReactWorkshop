import money from './img/money.png'
import CurrencyComponet from './Component/CurrencyComponent';
import './App.css';
import {useEffect, useState} from 'react'



function App() {
  
  
  const [currencyChoice,setCurrencyChoice] = useState([])

  
  const [fromCurrency,setFromCurrency] = useState('USD')
  const [toCurrency,setToCurrency] = useState('THB')
  const [amount,setAmount]=useState()
  const [exChangeRate,setExChangeRate]=useState()
  const [checkFromCurrency,setcheckFromCurrency]=useState(true)


  let fromAmount,toAmount
  if(checkFromCurrency){

    fromAmount = amount
    toAmount = (amount*exChangeRate).toFixed(2)

  }else{
    
    toAmount = amount
    fromAmount = (amount/exChangeRate).toFixed(2)
  }

  const amountFromCurrency=(e)=>{
    setAmount(e.target.value)
    setcheckFromCurrency(true)

  }

  const amountToCurrency=(e)=>{
    setAmount(e.target.value)
    setcheckFromCurrency(false)
    
  }
  
  
  useEffect(()=>{
    
    const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExChangeRate(data.rates[toCurrency])
    })


  },[fromCurrency,toCurrency])

  return (

    <div className='container'>
      <img src={money} alt='logo' className='money-img'/>
      <h1>Currency Converter (API)</h1>

      <div >

      <label>From</label>

      <CurrencyComponet 

      currencyChoice={currencyChoice} 
      selectCuurency={fromCurrency}
      changeCurrency={(e)=>setFromCurrency(e.target.value)}
      amount={fromAmount}
      onChangeAmount={amountFromCurrency}

      /> 
      <div className='equal'> = </div>

      <label >To</label>
      <CurrencyComponet 

      currencyChoice={currencyChoice} 
      selectCuurency={toCurrency}
      changeCurrency={(e)=>setToCurrency(e.target.value)}
      amount={toAmount}
      onChangeAmount={amountToCurrency}
      
      /> 

      </div>

    </div>
    
    
  );
}

export default App;
