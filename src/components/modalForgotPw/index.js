import './index.css'
import { ContextProvider } from '../modalAuth'
import { useContext } from 'react'
import InputField from '../inputField'
import BtnLongBlue from '../btnLongBlue'

function ModalForgotPw({ handleNext }) {

    const contextObject = useContext(ContextProvider)
    const nextBtnFunc = contextObject.nextBtnFunc


    return (
        <div className="inner-modal-content">
            <div className="forgot-password-msg">
                <p>請輸入您的手機號碼或Email</p>
            </div>
            <InputField className="forgot-password-phone-email" type="text" placeholder="電話號碼/ Email"/>
            <BtnLongBlue className="forgot-password-btn-next" onClick={nextBtnFunc} btnText="下一步"/>
        </div>
    )
}

export default ModalForgotPw
