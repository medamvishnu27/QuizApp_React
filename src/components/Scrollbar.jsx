import React from 'react'

const Scrollbar = ({currentQuestion, totalQuestion}) => {
  let prograss = ((currentQuestion + 1) / totalQuestion) * 100;
  return (
    <div className="m-5">
      <div className="progress " style={{ height: "1%" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${prograss}%`, background: "green" }}
          aria-valuenow={prograss}
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <h6 className="text-center m-3">{Math.round(prograss)}% complete</h6>
      </div>
    </div>
  )
}

export default Scrollbar