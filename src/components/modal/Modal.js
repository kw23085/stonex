import './modal.css';
import ModalHeader from './modalHeader';

function Modal({ open }) {

    if(!open) return null;

    return (
        <>
            <div className="back-drop"></div>
            <div className="modal-wrapper">

                <div className="modal-content">

                <ModalHeader />

                    <div className="modal-body">
                        <p>body</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Modal
