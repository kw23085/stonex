import '../index.css'
import GoogleIcon from '../../../icons/google.png'

function BtnGoogle() {
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
