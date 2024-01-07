import React from 'react'
import { moonDarkIcon,moonLightIcon,sunDarkIcon,sunLightIcon } from '../../const'
import "./ThemePicker.css"

const ThemePicker = ({setAppTheme,appTheme}) => {
  return (
    <div className="theme-picker">
        <div className="theme-picker-row">
            <div className="theme-icon-div">
                <img src={appTheme == "light" ? sunDarkIcon : sunLightIcon} alt="" />
            </div>
        <input onClick={()=>setAppTheme((appTheme)=>appTheme = appTheme == "light" ? "dark" : "light")} type="checkbox" className={appTheme == "dark" ? "theme-picker-input dark-mode" : "theme-picker-input"} />
        <div className="theme-icon-div">
                <img src={appTheme == "light" ?  moonDarkIcon : moonLightIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ThemePicker