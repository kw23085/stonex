import spinner from '../../../icons/loadingspinner.gif'
import checkIcon from '../../../icons/check.png'
import InputOtp from '../../inputOtp'
import { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function ModalLoginOtpPhone() {

    const [inputArr, setInputArr] = useState([null, null, null, null])
    const [currentInputIndex, setCurrentInputIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [resendMessage, setResendMessage] = useState(false)
    const { handleModalTraverse, accountInputFieldVal } = useModalAuthContext()

    const innerModalWrapper = useRef()
    const spinnerGif = useRef()

    // Update inputArr
    function updateInputArr(e) {
        
        // Check if its loading
        if(!isLoading) {

            let key = e.key
            let index = currentInputIndex
            let prevIndex = index <= 0 ? 0 : index -1

            if(INTEGER.includes(parseInt(key))) {
    
                let digit = parseInt(key)
                let inputArrCopy = [...inputArr]
                inputArrCopy[index] = digit
                setInputArr(inputArrCopy)
                setCurrentInputIndex(current => current + 1)
    
            } else if(key === 'Backspace') {
    
                let inputArrCopy = [...inputArr]
                inputArrCopy[prevIndex] = null
                setInputArr(inputArrCopy)
                setCurrentInputIndex(prevIndex)
            }

        }

    }

    function otpReSubmit() {
        setResendMessage(true)
        setTimeout(() => {
            setResendMessage(false)
        }, 2000)
    }

    // Dynamic classnames
    var resendValinum = classnames({
        'modal-link login-otp-re-send-valinum': true,
        'loading': isLoading
    })
    var innerModalContent = classnames({
        'inner-modal-content': true,
        'loading': isLoading
    })
    var spinnerClass = classnames({
        'spinner': true,
        'show': isLoading
    })
    var resubmitMessage = classnames({
        'otp-resubmit-message': true,
        'show': resendMessage
    })

    useEffect(() => {

        innerModalWrapper.current.focus()

        // Check if all inputfield is filled
        let isInputArrFilled = inputArr.every((el) => INTEGER.includes(el)) ? true : false

        if(isInputArrFilled) {
            setIsLoading(true)
            setTimeout(() => {
                handleModalTraverse();
            }, 2000)
        }

    }, [inputArr, handleModalTraverse])

    return (
        <>
            {/* Loading Gif */}
            <img ref={spinnerGif} className={spinnerClass} src={spinner} alt="spinner" />
            <div className={innerModalContent} ref={innerModalWrapper} onKeyDown={updateInputArr} tabIndex="-1">
                {/* Resubmit Message */}
                <div className={resubmitMessage}>
                    <div className="otp-resubmit-icon">
                        <img src={checkIcon} className="check-icon" alt="check-icon" />
                    </div>
                    <p className="resubmit-message">驗證碼已重新傳送</p>
                </div>
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>{accountInputFieldVal}</p>
                </div>
                <div className="otp-validation-num">
                    {
                        inputArr.map((input, index) => {
                           return  <InputOtp key={index} index={index} input={input} isLoading={isLoading} />
                        })
                    }
                </div>
                <div className="login-otp-no-valinum">
                    <p className="no-valinum-txt">沒有收到驗證碼嗎?</p>
                    <p className="no-valinum-txt"><span role="button" className={resendValinum} onClick={otpReSubmit}>重新傳送</span></p>
                </div>
            </div>
        </>
    )
    
}

export default ModalLoginOtpPhone
