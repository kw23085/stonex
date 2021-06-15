import { useState } from 'react'
import ModalAddress from '../../../modalAddress'
import InputFieldUserInfo from '../../../inputFieldUserInfo'
import InputAddress from '../../../inputAddress'

function UserInfo() {

    const [ isOpen, setIsOpen ] = useState(false)

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

    const addressInfoArr = [
        {
            id: 0,
            name: '王大明',
            address: '台北市大安區信義路三段95號六樓之三',
            phone: '(0909)099-099'
        },
        {
            id: 1,
            name: '老雞掰',
            address: '台北市新店區中正路35號',
            phone: '(0808)088-088'
        }
    ]

    return (
        <>
            <div className="user-info-content">
                <div className="user-info-container">
                    <div className="user-info-title-wrapper">
                        <span className="user-info-title">我的資料</span>
                    </div>
                    {
                        userInfoArr.map(field => {
                            return <InputFieldUserInfo type='text' placeHolder={field.placeholder} key={field.id} value={field.value} />
                        })
                    }
                </div>
                <div className="user-info-address-container">
                    <div className="user-info-address-title-wrapper">
                        <span className="user-info-address-title">地址管理</span>
                        <span className="add-address-link">新增地址</span>
                    </div>
                    {
                        addressInfoArr.map((info, index) => {
                            return <InputAddress setIsOpen={setIsOpen} key={info.id} name={info.name} address={info.address} phone={info.phone} id={info.id} />
                        })
                    }
                </div>
            </div>
            {/* <ModalAddress /> */}
        </>

    )
}

export default UserInfo