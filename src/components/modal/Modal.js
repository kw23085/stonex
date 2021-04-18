import './modal.css';
import CloseIcon from '../../icons/close.png';
import RegisterModal1 from './registerModal1';

function Modal({ open, closeModal }) {
    // Show Modal or No
    if(!open) return null;
    

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop" onClick={closeModal}></div>

            {/* MODAL */}
            <div className="modal-wrapper" onClick={e => e.stopPropagation()}>

                <div className="modal-content">
                    {/* HEADER */}
                    <div className="modal-header">
                        <button onClick={closeModal} className="modal-header-btn">
                            <img src={CloseIcon} alt="close-icon"/>
                        </button>
                        <p className="modal-header-title">會員註冊</p>
                    </div>

                    <RegisterModal1 />

                </div>

            </div>
        </>
    )
}

export default Modal
