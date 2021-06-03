import '../index.css'
import GoogleIcon from '../../../icons/google.png'
import { useContext } from 'react'
import { GoogleAuthContext } from '../../../ContextAPI/contextGAuth'

function BtnGoogle() {

    // Get google auth values
    const GoogleContextValues = useContext(GoogleAuthContext)
    const { signIn } = GoogleContextValues.googleAuth

    return (
        <>
            <button className="btn btn-google" onClick={signIn}>
                <img className="google-icon" src={GoogleIcon} alt="google-icon" />
                <p className="btn-google-text">Google</p>
            </button>
        </>
    )
}

export default BtnGoogle
