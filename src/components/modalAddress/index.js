import './index.css'
import { useEffect } from 'react'
import InputFieldUserInfo from '../inputFieldUserInfo'
import DropDownMenu from '../dropdownMenu'
import { CityAreaProvider } from '../../ContextAPI/contextCityArea'

function ModalAddress({ addressClickType, name, address, phone, city, area }) {

    // const fieldsArr = [
    //     {
    //         type: 'input',
    //         placeholder: '姓名',
    //         value: '王大明'
    //     },
    //     {
    //         type: 'input',
    //         placeholder: '手機號碼',
    //         value: '(0909)099-099'
    //     },
    //     {
    //         type: 'dropdown',
    //         function: 'city'
    //     },
    //     {
    //         type: 'dropdown',
    //         function: 'area'
    //     },
    //     {
    //         type: 'input',
    //         placeholder: '地址',
    //         value: '信義路三段95號六樓之二'
    //     }
    // ]

    let actualName
    let actualAddress
    let actualPhone
    let actualCity
    let actualArea

    if(addressClickType === 'new') {
        let actualName = ''
        let actualAddress = ''
        let actualPhone = ''
        let actualCity = ''
        let actualArea = ''
    } else {
        let actualName = name
        let actualAddress = address
        let actualPhone = phone
        let actualCity = city
        let actualArea = area
    }

    const fieldsArr = [
        <InputFieldUserInfo placeholder='姓名' value={actualName} />,
        <InputFieldUserInfo placeholder='手機號碼' value={actualPhone}/>,
        <DropDownMenu />,
        <DropDownMenu />,
        <InputFieldUserInfo placeholder='地址' value={actualAddress} />
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

                    </div>

                </div>
            </CityAreaProvider>
        </>
    )
}

export default ModalAddress
