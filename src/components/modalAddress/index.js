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
    // }e,nbv  

    const userInfo = [
        {
            type: 'inputname',
            placeholder: '姓名',
            ele: <InputFieldUserInfo />,
            value: name
        },
        {
            type: 'inputphone',
            placeholder: '手機號碼',
            ele: <InputFieldUserInfo />,
            value: phone
        },
        {
            type: 'dropdowncity',
            ele: <DropDownMenu />,
            value: city
        },
        {
            type: 'dropdownarea',
            ele: <DropDownMenu />,
            value: area
        },
        {
            type: 'inputaddress',
            placeholder: '地址',
            ele: <InputFieldUserInfo />,
            value: address 
        }
    ]


    userInfo.map(field => {
        let type = field.type
        console.log(type)
        if(type === 'inputname' || 'inputphone' || "inputaddress") {
            // return <InputFieldUserInfo placeholder={field.placeholder} value={field.value} />
            console.log('input')
        } else if(type === 'dropdowncity') {
            // return <DropDownMenu city={field.city} />
            console.log('dropdowncity')
        } else if(type === 'dropdownarea') {
            // return <DropDownMenu area={field.area} />
            console.log('dropdownarea')
        }
    })

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
                        {/* {modalFields} */}
                    </div>

                </div>
            </CityAreaProvider>
        </>
    )
}

export default ModalAddress
