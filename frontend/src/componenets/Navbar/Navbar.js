import React from 'react'
import styles from './Navbar.module.css';
import CultIcon from '../../img/Cult Icon.png';
import {Input} from 'antd';
import { FiSearch, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className = {styles.nav}>
        
        <div className={styles.left}>
        <img  className={styles.logo}  src={CultIcon} alt="" />
        <span className={styles.logoText}>Cutify</span>
        </div>
        
        <div className={styles.right}>
        {/* <Input suffix = {<FiSearch/>} className = {styles.search}/> */}
        {/* ="Type here" className="input input-bordered w-full max-w-xs" /> */}
        <input placeholder= "Search Cults" className={styles.search}/>
        <FiSearch className={styles.searchIcon}/>
        <div className={styles.userAvatar}> <FiUser style = {{color : "black"}}/></div>
        </div>


    </div>
  )
}

export default Navbar