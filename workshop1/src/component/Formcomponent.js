// import './Formcomponent.css'
import { useState } from 'react';
import React from 'react';
import { FaEye,FaEyeSlash } from "react-icons/fa";




const FormComponent = () =>{

    const [userName,setUserName]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const [userPassword,setUserPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')

    const [erruserName,seterrUserName]=useState('')
    const [erruserEmail,seterrUserEmail]=useState('')
    const [erruserPassword,seterrUserPassword]=useState('')
    const [errconfirmPass,seterrConfirmPass]=useState('')

    const [userNameColor,setUserNameColor]=useState('')
    const [userEmailColor,setUserEmailColor]=useState('')
    const [userPasswordColor,setUserPasswordColor]=useState('')
    const [confirmPassColor,setConfirmPassColor]=useState('')

    const [showPassword,setShowPassword]=useState('password')
    const [showIcon,setShowIcon]=useState(FaEyeSlash)
    
    const passwordToggle = () =>{
        

        if(showPassword ==='password'){

            setShowPassword('text')
            setShowIcon(FaEye)

        }else{

            setShowPassword('password')
            setShowIcon(FaEyeSlash)

        }
    }

    



    

    const validateform = (e) =>{
        e.preventDefault()

        if(userName.length>=8){
            seterrUserName('')
            setUserNameColor('#11dd7e')
        }else{
            seterrUserName('* กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษรขึ้นไป')
            setUserNameColor('red')
        }

        if(userEmail.includes('@' && '.com')){
            seterrUserEmail('')
            setUserEmailColor('#11dd7e')
        }else{
            seterrUserEmail('* รูปแบบอีเมลไม่ถูกต้อง')
            setUserEmailColor('red')
        }

        if(userPassword.length>=8){
            seterrUserPassword('')
            setUserPasswordColor('#11dd7e')
        }else{
            seterrUserPassword('* กรุณาป้อนรหัสผ่านจำนวน 8 ตัวอักษรขึ้นไป')
            setUserPasswordColor('red')
        }

        if(confirmPass!='' && confirmPass===userPassword){
            seterrConfirmPass('')
            setConfirmPassColor('#11dd7e')
        }else{
            seterrConfirmPass('* รหัสผ่านไม่ตรงกัน')
            setConfirmPassColor('red')
        }

    }

    return(
        <div className='container' onSubmit={validateform}>
            <form className='form'>

                <h1>แบบฟอร์มลงทะเบียน</h1>

                <div className='form-control'>
                    <label>ชื่อผู้ใช้</label>
                    <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}} />
                    <small>{erruserName}</small>
                </div>

                <div className='form-control'>
                    <label>อีเมล</label>
                    <input type='text' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} style={{borderColor:userEmailColor}}/>
                    <small>{erruserEmail}</small>
                </div>

                <div className='form-control'>
                    <label>รหัสผ่าน</label>
                    <input type={showPassword} value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} style={{borderColor:userPasswordColor}}/>
                    <span onClick={passwordToggle}>{showIcon}</span>
                    <small>{erruserPassword}</small>
                </div>

                <div className='form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} style={{borderColor:confirmPassColor}}/>
                    <small>{errconfirmPass}</small>
                </div>

                <button type='submit'>ลงทะเบียน</button>

            </form>
            
        </div>
    )

}

export default FormComponent