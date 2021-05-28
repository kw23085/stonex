import './index.css'
import classnames from 'classnames'

function InputOtp({ index, onKeyDownFunc, input, isLoading }) {

    let checkedInput = input === null ? '' : input

    var otpClassNames = classnames({
        'validation-num-container': true,
        'loading': isLoading,
        'fill': checkedInput
    })

    return (
            <div id={'otp' + index} className={otpClassNames} onKeyDown={onKeyDownFunc} >
                <p id={index} className="validation-num">{input}</p>
            </div>
    )
    
}

export default InputOtp