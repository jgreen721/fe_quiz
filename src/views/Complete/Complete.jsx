import React from 'react'

const Complete = ({correct}) => {
  return (
    <div>
        <h1>Quiz is over</h1>
        <h3>You scored {correct} of 10 questions!</h3>
    </div>
  )
}

export default Complete