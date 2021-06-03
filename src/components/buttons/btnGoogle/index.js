import '../index.css'
import GoogleIcon from '../../../icons/google.png'
// import { useGoogleAuth } from '../../../ContextAPI/contextGAuth'

function BtnGoogle() {

    // Get google auth signin function
    // const { signIn } = useGoogleAuth().googleAuth

    return (
        <>
            <button className="btn btn-google">
                <img className="google-icon" src={GoogleIcon} alt="google-icon" />
                <p className="btn-google-text">Google</p>
            </button>
        </>
    )
}

export default BtnGoogle
