import { useState } from 'react';
import './index.css';
import CloseIcon from '../../icons/close.png';
import PrevIcon from '../../icons/prev.png'
import AuthSignUp from './authSignUp';
import AuthOtp from './authOtp';
import AuthSucess from './authSucess';
import AuthLogin from './authLogin';

function AuthModal({ open, closeModal }) {
    // Step
    const [step, setStep] = useState('signup');

    // Show Modal or No
    if(!open) return null;

    // Contents
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <AuthSignUp handleNext={handleNext} login={login}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeModal,
            modalClassName: 'modal-wrapper'
        },
        otp: {
            title: '請輸入驗證碼',
            content: <AuthOtp handleNext={handleNext} altLogin={altLogin}/>,
            icon: <img src={PrevIcon} alt="prev-icon"/>,
            iconFunc: resetStep,
            modalClassName: 'modal-wrapper'
        },
        success: {
            title: '完成註冊',
            content: <AuthSucess closeResetStep={closeResetStep}/>,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper-large'
        },
        altLogin: {
            title: '選擇註冊方式',
            content: <AuthSignUp handleNext={handleNext} />,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper'
        },
        login: {
            title: '會員登入',
            content: <AuthLogin />,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeResetStep,
            modalClassName: 'modal-wrapper-medium'
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
        }
     
    }

    // Reset step 
    function resetStep() {
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

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop" onClick={() => {closeModal(); resetStep()}}></div>

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

export default AuthModal
