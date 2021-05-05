import './index.css'
import InputOtp from '../inputOtp'
import { useState, useEffect, useRef } from 'react'
const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function AuthOtp({ handleNext }) {
    console.log('render')


    const [inputArr, setInputArr] = useState([0, 0, 0, 0])

    function displayNum(e) {
        
        let key = e.key
        let id = e.target.id
        let digit = parseInt(key) ? parseInt(key) : undefined
        let currentOtp;

        if(id === 'otp0') {
            console.log('otp0')
        } else if(id === 'otp1') {
            console.log('otp1')
        } else if(id === 'otp2') {
            console.log('otp2')
        } else {
            console.log('otp3')
        }

        // if(digit)  {
            
        //     let inputArrC = [...inputArr]
        //     inputArr

        // } else {
        //     console.log('no')
        // }

    }



    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    {
                        inputArr.map((input, index) => {
                           return  <InputOtp index={index} displayNum={displayNum}/>
                        })
                    }
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
