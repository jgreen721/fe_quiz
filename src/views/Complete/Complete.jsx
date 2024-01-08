import React from 'react'
import "./Complete.css"

const Complete = ({category,correct,restartGame}) => {
  return (
 
          <div className="parent-row align-start">
      {/* <!-- mb-6 offsets the column height to end at quiz questions bottom --> */}
      <div className="content-column">
        <h2 className="thin">Quiz completed</h2>
        <h2>You scored...</h2>
      </div>
      <div className="content-column">
        <div className="results-card">
          <div className="category-row flex align-center">
            <img src={category.icon} alt="" />
            <h4>{category.name}</h4>
          </div>
          <h1>{correct}</h1>
          <h5 className="muted thin">out of 10</h5>
        </div>
        <button onClick={restartGame} className="btn primary-btn">Play Again</button>
      </div>

 </div>
  )
}

export default Complete