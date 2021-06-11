import InputFieldUserInfo from '../../../inputFieldUserInfo'

function UserInfo() {

    const fieldInfo = [
        {
            id: '1',
            placeholder: '暱稱',
            value: '王大明'
        },
        {
            id: '2',
            placeholder: '手機號碼',
            value: '0922207733'
        },
        {
            id: '3',
            placeholder: 'Email',
            value: 'kw1017@gmail.com'
        }
    ]

    return (
        <div className="user-info-content">
            <div className="user-info-container">
                <div className="user-info-title-wrapper">
                    <span className="user-info-title">我的資料</span>
                </div>
                {
                    fieldInfo.map(field => {
                        return <InputFieldUserInfo type='text' placeHolder={field.placeholder} key={field.id} value={field.value} />
                    })
                }
            </div>
            <div className="user-info-address-container">
                <div className="user-info-address-title-wrapper">
                    <span className="user-info-address-title">地址管理</span>
                    <span className="add-address-link">新增地址</span>
                </div>

            </div>
        </div>
    )
}

export default UserInfo