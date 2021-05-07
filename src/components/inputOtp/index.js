import './index.css'

function InputOtp({ index, onKeyDownFunc, currentInputRef }) {

    return (
            <div ref={currentInputRef} id={'otp' + index} className="validation-num-container" tabIndex={0} onKeyDown={onKeyDownFunc} >
                <p id={index} className="validation-num"></p>
            </div>
    )
}

export default InputOtp
