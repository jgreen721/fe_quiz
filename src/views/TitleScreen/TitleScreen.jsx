import React from 'react'
import "./TitleScreen.css"

const TitleScreen = ({categories,selectCategory}) => {
  return (
    // <div className="view-container title-screen-parent">
      <div className="parent-row align-center">
      <div className="content-column">
        <div className="title-card">
          <div className="top-title-row title-row">
            <h2 className="drop-in title-h2-one thin">Welcome</h2>
            <h2 className="drop-in title-h2-two thin">to</h2>
            <h2 className="drop-in title-h2-three thin">the</h2>
          </div>
          <div className="bottom-title-row title-row">
            <h2 className="scale bold title-h2-four">Frontend</h2>
            <h2 className="scale bold title-h2-five">Quiz!</h2>
          </div>
          <h4 className="italic thin mt-3 fade-in">Pick a subject to get started</h4>
        </div>
        </div>
        <div className="content-column">
          <ul className="categories">
            {categories.map((c,idx)=>(
              <li key={c.id} className={`category-item drop-in drop-in-${idx+1}`}>
                <button onClick={()=>selectCategory(c)} className="selection-btn">
                <div className="icon-div">
                  <img src={c.icon} alt="" />
                </div>
                <h4>{c.name}</h4>
                </button>
              </li>
            ))}
          </ul>
          <button></button>
        </div>
        </div>
    // </div>
  )
}

export default TitleScreen