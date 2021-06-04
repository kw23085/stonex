import React, { useState, useContext } from 'react'

export const ModalAuthContext = React.createContext()

export function ModalAuthProvider({ children }) {

    // Outh modal isOpen?
    let [isOpen, setIsOpen] = useState(false)

    // Step
    const [step, setStep] = useState('signup');

    // Inputfield Values
    const [accountInputFieldVal, setAccountInputFieldVal] = useState('')
    const [passwordInputFieldVal, setPasswordInputFieldVal] = useState('')
    const [isValidPhoneEmail, setIsValidPhoneEmail] = useState(false)
    
    // Handle next step
    function handleModalTraverse(e) {
        // Check if there is an event and set variable
        const targetClassName = e ? e.target.className : false

        // Set classname variables
        let isAltRegisterLink
        let isForgotPasswordLink
        let isLoginLink
        let isCloseIcon
        let isPrevIcon
        let isAgreeBtn

        // Assign classname variables
        switch(targetClassName) {

            case ('modal-link alt-register-link'):
                isAltRegisterLink = true
                break;

            case ('modal-link forgot-password-link'):
                isForgotPasswordLink = true
                break;
            
            case ('modal-link login-link'):
                isLoginLink = true
                break;

            case ('close-icon'):
                isCloseIcon = true
                break;

            case ('prev-icon'):
                isPrevIcon = true
                break;

            case ('btn-long-blue auth-success-agree-btn'):
                isAgreeBtn = true
                break;

            default:
                break;
        }

        // Handle modal traverse logic
        switch(step) {

            case 'signup':
                if(isCloseIcon) {
                    closeResetStep()
                    break;
                } else if(isLoginLink) {
                    setStep('login')
                    clearAccPwVal()
                    setIsValidPhoneEmail(false)
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpEmail')
                    break;
                } else if(phoneIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpPhone')
                    break;
                } 
                break;
                
            case 'signUpOtpPhone':
                if(isPrevIcon) {
                    setStep('signup')
                    break;
                } else if(isAltRegisterLink) {
                    setStep('altLogin')
                    clearAccPwVal()
                    setIsValidPhoneEmail(false)
                    break;
                }
                setStep('success')
                clearAccPwVal()
                setIsValidPhoneEmail(false)
                break;

            case 'signUpOtpEmail':
                if(isCloseIcon) {
                    setIsOpen(false)
                    setStep('signup')
                    clearAccPwVal()
                    break;
                }
                setStep('login')
                break;
            
            case 'login':
                if(phoneIsValid(accountInputFieldVal)) {
                    setStep('loginOtpPhone')
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('loginOtpEmail')
                    break;
                } else if(isForgotPasswordLink) {
                    setStep('forgotPassword')
                    clearAccPwVal()
                    break;
                } else if(isCloseIcon) {
                    setIsOpen(false)
                    setStep('signup')
                    clearAccPwVal()
                    break;
                }
                break;

            case 'loginOtpEmail':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                setStep('success')
                break;

            case 'loginOtpPhone':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                setStep('success')
                break;

            case 'altLogin':
                if(phoneIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpPhone')
                    break;
                } else if(emailIsValid(accountInputFieldVal)) {
                    setStep('signUpOtpEmail')
                    break;
                } else if(isLoginLink) {
                    setStep('login')
                    break;
                }
                break;

            case 'forgotPassword':
                if(isPrevIcon) {
                    setStep('login')
                    clearAccPwVal()
                    break;
                }
                break;

            case 'success':
                if(isCloseIcon) {
                    setIsOpen(false)
                    setStep('signup')
                    break;
                } else if(isAgreeBtn) {
                    setStep('login')
                    setIsOpen(false)
                    clearAccPwVal()
                    break;
                }
                break;

            default:
                break;
        }

    }

    // Close and reset modal
    function closeResetStep() {
        setIsOpen(false)
        setStep('signup')
        clearAccPwVal()
        setIsValidPhoneEmail(false)
    }

    // Update inputfield value
    function updateInputFieldVal(e) {

        let targetClass = e.target.classList[2]
        let inputVal = e.target.value
        let checkClassName = ['login-modal-phone-email-input', 'signup-modal-phone-email-input']

        if(checkClassName.includes(targetClass)) {
            setAccountInputFieldVal(inputVal)
            if(emailIsValid(inputVal) || phoneIsValid(inputVal)) {
                setIsValidPhoneEmail(true)
            }
           
        } else {
            setPasswordInputFieldVal(inputVal)
            setIsValidPhoneEmail(false)
        }
  
    }

    // Clear account/pw field state
    function clearAccPwVal() {
        setAccountInputFieldVal('')
        setPasswordInputFieldVal('')
    }

    // Validate email format
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    // Validate phone(Taiwan) format
    function phoneIsValid(phone) {
        var cell = /^[09]{2}[0-9]{8}$/.test(phone)
        var landline = /^[2]{1}[0-9]{7}$/.test(phone)
        if(cell || landline) {
            return true
        } else {
            return false
        }
    }

    const providerValues = {
        isOpen,
        setIsOpen,
        step,
        setStep,
        closeResetStep,
        handleModalTraverse,
        accountInputFieldVal,
        passwordInputFieldVal,
        updateInputFieldVal,
        isValidPhoneEmail,
        emailIsValid,
        phoneIsValid
    }

    return(
        <ModalAuthContext.Provider value={ providerValues } >
            {children}
        </ModalAuthContext.Provider>
    )

}

export const useModalAuthContext = () => {
    const context = useContext(ModalAuthContext)
    return context
}