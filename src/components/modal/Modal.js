import './Modal.css';
import ModalHeader from './ModalHeader';

function Modal({ show, closeModal }) {
    return (
        <>
            { show ? <div className="back-drop"></div> : null }
            <div className="modal-wrapper"
                style={{
                    opacity: show ? '1' : '0'
                }}
            >

                <ModalHeader closeModal={closeModal}/>

                <div className="modal-content">
                    <div className="modal-body">
                        <p>body</p>
                    </div>
                    <div className="modal-footer">
                        <p>footer</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal
