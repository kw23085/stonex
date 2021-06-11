import './index.css'

function InputFieldUserInfo({ type, id, placeHolder, value}) {


    return (
        <>
            <label className='user-info-field'>
                <input type={type} id={id} className='user-info-field-input' value={value} required />
                <span className='placeholder'>{placeHolder}</span>
            </label>
        </>
    )

}

export default InputFieldUserInfo