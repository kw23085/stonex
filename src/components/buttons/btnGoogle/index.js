import '../index.css'
import GoogleIcon from '../../../icons/google.png'
import { ContextProvider } from '../../modalAuth'
import { useContext } from 'react'

function BtnGoogle() {

    const contextObject = useContext(ContextProvider)
    const googleOauth = contextObject.googleOauth

    return (
        <>
            <button className="btn btn-google" onClick={googleOauth}>
                <img className="google-icon" src={GoogleIcon} alt="google-icon" />
                <p className="btn-google-text">Google</p>
            </button>
        </>
    )
}

export default BtnGoogle
