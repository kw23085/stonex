import './index.css'
import { useState } from 'react'
import InputField from '../inputField';
import BtnNext from '../btnNext';
import BtnGoogle from '../btnGoogle';
import BtnFacebook from '../btnFacebook';

function ModalLogin({ forgotPassword, handleNext }) {

    const [emailInputFieldVal, setEmailInputFieldVal] = useState('')
    const [passwordInputFieldVal, setPasswordInputFieldVal] = useState('')

    const inputFieldArr = [
        {
            className: 'login-modal-phone-email',
            type: 'text',
            placeholder: '電話號碼/ Email',
            value: emailInputFieldVal
        },
        {
            className: 'login-modal-password',
            type: 'text',
            placeholder: '密碼',
            value: passwordInputFieldVal
        }
    ]


    function updateEmailFieldVal(e) {

        let targetClass = e.target.classList[1]
        let inputVal = e.target.value

        if(targetClass === 'login-modal-phone-email-input') {
            setEmailInputFieldVal(inputVal)
        } else {
            setPasswordInputFieldVal(inputVal)
        }

    }


    return (
        <div className="inner-modal-content">
            {
                inputFieldArr.map((inputField) => {

                    return <InputField key={inputField.className} className={inputField.className} type="text" placeholder={inputField.placeholder} onChange={updateEmailFieldVal} value={inputField.value}/>
                })
            }
            <div className="forgot-password">
                <p className="modal-link register-link" onClick={forgotPassword}>忘記密碼 ?</p>
            </div>
            <BtnNext className="btn-next-login" onClick={handleNext}/>
            <h2 className="horizontal-line-login"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
        </div>
    )
}

export default ModalLogin
