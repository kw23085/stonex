import './index.css';

function InputField({ type, id, placeholder, className, onChange, value}) {

    return (
        <>
            <label className={'custom-field ' + className}>
                <input type={type} id={id} className={'input ' + className + '-input'} onChange={onChange} value={value} required/>
                <span className="placeholder">{placeholder}</span>
            </label>
        </>
    )

}

export default InputField
