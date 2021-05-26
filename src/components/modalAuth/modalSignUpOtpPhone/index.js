import './index.css'
import spinner from '../../../icons/loadingspinner.gif'
import checkIcon from '../../../icons/check.png'
import InputOtp from '../../inputOtp'
import { ContextProvider } from '../index'
import { useState, useRef, useEffect, useContext } from 'react'
import ClassNames from 'classnames'

const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function ModalSignUpOtpPhone() {

    const [inputArr, setInputArr] = useState([null, null, null, null])
    const [currentInputIndex, setCurrentInputIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const contextObject = useContext(ContextProvider)
    const handleModalTraverse = contextObject.handleModalTraverse
    const accountInputFieldVal = contextObject.accountInputFieldVal

    const inputRef0 = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const spinnerGif = useRef()
    const reSubmitMessage = useRef();

    const inputRefArr = [inputRef0, inputRef1, inputRef2, inputRef3]

    // Update inputArr
    function updateInputArr(e) {
        
        // Check if its loading
        if(!isLoading) {

            let key = e.key
            let id = e.target.id
            let index = parseInt(id.split('').pop()) 

            setCurrentInputIndex(index)
    
            if(INTEGER.includes(parseInt(key))) {
    
                let digit = parseInt(key)
                
                let inputArrCopy = [...inputArr]
                inputArrCopy[index] = digit
                setInputArr(inputArrCopy)
    
    
            } else if(key === 'Backspace') {
    
                let inputArrCopy = [...inputArr]
                inputArrCopy[index] = null
                setInputArr(inputArrCopy)
    
            }

        }

    }

    function otpReSubmit() {
        
        reSubmitMessage.current.classList.add('show')
        setTimeout(() => {
            reSubmitMessage.current.classList.remove('show')
        }, 2000)
    }

    // Dynamic classnames
    var loading = ClassNames({
        'loading': isLoading
    })

    var show = ClassNames({
        'show': isLoading
    })

    useEffect(() => {

        // Check if all inputfield is empty
        let isInputArrNull = inputArr.every((el) => el === null) ? true : false

        // Check if all inputfield is filled
        let isInputArrFilled = inputArr.every((el) => INTEGER.includes(el)) ? true : false

        // Set input values
        let currentInputVal = inputArr[currentInputIndex]

        // Set input field
        let prevInputField = inputRefArr[(currentInputIndex - 1)] ? inputRefArr[(currentInputIndex - 1)].current : undefined
        let currentInputField = inputRefArr[currentInputIndex].current
        let nextInputField = inputRefArr[(currentInputIndex + 1)] ? inputRefArr[(currentInputIndex + 1)].current : undefined

        // Handle inputfield focus
        // if(isInputArrNull) {
        //     inputRef0.current.focus()
        // } else if(currentInputVal !== null) {
        //     if(nextInputField !== undefined) {
        //         nextInputField.focus()
        //     } else if(nextInputField === undefined && isInputArrFilled) {
        //         setIsLoading(true)
        //         setTimeout(() => {
        //             handleModalTraverse();
        //         }, 2000)
        //     }
        // } else if(currentInputVal === null) {
        //     if(prevInputField !== undefined) {
        //         prevInputField.focus()
        //     }
        // }

        if(isInputArrNull) {
            inputRef0.current.focus()
        }

        switch(true) {

            case (currentInputVal !== null):
                if(nextInputField !== undefined) {
                    nextInputField.focus()
                } else if(nextInputField === undefined && isInputArrFilled) {
                    setIsLoading(true)
                    setTimeout(() => {
                        handleModalTraverse();
                    }, 2000)
                }
                break;

            case (currentInputVal === null):
                if(prevInputField !== undefined) {
                    prevInputField.focus()
                }
                break;

        }


    }, [inputArr])

    return (
        <>
            {/* Loading Gif */}
            <img ref={spinnerGif} className={'spinner ' + show} src={spinner} />
            <div className={'inner-modal-content ' + loading}>
                {/* Resubmit Message */}
                <div ref={reSubmitMessage} className="otp-resubmit-message">
                    <div className="otp-resubmit-icon">
                        <img src={checkIcon} className="check-icon" />
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

                            let currentInputRef = inputRefArr[index]

                            let checkedInput = input === null ? '' : input

                            var otpClassNames = ClassNames({
                                'validation-num-container': true,
                                'loading': isLoading,
                                'fill': input
                            })

                           return  <InputOtp key={index} index={index} checkedInput={checkedInput} className={otpClassNames} onKeyDownFunc={updateInputArr} currentInputRef={currentInputRef}/>
                        })
                    }
                </div>
                <div className="no-valinum">
                    <p className="no-valinum-txt">沒有收到驗證碼嗎?</p>
                    <p className="no-valinum-txt"><span role="button" className={'modal-link re-send-valinum ' + loading} onClick={otpReSubmit}>重新傳送</span>或<span className={'modal-link alt-register-link ' + loading} onClick={handleModalTraverse}>使用不同的註冊方式</span></p>
                </div>
            </div>
        </>
    )
}

export default ModalSignUpOtpPhone
