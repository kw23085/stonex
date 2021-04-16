import './modal.css';
import CloseIcon from '../../icons/close.png';

function Modal({ open, closeModal }) {

    if(!open) return null;

    return (
        <>
            {/* MODAL BACKDROP */}
            <div className="back-drop"></div>
            {/* MODAL */}
            <div className="modal-wrapper">

                <div className="modal-content">

                    <div className="modal-header">
                        <button onClick={closeModal} className="modal-header-btn">
                            <img src={CloseIcon} alt="close-icon"/>
                        </button>
                        <p className="modal-header-title">會員註冊</p>
                    </div>

                    <div className="modal-body">
                        <p>body</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Modal
