
import Transection from './component/Transec';
import './App.css'
import FormComponent from './component/FormComponent';
import { useState } from 'react';
import DataContext from './data/DataContext';
import Reportcomp from './component/ReportComp';
import { useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";





function App() {
  const design ={color:'red',textAlign:'center',fontSize:'1.5rem'}

  // const initstate = [
  //   {id:1,title:"เงินเดือน",amount:18000},
  //   {id:2,title:"ค่าบ้าน",amount:-4500},
  //   {id:3,title:"ค่าอาหาร",amount:-1200},
  //   {id:4,title:"โบนัส",amount:500}
  // ]

  


  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)



  const onAddNewItem =(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

    
  useEffect(()=>{

    const amounts = items.map(items=>items.amount)
    const incomes = amounts.filter(e=>e>0).reduce((result,e)=>result+=e,0)
    const expense = (amounts.filter(e=>e<0).reduce((result,e)=>result+=e,0))*-1

    

    setReportIncome(incomes.toFixed(2))
    setReportExpense(expense.toFixed(2))
     

  },[items,reportIncome,reportExpense])

 

  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>

      <div className='container'>

        
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>

        <Router>

        <div>
          <ul className='horizontal-menu'>
            <li>
              <Link to='/'>ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to='/insert'>บันทึกข้อมูล</Link>
            </li>
          </ul>

          <Routes>

            <Route path='/' element={<Reportcomp/>} />

            <Route path='/insert'  element={
            <div>
              <FormComponent onAddItem={onAddNewItem}/>
              <Transection item = {items} />
            </div>}/>
            
               
          </Routes>
        </div>
        
        </Router>


        
        
       
        
      </div>

    </DataContext.Provider>


    
  );
  
}



export default App;
