import { useState } from 'react';
import './modal.css';
import CloseIcon from '../../icons/close.png';
import RegisterModal1 from './registerModal1';
import RegisterModal2 from './registerModal2';

function Modal({ open, closeModal }) {
    // Step
    let [step, setStep] = useState('signup');

    // Show Modal or No
    if(!open) return null;

    // Contents
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <RegisterModal1 handleNext={handleNext} />
        },
        otp: {
            title: '請輸入驗證碼',
            content: <RegisterModal2 />
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
