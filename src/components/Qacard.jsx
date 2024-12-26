import React from 'react'
import styles from '../pages/Styles.module.css'

const Qacard = ({questionData,questionNumber,totalQuestion,handleAnswer,quitQuiz}) => {
  console.log(questionData,questionNumber,totalQuestion,handleAnswer,quitQuiz)
  return (
    <div className="card shadow m-5 p-4">
      {/* header section start */}
      <div className={styles.QAcardheader}>
        <h2>
          TotalQuestion :{questionNumber} of {totalQuestion}
        </h2>
        {/* button to quit the Quiz */}
        <button 
        className="btn btn-danger px-5"
        onClick={()=>quitQuiz()}
        >
          Quit
        </button>
      </div>
      {/* header section end */}
      {/* card-body-start */}
      <div className="card-body">
        {/* questions */}
        <h3 className={styles.questions}>{questionData?.question}</h3>
        {/* options start */}
        <div className="d-flex flex-column gap-4">
          {questionData?.options.map((option) => (
            <button
              className={styles.optionbtn}
              key={option}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {/* card-body-end */}
    </div>
  )
}

export default Qacard