import { useContext } from "react"
import DataContext from "../data/DataContext"
import './Reportcomp.css'

const Reportcomp=()=>{
    
    const {income,expense} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const result = (income-expense).toFixed(2)   

    return (
        <div>
            <h4>ยอดคงเหลือ(บาท)</h4>
            <h1>฿{formatNumber(result)}</h1>
            <div className="report-container">
                <div>
                <h4>รายได้ทั้งหมด</h4>
                <h3 className="report plus">฿{formatNumber(income)}</h3>
                </div>
                <div>
                <h4>รายจ่ายทั้งหมด</h4>
                <h3 className="report minus">฿{formatNumber(expense)}</h3>
                </div>
            </div>
        </div>
    
    )
        
}


export default Reportcomp
