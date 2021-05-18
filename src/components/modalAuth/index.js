import React, { useState, useRef } from 'react'
import './index.css'
import CloseIcon from '../../icons/close.png'
import PrevIcon from '../../icons/prev.png'
import ModalSignUp from '../modalSignUp'
import ModalSignUpOtpPhone from '../modalSignUpOtpPhone'
import ModalSignUpOtpEmail from '../modalSignUpOtpEmail'
import ModalSuccess from '../modalSuccess'
import ModalLogin from '../modalLogin'
import ModalForgotPw from '../modalForgotPw'
import ModalAltLogin from '../modalAltLogin'
import ModalLoginOtpPhone from '../modalLoginOtpPhone'
import ModalLoginOtpEmail from '../modalLoginOtpEmail'


export const ContextProvider = React.createContext()


function ModalAuth({ open, closeModal }) {
    // Step
    const [step, setStep] = useState('signup');
    // Inputfield Values
    const [accountInputFieldVal, setaccountInputFieldVal] = useState('')
    const [passwordInputFieldVal, setPasswordInputFieldVal] = useState('')

    console.log(step)

    const inputFieldRef = useRef()

    const contextValues = {
        nextBtnFunc: nextBtnFunc,
        inputFieldRef: inputFieldRef,
        accountInputFieldVal: accountInputFieldVal,
        passwordInputFieldVal: passwordInputFieldVal,
        updateInputFieldVal: updateInputFieldVal,
        signUp: signUp
    }

    // Show Modal or No
    if(!open) return null;

    // Modals
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <ModalSignUp login={login}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalSignUpOtpPhone altLogin={altLogin}/>,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: signUp,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalSignUpOtpEmail altLogin={altLogin}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper'
        },
        success: {
            title: '完成註冊',
            content: <ModalSuccess closeResetStep={closeResetStep}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper-large'
        },
        altLogin: {
            title: '選擇註冊方式',
            content: <ModalAltLogin login={login}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper'
        },
        login: {
            title: '會員登入',
            content: <ModalLogin forgotPassword={forgotPassword} />,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper-medium'
        },
        forgotPassword: {
            title: '忘記密碼',
            content: <ModalForgotPw />,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: login,
            modalClassName: 'modal-wrapper'
        },
        loginOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalLoginOtpPhone />,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: login,
            modalClassName: 'modal-wrapper'
        },
        loginOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalLoginOtpEmail />,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: login,
            modalClassName: 'modal-wrapper'
        }
    }

    var actualModalContent;

    if(modalContent[step]) {
        actualModalContent = modalContent[step]
    } else {
        actualModalContent = modalContent['signup']
    }
    
    // Handle next step
    function nextBtnFunc() {

        if(step === 'signup' && phoneIsValid(accountInputFieldVal)) {
            setStep('signUpOtpPhone')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'signup' && emailIsValid(accountInputFieldVal)) {
            setStep('signUpOtpEmail')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'signUpOtpPhone') {
            setStep('success')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'login' && phoneIsValid(accountInputFieldVal)) {
            setStep('loginOtpPhone')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'forgotPassword') {
            setStep('loginOtp')
            setaccountInputFieldVal('')
        } else if(step === 'login' && emailIsValid(accountInputFieldVal)) {
            setStep('loginOtpEmail')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'altLogin' && phoneIsValid(accountInputFieldVal)) {
            setStep('signUpOtpPhone')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        } else if(step === 'altLogin' && emailIsValid(accountInputFieldVal)) {
            setStep('signUpOtpEmail')
            setaccountInputFieldVal('')
            setPasswordInputFieldVal('')
        }
     
    }

    // Render signup modal
    function signUp() {
        setStep('signup')
    }

    // Close and reset
    function closeResetStep() {
        closeModal();
        setStep('signup');
        setaccountInputFieldVal('');
        setPasswordInputFieldVal('')
    }

    // Render altLogin modal content
    function altLogin() {
        setStep('altLogin')
    }

    // Render login modal content
    function login() {
        setStep('login')
    }

    // Render forgotpassword modal content
    function forgotPassword() {
        setStep('forgotPassword')
    }


    // Update inputfield value
    function updateInputFieldVal(e) {

        let targetClass = e.target.classList[1]
        let inputVal = e.target.value
        let checkClassName = ['login-modal-phone-email-input', 'signup-modal-phone-email-input']


        if(checkClassName.includes(targetClass)) {
            setaccountInputFieldVal(inputVal)
        } else {
            setPasswordInputFieldVal(inputVal)
        }
  
    }

    // Validate email format
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    // Validate phone(Taiwan) format
    function phoneIsValid(phone) {
        var cell = /^[09]{2}[0-9]{8}$/.test(phone)
        var landline = /^[2]{1}[0-9]{7}$/.test(phone)
        if(cell || landline) {
            return true
        } else {
            return false
        }
    }


    return (
        <>
            <ContextProvider.Provider value={contextValues}>
                {/* MODAL BACKDROP */}
                <div className="back-drop" onClick={closeResetStep}></div>

                {/* MODAL */}
                <div className={actualModalContent.modalClassName} onClick={e => e.stopPropagation()}>

                    <div className="modal-content">

                        {/* HEADER */}
                        <div className="modal-header">
                            <div onClick={actualModalContent.iconFunc} className="modal-header-btn">
                                {actualModalContent.icon}
                            </div>
                            
                            <p className="modal-header-title">{actualModalContent.title}</p>
                        </div>

                        {/* CONTENT */}
                        { actualModalContent.content }

                    </div>

                </div>
            </ContextProvider.Provider>
        </>
    )
}

export default ModalAuth
