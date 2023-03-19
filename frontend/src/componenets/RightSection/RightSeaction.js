import React from 'react'
import { FiUser } from 'react-icons/fi';
import styles from './RightSection.module.css';


function RightSeaction() {
  return (
    <div className={styles.container}>
        <div className={styles.addPost}>
            <div style = {{display : "flex"}}>
            <div className={styles.avatar}>
                <FiUser/>
            </div>
            <select className={styles.select} id="cars">
                <option className = {styles.option}value="volvo">Volvo</option>
                <option className = {styles.option}value="volvo">Volvo</option>
                <option className = {styles.option}value="volvo">Volvo</option>
                <option className = {styles.option}value="volvo">Volvo</option>
                <option className = {styles.option}value="volvo">Volvo</option>
            </select>
            
            
            </div>
            
        </div>
    </div>
  )
}

export default RightSeaction