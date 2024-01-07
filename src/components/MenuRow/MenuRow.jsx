import React from 'react'
import ThemePicker from "../ThemePicker/ThemePicker"
import {accessibilityIcon} from "../../const"
import "./MenuRow.css"

const MenuRow = ({category,setAppTheme,appTheme}) => {
  return (
    <div className={category?.name ? "menu-row menu-row-between" : "menu-row menu-row-end"}>
              {category?.name && 

      <div className="quiz-name-row">
        <div className="quiz-logo-div">
          <img src={category.icon} alt="" />
        </div>
        <h5>{category.name}</h5>
      </div>
}
      <ThemePicker appTheme={appTheme} setAppTheme={setAppTheme}/>
    </div>
  )
}

export default MenuRow