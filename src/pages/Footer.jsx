import React from 'react'
import styles from './Styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.brandSection}>
        <h2 className={styles.brandTitle}>Quizwiz</h2>
        
      </div>

      <div className={styles.quickLinks}>
        <h4 className={styles.sectionTitle}>Quick Links</h4>
        <ul className={styles.linksList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <h4 className={styles.sectionTitle}>Follow Us</h4>
        <div className={styles.icons}>
          <a href="#" className={styles.icon}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <p className={styles.footerText}>
            <strong>Address:</strong> 123 Web Dev St, Coding City, Webland 56789
          </p>
      </div>
      
    </div>
    <p className={styles.copyright}>
          &copy; 2024 Quizwiz. All rights reserved.
        </p>
  </footer>
  )
}

export default Footer