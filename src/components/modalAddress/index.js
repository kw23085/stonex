import './index.css'
import InputFieldUserInfo from '../inputFieldUserInfo'
import DropDownMenu from '../dropdownMenu'

function ModalAddress() {

    const fieldsArr = [
        {
            type: 'input',
            placeholder: '姓名',
            value: '王大明'
        },
        {
            type: 'input',
            placeholder: '手機號碼',
            value: '(0909)099-099'
        },
        {
            type: 'dropdown',
            function: 'city'
        },
        {
            type: 'dropdown',
            function: 'area'
        },
        {
            type: 'input',
            placeholder: '地址',
            value: '信義路三段95號六樓之二'
        }
    ]

    return (
        <>
            {/* Modal Backdrop */}
            <div className="user-back-drop"></div>
            {/* Modal */}
            <div className="user-modal-wrapper">

                <div className="user-modal-content">
                    <span className="title">編輯地址</span>
                    <DropDownMenu />
                </div>

            </div>
        </>
    )
}

export default ModalAddress
