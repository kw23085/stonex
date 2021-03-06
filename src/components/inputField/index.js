import './index.css'
import CloseIcon from '../../icons/close.png'
import classnames from 'classnames'
import { useState } from 'react'
import { useModalAuthContext } from '../../ContextAPI/contextModalAuth'

function InputField({ type, id, placeholder, isPhoneEmail, className, onChange, value}) {


    const [isFocus, setIsFocus] = useState(false)
    const { isValidPhoneEmail } = useModalAuthContext()

    const inputFieldName = 'input ' + className + '-input'
    const placeHolderName = 'placeholder ' + className + '-placeholder'

    function focusFunc() {
        setIsFocus(true)
    }

    function blurFunc() {
        setIsFocus(false)
    }

    let inputFieldIconClassName = classnames({
        "inputfield-close-icon": true,
        "show": isFocus 
    })

    let inputFieldClassName = classnames({
        [inputFieldName]: true,
        "green": isValidPhoneEmail && isPhoneEmail
    })

    let placeHolderClassName = classnames({
        [placeHolderName]: true,
        "green": isValidPhoneEmail && isPhoneEmail
    })

    return (
        <>
            <label className={'custom-field ' + className}>
                <input type={type} id={id} className={inputFieldClassName} onChange={onChange} value={value} required onFocus={focusFunc} onBlur={blurFunc}/>
                <span className={placeHolderClassName}>{placeholder}</span>
                <button className={inputFieldIconClassName}>
                    <img className="inputfield-close-icon-img" src={CloseIcon} alt="close-icon" />
                </button>
            </label>
        </>
    )

}

export default InputField