import './index.css'
import { useState, useContext } from 'react'
import { ContextProvider } from '../modalAuth'
import InputField from '../inputField';
import BtnNext from '../btnNext';
import BtnGoogle from '../btnGoogle';
import BtnFacebook from '../btnFacebook';


function ModalLogin({ forgotPassword }) {

    const contextObject = useContext(ContextProvider)
    const accountInputFieldVal = contextObject.accountInputFieldVal
    const passwordInputFieldVal = contextObject.passwordInputFieldVal
    const updateInputFieldVal = contextObject.updateInputFieldVal
    const nextBtnFunc = contextObject.nextBtnFunc

    const inputFieldArr = [
        {
            className: 'login-modal-phone-email',
            type: 'text',
            placeholder: '電話號碼/ Email',
            value: accountInputFieldVal
        },
        {
            className: 'login-modal-password',
            type: 'text',
            placeholder: '密碼',
            value: passwordInputFieldVal
        }
    ]




    return (
        <div className="inner-modal-content">
            {
                inputFieldArr.map((inputField) => {

                    return <InputField key={inputField.className} className={inputField.className} type="text" placeholder={inputField.placeholder} onChange={updateInputFieldVal} value={inputField.value}/>
                })
            }
            <div className="forgot-password">
                <p className="modal-link register-link" onClick={forgotPassword}>忘記密碼 ?</p>
            </div>
            <BtnNext className="btn-next-login" onClick={nextBtnFunc}/>
            <h2 className="horizontal-line-login"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
        </div>
    )
}

export default ModalLogin
