import React from 'react'
import Footer from '../pages/Footer'

import Testselect from './Testselect'
import Qacard from './Qacard'
import Result from './Result'
import Leaderboard from './Leaderboard'
import Scrollbar from './Scrollbar'

import { useState } from 'react'
import { Question } from '../data/questions'

const Quizapp = () => {
  const[selectcate,setSelectcate]=useState(null)
  const[currentq,setCurrentq]=useState(0)
  const[result,setResult]=useState(0)
  const[shows,setShows]=useState(false)
  const[leaderb,setLeaderb]=useState({})

  // handling the selection category 
  function handleselectcate(category){
    console.log(category)
    setSelectcate(category)
    setCurrentq(0)
    setResult(0)
    setShows(false)
  }

  // handling the answers
  function handleAnswer(selectedOption) {
    // checking the correct anwser
    let correctAnswer = Question[selectcate]?.[currentq]?.solution;
    if (selectedOption === correctAnswer) setResult((prev) => prev + 1);

    // updating the Question
    if (currentq < Question[selectcate].length - 1) {
      setCurrentq((prev) => prev + 1);
    } else {
      setShows(true);
      const updatedLeaderBoard = {
        ...leaderb,
        [selectcate]: Math.max(result + 1, leaderb[selectcate] || 0),
      };
      setLeaderb(updatedLeaderBoard);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderBoard));
    }
  }

   // function for RetakeQuiz 
   function retakeQuiz(){
    setCurrentq(0);
    setResult(0);
    setShows(false);
  }

  // function for Quit 
  function Quit(){
    setSelectcate(null);
    setCurrentq(0);
    setResult(0);
    setShows(false);
  }

  


  return (
    <>
    <div>
      <h1 className="text-center my-3">QuizApp</h1>
      {!selectcate ? (
        <Testselect onselectCategory={handleselectcate} />
      ) : !shows ? (
        <>
        <Scrollbar  currentQuestion={currentq} totalQuestion={Question[selectcate].length} />
          <Qacard
           questionData={Question[selectcate][currentq]}
           questionNumber={currentq+1}
           totalQuestion={Question[selectcate].length}
           handleAnswer={handleAnswer}
           quitQuiz={Quit}
           />
        </>
      ) : (
        <>
        <Result
         result={result}
         totalQuestion={Question[selectcate].length}
         quitQuiz={Quit}
         retakeQuiz={retakeQuiz}
        />
        {/* leaderboard section */}
        <Leaderboard  leaderBoard={leaderb}/>
        </>
      )}
    </div>
    <Footer/>
    </>
    
  )
}

export default Quizapp