import './index.css'
import CloseIcon from '../../icons/close.png'
import classnames from 'classnames'
import { useState, useContext } from 'react'
import { ContextProvider } from '../modalAuth'

function InputField({ type, id, placeholder, className, onChange, value}) {

    const [isFocus, setIsFocus] = useState(false)

    const contextObject = useContext(ContextProvider)
    const emailIsValid = contextObject.emailIsValid
    const phoneIsValid = contextObject.phoneIsValid
    const accountInputFieldVal = contextObject.accountInputFieldVal

    let isEmailPhone = className.includes('phone-email')

    let inputDefaultClassName = 'input ' + className + '-input'

    let inputFieldIconClassName = classnames({
        "inputfield-close-icon": true,
        "show": isEmailPhone && isFocus
    })

    let inputFieldClassName = classnames({
        [inputDefaultClassName]: className,
        "green": isEmailPhone && emailIsValid(accountInputFieldVal)
    })

    return (
        <>
            <label className={'custom-field ' + className}>
                <input type={type} id={id} className={inputFieldClassName} onChange={onChange} value={value} required onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
                <span className="placeholder">{placeholder}</span>
                <button className={inputFieldIconClassName}>
                    <img className="inputfield-close-icon-img" src={CloseIcon} alt="close-icon" />
                </button>
            </label>
        </>
    )

}

export default InputField