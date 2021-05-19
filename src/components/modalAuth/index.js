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
    const [accountInputFieldVal, setAccountInputFieldVal] = useState('')
    const [passwordInputFieldVal, setPasswordInputFieldVal] = useState('')

    console.log(step)

    const inputFieldRef = useRef()

    const contextValues = {
        handleModalTraverse: handleModalTraverse,
        inputFieldRef: inputFieldRef,
        accountInputFieldVal: accountInputFieldVal,
        passwordInputFieldVal: passwordInputFieldVal,
        updateInputFieldVal: updateInputFieldVal
    }

    // Show Modal or No
    if(!open) return null;

    // Modals
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <ModalSignUp />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalSignUpOtpPhone />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalSignUpOtpEmail />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        success: {
            title: '完成註冊',
            content: <ModalSuccess />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper-large'
        },
        altLogin: {
            title: '選擇註冊方式',
            content: <ModalAltLogin />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        login: {
            title: '會員登入',
            content: <ModalLogin />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper-medium'
        },
        forgotPassword: {
            title: '忘記密碼',
            content: <ModalForgotPw />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        loginOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalLoginOtpPhone />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        loginOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalLoginOtpEmail />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
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
    function handleModalTraverse(e) {
        // Check if there is an event and set variable
        const targetClassName = e ? e.target.className : false
        console.log(targetClassName)

        // Check what is clicked and set variables
        const isSignUpLink = targetClassName ? targetClassName.includes('signup-link') : false
        const isAltRegisterLink = targetClassName ? targetClassName.includes('alt-register-link') : false
        const isForgotPasswordLink = targetClassName ? targetClassName.includes('forgot-password-link') : false
        const isLoginLink = targetClassName ? targetClassName.includes('login-link') : false
        const isCloseIcon = targetClassName ? targetClassName.includes('close-icon') : false
        const isPrevIcon = targetClassName ? targetClassName.includes('prev-icon') : false
        const isAgreeBtn = targetClassName ? targetClassName.includes('auth-success-agree-btn') : false

        // Handle modal traverse logic

        switch(step) {

            case 'signup':
                if(isCloseIcon) {
                    closeModal()
                    setStep('signup')
                    clearAccPwVal()
                    break;
                } else if(isSignUpLink) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpEmail')
                    break;
                } else if(phoneIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpPhone')
                    break;
                } 
                break;
                
            case 'signUpOtpPhone':
                if(isPrevIcon) {
                    setStep('signup')
                    break;
                } else if(isAltRegisterLink) {
                    setStep('altLogin')
                    clearAccPwVal()
                    break;
                }
                setStep('success')
                clearAccPwVal()
                break;

            case 'signUpOtpEmail':
                if(isCloseIcon) {
                    closeModal()
                    setStep('signup')
                    clearAccPwVal()
                    break;
                }
                setStep('login')
                break;
            
            case 'login':
                if(phoneIsValid(accountInputFieldVal)) {
                    setStep('loginOtpPhone')
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('loginOtpEmail')
                    break;
                } else if(isForgotPasswordLink) {
                    setStep('forgotPassword')
                    clearAccPwVal()
                    break;
                } else if(isCloseIcon) {
                    closeModal()
                    setStep('signup')
                    clearAccPwVal()
                    break;
                }
                break;

            case 'loginOtpEmail':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                setStep('success')
                break;

            case 'loginOtpPhone':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                setStep('success')
                break;

            case 'altLogin':
                if(phoneIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpPhone')
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpEmail')
                    break;
                } else if(isLoginLink) {
                    setStep('login')
                    break;
                }
                break;

            case 'forgotPassword':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                break;

            case 'success':
                if(isCloseIcon) {
                    closeModal()
                    setStep('signup')
                    break;
                } else if(isAgreeBtn) {
                    setStep('login')
                    closeModal()
                    clearAccPwVal()
                    break;
                }
                break;

            default:
                break;
        }

    }

    // Close and reset modal
    function closeResetStep() {
        closeModal();
        setStep('signup');
        clearAccPwVal()
    }

    // Update inputfield value
    function updateInputFieldVal(e) {

        let targetClass = e.target.classList[1]
        let inputVal = e.target.value
        let checkClassName = ['login-modal-phone-email-input', 'signup-modal-phone-email-input']


        if(checkClassName.includes(targetClass)) {
            setAccountInputFieldVal(inputVal)
        } else {
            setPasswordInputFieldVal(inputVal)
        }
  
    }

    // Clear account/pw field state
    function clearAccPwVal() {
        setAccountInputFieldVal('')
        setPasswordInputFieldVal('')
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

    console.log(accountInputFieldVal)

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
                            <div onClick={handleModalTraverse} className="modal-header-btn">
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
