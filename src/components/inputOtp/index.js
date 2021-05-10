import './index.css'

function InputOtp({ index, onKeyDownFunc, currentInputRef, className }) {

    return (
            <div ref={currentInputRef} id={'otp' + index} className={className} tabIndex={0} onKeyDown={onKeyDownFunc} >
                <p id={index} className="validation-num"></p>
            </div>
    )
}

export default InputOtp
