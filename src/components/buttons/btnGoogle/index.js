import '../index.css'
import GoogleIcon from '../../../icons/google.png'
import { useGoogleLogin } from 'react-google-login'

const clientId = '854380704827-5apghi4e463dph5hs6m2i3hdr6s8b5ra.apps.googleusercontent.com'

function BtnGoogle() {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj)
        console.log(res)
    }

    const onFailure= (res) => {
        console.log('Login failed: res:', res)
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: false,
        accessType: 'offline'
    })

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
