
import profileIcon from '../../../../icons/profile.png'


function UserTabGroup() {
  return (
    <div className="user-menu-tab-group-container">

      <div className="user-menu-tab-title-container">
        <div className="user-menu-tab-icon-container">
          <img className="profile-icon" src={profileIcon} alt="profile-icon"/>
        </div>
        <div className="user-menu-tab-text-container">
          <span className="user-menu-tab-text">會員專區</span>
        </div>
      </div>

    </div>
  )
}

export default UserTabGroup
