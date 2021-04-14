import icon from '../../icons/close.png';

function ModalHeader() {
    return (
        <div className="register-modal-header">
            <button className="register-modal-header-btn">
                <img src={icon}/>
            </button>
            <p className="modal-header-title">會員註冊</p>
        </div>
    )
}

export default ModalHeader
