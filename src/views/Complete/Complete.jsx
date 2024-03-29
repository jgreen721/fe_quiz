import React from 'react'
import Confetti from "react-confetti"
import "./Complete.css"

const Complete = ({category,correct,restartGame}) => {
  return (
 
          <div className="parent-row align-start spin">
      {/* <!-- mb-6 offsets the column height to end at quiz questions bottom --> */}
      <div className="content-column">
      
        <h2 className="thin">Quiz completed</h2>
        <h2>You scored...</h2>
      </div>
      <div className="content-column">
        <div className="results-card">
          {correct >= 7 &&
        <div className="content-glitter-overlay">
          <Confetti/>
        </div>
}
          <div className="category-row flex align-center">
            <img src={category.icon} alt="" />
            <h4>{category.name}</h4>
          </div>
          <h1 className={correct >= 7 ? "green-text" : "red-text"}>{correct}</h1>
          <h5 className="muted thin">out of 10</h5>
        </div>
        <button onClick={restartGame} className="btn primary-btn">Play Again</button>
      </div>

 </div>
  )
}

export default Complete