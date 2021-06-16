import { useState } from 'react'
import ModalAddress from '../../../modalAddress'
import InputFieldUserInfo from '../../../inputFieldUserInfo'
import InputAddress from '../../../inputAddress'

function UserInfo() {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ addressClickType, setAddressClickType ] = useState(null)
    const [ addressId, setAddressId ] = useState(null)

    // User info
    const userInfoArr = [
        {
            id: '1',
            placeholder: '暱稱',
            value: '王大明'
        },
        {
            id: '2',
            placeholder: '手機號碼',
            value: '(0909)099-099'
        },
        {
            id: '3',
            placeholder: 'Email',
            value: 'kw1017@gmail.com'
        }
    ]

    // Address info
    const addressInfoArr = [
        {
            id: 0,
            name: '王大明',
            city: '台北市',
            area: '大安區',
            address: '信義路三段95號六樓之三',
            phone: '(0909)099-099'
        },
        {
            id: 1,
            name: '老雞掰',
            city: '台北市',
            area: '新店區',
            address: '中正路35號',
            phone: '(0808)088-088'
        }
    ]

    function editAddressClick(e) {

        let id = e.currentTarget.id
        let className = e.currentTarget.className

        if(className === 'add-address-link') {
            setAddressClickType('new')
            console.log('new')
        } else {
            if(typeof id !== null) {
                setAddressClickType('edit')
                setAddressId(id)
            }
        }

    }

    let modalAddressComponent

    if(addressClickType === 'new') {
        modalAddressComponent = <ModalAddress addressClickType={addressClickType} />
    } else if(addressClickType === 'edit') {
        let currentAddress = addressInfoArr[addressId]
        let name = currentAddress.name
        let address = currentAddress.address
        let phone = currentAddress.phone
        let city = currentAddress.city
        let area = currentAddress.area
        modalAddressComponent = <ModalAddress addressClickType={addressClickType} name={name} address={address} phone={phone} city={city} area={area} />
    }

    return (
        <>
            <div className="user-info-content">
                <div className="user-info-container">
                    <div className="user-info-title-wrapper">
                        <span className="user-info-title">我的資料</span>
                    </div>
                    {
                        userInfoArr.map(field => {
                            return <InputFieldUserInfo type='text' placeholder={field.placeholder} key={field.id} value={field.value} />
                        })
                    }
                </div>
                <div className="user-info-address-container">
                    <div className="user-info-address-title-wrapper">
                        <span className="user-info-address-title">地址管理</span>
                        <span className="add-address-link" onClick={editAddressClick}>新增地址</span>
                    </div>
                    {
                        addressInfoArr.map((info) => {
                            return <InputAddress setIsOpen={setIsOpen} key={info.id} name={info.name} address={info.address} phone={info.phone} id={info.id} editAddressClick={editAddressClick}/>
                        })
                    }
                </div>
            </div>
            {modalAddressComponent === undefined ?
             (
                null
             ) : (
                modalAddressComponent
             )
            }
        </>

    )
}

export default UserInfo