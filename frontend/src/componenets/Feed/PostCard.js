import React from 'react'
import styles from './Feed.module.css';
import {FiGitlab, FiThumbsUp,FiMessageSquare} from 'react-icons/fi';
import {Typography} from 'antd';

const { Title, Link } = Typography;

function PostCard() {
  return (
    <div className={styles.postCard}>
        <div className={styles.top}>
            <div style = {{display : "flex", justifyContent : "space-evenly", alignItems : "center", width : "30%"}}>
                <div className={styles.iconBall}>
                    <FiGitlab/>
                </div>
                <span className={styles.cardTitle}>Cultify Name</span>
                <span style ={{fontWeight : "400", fontSize : "10px"}}>posted by @username</span>
                
            </div>
            <div>
            <button className = {styles.followButton}>Follow</button>

            </div>
        </div>

        <div className={styles.cardDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe unde quidem enim impedit ipsam maxime rem dicta consequatur, laborum tempora adipisci dolore dolorem.
        </div>

        <div className={styles.image}>
            <img src= {"https://images.unsplash.com/photo-1675189693048-4bef1b0690db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} style = {{width : "100%",borderRadius : "20px"}}alt="sorry" />
        </div>

        <div className={styles.bottom}>
            <div style = {{width : "15%", display : "flex", justifyContent: "space-between", alignItems : "center"}}>
                <div className={styles.let}>
                    <FiThumbsUp className = {styles.interactIcons}/>
                    <span style = {{color : "white", fontSize :"12px", marginLeft : "5px"}}>{2400}</span>
                </div>
                <div style = {{height : "100%", display : "flex", alignItems :"center"}}>
                    <FiMessageSquare className = {styles.interactIcons}/>
                    <span style = {{color : "white", fontSize :"12px", marginLeft : "5px"}}>{2400}</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PostCard