import React from 'react'
import Styles from './Styles.module.css'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <div className={Styles.aboutUsContainer}>
    <h1 className={Styles.heading}>About Quizwiz</h1>
    <p className={Styles.description}>
      Welcome to <strong>Quizwiz</strong>! The ultimate destination for software course enthusiasts who love to test their knowledge and enhance their learning. Whether you're diving into coding, databases, web development, or any other software-related field, we have a vast collection of questions for you to master!
    </p>
    <h2 className={Styles.subHeading}>Our Mission</h2>
    <p className={Styles.missionText}>
      Our mission is to provide an engaging and challenging quiz experience for learners and professionals in the software industry. With our wide range of quizzes, you can improve your understanding of various software courses and track your progress.
    </p>
    <h2 className={Styles.subHeading}>Why Choose Quizwiz?</h2>
    <ul className={Styles.featuresList}>
      <li>Comprehensive quizzes for all major software courses</li>
      <li>Track your progress and improve over time</li>
      <li>Daily quizzes to keep your skills sharp</li>
      <li>Interactive and user-friendly interface</li>
    </ul>
    <h2 className={Styles.subHeading}>Join Us Today!</h2>
    <p className={Styles.callToAction}>
      Start your learning journey now and become a master in your chosen software course. Take the quiz and level up your knowledge with Quizwiz!
    </p>
  </div>
  <Footer/>
  </>
  )
}

export default About