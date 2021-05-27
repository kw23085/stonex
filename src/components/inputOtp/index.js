import './index.css'
import classnames from 'classnames'

function InputOtp({ index, onKeyDownFunc, currentInputRef, checkedInput, isLoading }) {

    var otpClassNames = classnames({
        'validation-num-container': true,
        'loading': isLoading,
        'fill': checkedInput
    })

    return (
            <div ref={currentInputRef} id={'otp' + index} className={otpClassNames} tabIndex={0} onKeyDown={onKeyDownFunc} >
                <p id={index} className="validation-num">{checkedInput}</p>
            </div>
    )
    
}

export default InputOtp