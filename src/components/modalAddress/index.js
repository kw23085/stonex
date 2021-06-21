import './index.css'
import { useEffect } from 'react'
import InputFieldUserInfo from '../inputFieldUserInfo'
import DropDownMenu from '../dropdownMenu'
import { CityAreaProvider } from '../../ContextAPI/contextCityArea'

function ModalAddress({ addressClickType, name, address, phone, city, area }) {

    // let actualName
    // let actualAddress
    // let actualPhone
    // let actualCity
    // let actualArea

    // if(addressClickType === 'new') {
    //     let actualName = ''
    //     let actualAddress = ''
    //     let actualPhone = ''
    //     let actualCity = ''
    //     let actualArea = ''
    // } else {
    //     let actualName = name
    //     let actualAddress = address
    //     let actualPhone = phone
    //     let actualCity = city
    //     let actualArea = area
    // }

    const fieldsArr = [
        <InputFieldUserInfo placeholder='姓名' value={name} />,
        <InputFieldUserInfo placeholder='手機號碼' value={phone}/>,
        <DropDownMenu city={city} area={area}/>,
        <DropDownMenu city={city} area={area}/>,
        <InputFieldUserInfo placeholder='地址' value={address} />
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
                        {
                            fieldsArr.map(item => {
                                return item
                            })
                        }
                    </div>

                </div>
            </CityAreaProvider>
        </>
    )
}

export default ModalAddress
