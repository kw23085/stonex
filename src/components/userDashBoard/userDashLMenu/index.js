
import TabGroup from './tabGroup'
import profileIcon from '../../../icons/profile.png'
import cartIcon from '../../../icons/cart.png'

function UserDashLMenu() {

  const tabGroupsArr = [
    {
      title: "會員專區",
      iconClassName: 'profile-icon',
      icon: profileIcon,
      subLinks: ['我的資料']
    },
    {
      title: "購物中心",
      iconClassName: 'cart-icon',
      icon: cartIcon,
      subLinks: ['購買清單']
    }
  ]

  return (
    <>
      <div className="user-dash-left-menu">
        <div className="user-menu-tab-group-container">
          {
            tabGroupsArr.map((tab, index) => {
              return <TabGroup icon={tab.icon} title={tab.title} iconClassName={tab.iconClassName} index={index} subLinks={tab.subLinks}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default UserDashLMenu
