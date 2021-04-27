import { useEffect, useState } from 'react';
import './index.css'



function AuthOtp({ handleNext }) {

    console.log('render')

    function displayNum(e) {


        console.log(e.target.value)
        console.log(e.target.value.length)
        console.log(e.target.max)
        console.log(e.target.value === e.target.max)

        if (e.target.value.length > e.target.max) {
            e.target.value = e.target.value.slice(0, e.target.max)
        }


    }



    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    <input className="validation-num num1" type="number" max="1" onChange={displayNum}/>
                    <input className="validation-num num2" type="number" max="1" onChange={displayNum}/>
                    <input className="validation-num num3" type="number" max="1" onChange={displayNum}/>
                    <input className="validation-num num4" type="number" max="1" onChange={displayNum}/>
                </div>
                <div className="no-valinum">
                    <p className="no-valinum-txt">沒有收到驗證碼嗎?</p>
                    <p className="no-valinum-txt"><span className="modal-link re-send-valinum">重新傳送</span>或<span className="modal-link alt-register">使用不同的註冊方式</span></p>
                </div>
            </div>
        </>
    )
}

export default AuthOtp
