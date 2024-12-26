import React from 'react'
import Footer from './Footer'
import styles from './Styles.module.css'

const Pricing = () => {
  return (
    <>
    <div className={styles.pricingContainer}>
    <h1 className={styles.heading}>Pricing Plans</h1>
    <p className={styles.description}>
      Choose the plan that fits your needs and unlock the full potential of QuizApp. Whether you're a student or a professional, we have flexible pricing options for everyone.
    </p>

    <div className={styles.planContainer}>
      <div className={styles.planCard}>
        <h2 className={styles.planTitle}>Free Plan</h2>
        <p className={styles.planPrice}>$0</p>
        <ul className={styles.planFeatures}>
          <li>Access to basic Questions</li>
          <li>Track your progress</li>
          <li>Limited Questions per day</li>
        </ul>
        <button className={styles.planButton}>Choose Free</button>
      </div>

      <div className={styles.planCard}>
        <h2 className={styles.planTitle}>Pro Plan</h2>
        <p className={styles.planPrice}>$9.99/month</p>
        <ul className={styles.planFeatures}>
          <li>Access to all Questions</li>
          <li>Track unlimited progress</li>
          <li>Exclusive Questions for professionals</li>
          <li>Daily challenges</li>
        </ul>
        <button className={styles.planButton}>Choose Pro</button>
      </div>

      <div className={styles.planCard}>
        <h2 className={styles.planTitle}>Premium Plan</h2>
        <p className={styles.planPrice}>$19.99/month</p>
        <ul className={styles.planFeatures}>
          <li>All Pro plan features</li>
          <li>Access to advanced courses</li>
          <li>Personalized quiz recommendations</li>
          <li>Priority customer support</li>
        </ul>
        <button className={styles.planButton}>Choose Premium</button>
      </div>
    </div>
  </div>
  <Footer/>

  </>
  )
}

export default Pricing