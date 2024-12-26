import React from 'react'
import Styles from './Styles.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
    <div className={Styles.brandTitle}><i class="bi bi-trophy"></i> QuizWiz</div>
    <ul className={Styles.navbarLinks}>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Pricing">Pricing</NavLink></li>
      <li><NavLink to="/quiz">Quiz</NavLink></li>
    </ul>
    <button className={Styles.loginBtn} to="/loginpage">Login</button>
  </nav>
  )
}

export default Navbar