import './index.css'
import { useState } from 'react'


function AuthOtp({ handleNext }) {

    const [otp, setOtp] = useState({
        otp1: null,
        otp2: null,
        otp3: null,
        otp4: null
    });

    const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    console.log('render')
    console.log(otp.otp1)
    console.log(otp.otp2)
    console.log(otp.otp3)
    console.log(otp.otp4)

    function displayName(e) {

        let key = parseInt(e.nativeEvent.data);

        // if(INTEGER.includes(key) && e.nativeEvent.inputType )

        console.log(e.nativeEvent.inputType == 'deleteContentBackward')

        // Update otp state
        if(Number.isInteger(key)) {
            key = parseInt(e.nativeEvent.data)
        } else {
            key = null
        }

        let inputId = e.target.id
        let newOtpState = {...otp}
        newOtpState[inputId] = key

        setOtp(newOtpState)

        // Move inputfield focus
        // console.log(e)

    }

    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    <input id="otp1" className="validation-num" type="text" onChange={displayName}/>
                    <input id="otp2" className="validation-num" type="text" onChange={displayName}/>
                    <input id="otp3" className="validation-num" type="text" onChange={displayName}/>
                    <input id="otp4" className="validation-num" type="text" onChange={displayName}/>
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
