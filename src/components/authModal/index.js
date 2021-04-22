import { useState } from 'react';
import './index.css';
import CloseIcon from '../../icons/close.png';
import PrevIcon from '../../icons/prev.png'
import AuthEmail from './authEmail';
import AuthOtp from './authOtp';

function Modal({ open, closeModal }) {
    // Step
    let [step, setStep] = useState('signup');

    // Show Modal or No
    if(!open) return null;

    // Contents
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <AuthEmail handleNext={handleNext} />,
            icon: <img src={CloseIcon} alt="close-icon"/>,
            iconFunc: closeModal
        },
        otp: {
            title: '請輸入驗證碼',
            content: <AuthOtp />,
            icon: <img src={PrevIcon} alt="close-icon"/>,
            iconFunc: resetStep
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
        setStep('otp');
    }

    // Reset step 
    function resetStep() {
        setStep('signup')
    }

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop" onClick={() => {closeModal(); resetStep()}}></div>

            {/* MODAL */}
            <div className="modal-wrapper" onClick={e => e.stopPropagation()}>

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

export default Modal
