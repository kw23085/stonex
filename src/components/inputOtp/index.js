import './index.css'

function InputOtp({ displayNum, formatInput }) {
    return (
        <>
            <input className="validation-num otp1" type="number" onChange={displayNum} onKeyDown={formatInput}/>
        </>
    )
}

export default InputOtp
