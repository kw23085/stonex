import './index.css'
import { useEffect } from 'react'
import InputFieldUserInfo from '../inputFieldUserInfo'
import DropDownMenu from '../dropdownMenu'
import { CityAreaProvider } from '../../ContextAPI/contextCityArea'

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

    // Prevent background to scroll
    useEffect(() => {

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }

    }, [])

    return (
        <>
            <CityAreaProvider>
                {/* Modal Backdrop */}
                <div className="user-back-drop"></div>
                {/* Modal */}
                <div className="user-modal-wrapper" onClick={e => e.stopPropagation()}>

                    <div className="user-modal-content">
                        <span className="title">編輯地址</span>
                        <DropDownMenu />
                    </div>

                </div>
            </CityAreaProvider>
        </>
    )
}

export default ModalAddress
