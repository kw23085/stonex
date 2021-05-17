import './index.css'
import { ContextProvider } from '../modalAuth'
import { useState, useContext } from 'react'

function ModalSignUpOtpEmail() {

    const contextObject = useContext(ContextProvider)
    const emailAccount = contextObject.accountInputFieldVal


    return (
        <>
            <div className="inner-modal-content">
                <div className="otp-confirm-msg">
                    <p>驗證信已發送到</p>
                    <p>{emailAccount}</p>
                </div>
            </div>
        </>
    )
}

export default ModalSignUpOtpEmail
