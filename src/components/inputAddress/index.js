import './index.css'
import classnames from 'classnames'
import deleteIcon from '../../icons/delete.png'

function InputAddress({ id, name, address, phone, setIsOpen, editAddressClick }) {

    // Dynamic class names
    var defaultMark = classnames({
        'default-mark': true,
        'show': id === 0
    })

    // Address container class name
    var addressContainer = 'address-container ' + 'container-' + id

    // Edit address click
    function clickFunc(e) {
        editAddressClick(e)
        setIsOpen(true)
    }

    return (
        <div id={id} className={addressContainer} onClick={clickFunc}>
            <div className="name-container">
                <span className="name">{name}</span>
                <div className={defaultMark}>
                    <span>預設</span>
                </div>
            </div>
            <div className="info">
                <span className="address">{address}</span>
                <span className="phone">{phone}</span>
            </div>
            <div className="icon-container">
                <img src={deleteIcon} className="delete-icon" alt="delete-icon" />
            </div>
        </div>
    )
}

export default InputAddress
