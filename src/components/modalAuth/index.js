import { useState } from 'react'
import './index.css'
import CloseIcon from '../../icons/close.png'
import PrevIcon from '../../icons/prev.png'
import ModalSignUp from '../modalSignUp'
import ModalOtp from '../modalOtp'
import ModalSuccess from '../modalSuccess'
import ModalLogin from '../modalLogin'
import ModalForgotPw from '../modalForgotPw'
import ModalAltLogin from '../modalAltLogin'
import ModalLoginOtp from '../modalLoginOtp'

function ModalAuth({ open, closeModal }) {
    // Step
    const [step, setStep] = useState('signup');
    console.log(step)

    // Show Modal or No
    if(!open) return null;

    // Contents
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <ModalSignUp handleNext={handleNext} login={login}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeModal,
            modalClassName: 'modal-wrapper'
        },
        otp: {
            title: '請輸入驗證碼',
            content: <ModalOtp handleNext={handleNext} altLogin={altLogin}/>,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: signUp,
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
            content: <ModalLogin forgotPassword={forgotPassword} handleNext={handleNext} />,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper-medium'
        },
        forgotPassword: {
            title: '忘記密碼',
            content: <ModalForgotPw handleNext={handleNext}/>,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: login,
            modalClassName: 'modal-wrapper'
        },
        loginOtp: {
            title: '請輸入驗證碼',
            content: <ModalLoginOtp handleNext={handleNext}/>,
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
    function handleNext() {

        if(step === 'signup') {
            setStep('otp');
        } else if(step === 'otp') {
            setStep('success');
        } else if(step === 'login') {
            setStep('loginOtp')
        } else if(step === 'forgotPassword') {
            setStep('loginOtp')
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

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop" onClick={() => {closeModal(); signUp()}}></div>

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
        </>
    )
}

export default ModalAuth
