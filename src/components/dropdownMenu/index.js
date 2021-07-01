import './index.css'
import { useState } from 'react'
import forwardIcon from '../../icons/forward.png'
import { useCityAreaContext } from '../../ContextAPI/contextCityArea'
import shortid from 'shortid'

function DropDownMenu({ city, area }) {

    const [isActive, setIsActive] = useState(false)

    const { cityAreaList, setSelectedCity, selectedCity } = useCityAreaContext()

    const cities = Object.keys(cityAreaList)

    function selectCity(e) {
        setSelectedCity(e.target.innerText)
        setIsActive(false)
    }

    consolelog('its cold at nice is good')

    return (
        <div className="dropdown">
            <div className="dropdown-btn" tabIndex={0} onClick={() => setIsActive(!isActive)}>
                <span className="text">{selectedCity}</span>
                <img className="forward-icon" src={forwardIcon} alt="forward-icon"/>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {
                        cities.map(city => {
                            
                            return <div className="dropdown-item" key={shortid.generate()} onClick={selectCity}>
                                        <span className="text"></span>
                                    </div>
                        })
                    }
                </div>
            )}

        </div>
    )
}

export default DropDownMenu
