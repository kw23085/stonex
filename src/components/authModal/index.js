import { useState } from 'react';
import './index.css';
import CloseIcon from '../../icons/close.png';
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
            content: <AuthEmail handleNext={handleNext} />
        },
        otp: {
            title: '請輸入驗證碼',
            content: <AuthOtp />
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
        setStep(prevStep => prevStep + 1);
        console.log(step);
    }

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop" onClick={closeModal}></div>

            {/* MODAL */}
            <div className="modal-wrapper" onClick={e => e.stopPropagation()}>

                <div className="modal-content">

                    {/* HEADER */}
                    <div className="modal-header">
                        <div onClick={closeModal} className="modal-header-btn">
                            <img src={CloseIcon} alt="close-icon"/>
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
