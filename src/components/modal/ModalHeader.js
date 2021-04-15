import CloseIcon from '../../icons/close.png';

function ModalHeader({ closeModal }) {
    return (
        <div className="register-modal-header">
            <button onClick={closeModal} className="register-modal-header-btn">
                <img src={CloseIcon}/>
            </button>
            <p className="modal-header-title">會員註冊</p>
        </div>
    )
}

export default ModalHeader
