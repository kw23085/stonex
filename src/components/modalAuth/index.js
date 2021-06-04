import './index.css'
import CloseIcon from '../../icons/close.png'
import PrevIcon from '../../icons/prev.png'
import ModalSignUp from './modalSignUp'
import ModalSignUpOtpPhone from './modalSignUpOtpPhone'
import ModalSignUpOtpEmail from './modalSignUpOtpEmail'
import ModalSuccess from './modalSuccess'
import ModalLogin from './modalLogin'
import ModalForgotPw from './modalForgotPw'
import ModalAltLogin from './modalAltLogin'
import ModalLoginOtpPhone from './modalLoginOtpPhone'
import ModalLoginOtpEmail from './modalLoginOtpEmail'
import { useModalAuthContext } from '../../ContextAPI/contextModalAuth'


function ModalAuth() {

    const { isOpen, step, closeResetStep, handleModalTraverse } = useModalAuthContext()

    // Show Modal or No
    if(!isOpen) return null;

    // Modals
    let modalContent = {
        signup: {
            title: '會員註冊',
            content: <ModalSignUp />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalSignUpOtpPhone />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        signUpOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalSignUpOtpEmail />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        success: {
            title: '完成註冊',
            content: <ModalSuccess />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper-large'
        },
        altLogin: {
            title: '選擇註冊方式',
            content: <ModalAltLogin />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        login: {
            title: '會員登入',
            content: <ModalLogin />,
            icon: <img src={CloseIcon} className="close-icon" alt="close-icon"/>,
            modalClassName: 'modal-wrapper-medium'
        },
        forgotPassword: {
            title: '忘記密碼',
            content: <ModalForgotPw />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        loginOtpPhone: {
            title: '請輸入驗證碼',
            content: <ModalLoginOtpPhone />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        },
        loginOtpEmail: {
            title: '驗證信已傳送',
            content: <ModalLoginOtpEmail />,
            icon: <img src={PrevIcon} className="prev-icon" alt="prev-icon"/>,
            modalClassName: 'modal-wrapper'
        }
    }

    var actualModalContent;

    if(modalContent[step]) {
        actualModalContent = modalContent[step]
    } else {
        actualModalContent = modalContent['signup']
    }

    console.log(step)
    console.log(isOpen)

    return (
        <>
                {/* MODAL BACKDROP */}
                <div className="back-drop" onClick={closeResetStep}></div>

                {/* MODAL */}
                <div className={actualModalContent.modalClassName} onClick={e => e.stopPropagation()}>

                    <div className="modal-content">

                        {/* HEADER */}
                        <div className="modal-header">
                            <div onClick={handleModalTraverse} className="modal-header-btn">
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

export default ModalAuth
