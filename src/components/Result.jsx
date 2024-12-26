import React from 'react'

import Confetti from 'react-confetti'

const Result = ({result, totalQuestion,quitQuiz,retakeQuiz}) => {
  let isHighscore=result==totalQuestion;
  return (
    <div className='text-center mt-5'>
      {isHighscore &&  <Confetti recycle={false} numberOfPieces={300}  />}
      {/* displaying the quiz completed */}
      <h2 className='text-center'> Quiz Completed</h2>
      {/* displaying the score */}
      <p className='text-center p-3'>Score: <strong>{result}/{totalQuestion}</strong></p>
      {/* displaying the  buttons to retake or Quit */}
      <div className="result-buttons d-flex justify-content-center my-2 p-3">
          <button className='btn btn-success mx-2 px-4' onClick={()=>retakeQuiz()}>Retake</button>
          <button className='btn btn-danger px-4'  onClick={()=>quitQuiz()}>Quit</button>
      </div>
    </div>
  )
}

export default Result