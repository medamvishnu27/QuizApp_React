import React from 'react'
import styles from './Styles.module.css'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className={styles.homePage}>
      <div>
        <img src="./src/assets/4.png" alt="no-img" className={styles.Bannerimg}  />
      </div>
      <header className={styles.banner}>
        <h1 className={styles.bannerTitle}>Welcome to the QuizWiz</h1>
        <p className={styles.bannerSubtitle}>Master Web Development through Interactive Quizzes</p>
      </header>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <h2 className={styles.coursesHeader}>Our Courses</h2>
        <div className={styles.coursesGrid}>
          <div className={styles.courseCard}>
            <img src="./src/assets/bootstrap.png" alt=" no-img" className={styles.courseimg} />
            <h3 className={styles.courseTitle}>BootStrap</h3>
            <p className={styles.courseDescription}>Learn the stylings of web pages with Bootstrap.</p>
            <button className={styles.startButton} to="/quiz" >Start Course</button>
          </div>

          <div className={styles.courseCard}>
          <img src="./src/assets/css3.png" alt=" no-img" className={styles.courseimg} />
            <h3 className={styles.courseTitle}>CSS</h3>
            <p className={styles.courseDescription}>Style your web pages using CSS.</p>
            <button className={styles.startButton} to="/quiz" >Start Course</button>
          </div>

          <div className={styles.courseCard}>
          <img src="./src/assets/javaScript-logo.png" alt=" no-img" className={styles.courseimg} />
            <h3 className={styles.courseTitle}>JavaScript</h3>
            <p className={styles.courseDescription}>Add interactivity to your web pages with JavaScript.</p>
            <button className={styles.startButton} to="/quiz" >Start Course</button>
          </div>

          <div className={styles.courseCard}>
          <img src="./src/assets/ree.png" alt=" no-img" className={styles.courseimg} />
            <h3 className={styles.courseTitle}>React</h3>
            <p className={styles.courseDescription}>Build dynamic web applications using React.</p>
            <button className={styles.startButton} o="/quiz">Start Course</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>

    </>
  )
}

export default Home