import './index.css'

function InputOtp({ index, onKeyDownFunc, currentInputRef, className, checkedInput }) {

    return (
            <div ref={currentInputRef} id={'otp' + index} className={className} tabIndex={0} onKeyDown={onKeyDownFunc} >
                <p id={index} className="validation-num">{checkedInput}</p>
            </div>
    )
    
}

export default InputOtp