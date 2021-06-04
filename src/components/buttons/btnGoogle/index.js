import '../index.css'
import GoogleIcon from '../../../icons/google.png'
import { useGoogleAuthContext } from '../../../ContextAPI/contextGAuth'

function BtnGoogle() {

    // Get google auth values
    const { googleAuth: { signIn } } = useGoogleAuthContext()
    
    console.log(signIn)

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
