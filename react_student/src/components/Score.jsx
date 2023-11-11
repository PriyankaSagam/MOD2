import React from 'react'

function Score({scoreObject}) {
  return (
    <div>
    <div>Student date is {scoreObject.date}</div>
    <div>student Score is:{scoreObject.score}</div>
    </div>
  )
}

export default Score;