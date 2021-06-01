import mailIcon from '../../../icons/mail.png'

function BtnCircleEmail() {
    return (
        <>
            <button className="btn btn-circle-email">
                <img className="email-icon" src={mailIcon} alt="email-icon"/>
            </button>
        </>
    )
}

export default BtnCircleEmail
