
function TabGroup({ index, icon, title, iconClassName, subLinks }) {

  console.log(subLinks)

  return (
    <>
      <div className="user-menu-tab-section-container" key={index}>
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
          subLinks.map(link => {
            return  <div className="user-menu-tab-sublinks-container">
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
