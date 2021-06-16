import './index.css'

function InputFieldUserInfo({ type, id, placeholder, value }) {


    return (
        <>
            <label className='user-info-field'>
                <input type={type} id={id} className='user-info-field-input' value={value} required />
                <span className='placeholder'>{placeholder}</span>
            </label>
        </>
    )

}

export default InputFieldUserInfo