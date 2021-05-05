import './index.css'
import { useRef } from 'react'

function InputOtp({ index, displayNum }) {

    const inputRef0 = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    const inputRefArr = [inputRef0, inputRef1, inputRef2, inputRef3]

    let currentInputRef = inputRefArr[index]


    return (
            <div key={index} ref={currentInputRef} id={'otp' + index} className='validation-num' tabIndex={0} onKeyDown={displayNum} ></div>
    )
}

export default InputOtp
