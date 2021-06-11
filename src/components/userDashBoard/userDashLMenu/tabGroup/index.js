
function TabGroup({ icon, title, iconClassName, subLinks }) {

  return (
    <>
      <div className="user-menu-tab-section-container">
        {/* Title Tab */}
        <div className="user-menu-tab-title-container">
          <div className="user-menu-tab-icon-container">
            <img className={iconClassName} src={icon} alt={iconClassName}/>
          </div>
          <div className="user-menu-tab-text-container">
            <span className="user-menu-tab-text">{title}</span>
          </div>
        </div>
        {/* Sublinks */}
        {
          subLinks.map((link, index) => {
            return  <div className="user-menu-tab-sublinks-container" key={index}>
                      <div className="user-menu-tab-sublink-icon-container"></div>
                      <div className="user-menu-tab-sublink-text-container">
                        <span className="user-menu-tab-sublink-text">{link}</span>
                      </div>
                    </div>
          })
        }
      </div>
    </>
  )
}

export default TabGroup
