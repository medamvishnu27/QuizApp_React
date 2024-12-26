import React from 'react'
import styles from '../pages/Styles.module.css'
import { Question } from '../data/questions'

const Testselect = ({onselectCategory}) =>{

// let category=["Html","Css","Bootstrap","Javascript"]

let category=Object.keys(Question)


  return (
    <div className='container'>
        <p className='m-3  text-center'>Select the Test</p>
        <div className="card">
            {
                category.map((subject)=>(
                    <button key={subject}
                     onClick={()=>onselectCategory(subject)}
                    className={styles.corseselction}>{subject}</button>
                ))
            }
        </div>
    </div>
  )
}

export default Testselect