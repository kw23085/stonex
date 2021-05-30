import '../index.css'
import FacebookIcon from '../../../icons/facebook.png'

function BtnFacebook() {
    return (
        <>
            <button className="btn-facebook">
                <img className="facebook-icon" src={FacebookIcon} alt="facebook-icon" />
                <p className="btn-facebook-text">facebook</p>
            </button>
        </>
    )
}

export default BtnFacebook
