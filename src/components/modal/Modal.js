import { useState } from 'react';
import './modal.css';
import CloseIcon from '../../icons/close.png';
import RegisterModal1 from './registerModal1';
import RegisterModal2 from './registerModal2';

function Modal({ open, closeModal }) {
    // Step
    let [step, setStep] = useState(0);
    
    // Contents
    let modalContent = [<RegisterModal1 handleNext={handleNext} />, <RegisterModal2 />]

    // Show Modal or No
    if(!open) return null;

    if(step === 0) {
        modalContent = modalContent[0];
    } else if(step === 1) {
        modalContent = modalContent[1];
    }
    
    // Handle next step
    function handleNext() {
        setStep(prevStep => prevStep + 1)
        console.log(step, 'hihi')
    }

    console.log(step)

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
                        <p className="modal-header-title">會員註冊</p>
                    </div>

                    {/* CONTENT */}
                    { modalContent }

                </div>

            </div>
        </>
    )
}

export default Modal
