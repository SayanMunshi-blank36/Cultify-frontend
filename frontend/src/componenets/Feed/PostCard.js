import React, { useEffect, useState } from 'react'
import styles from './Feed.module.css';
import { FiGitlab, FiThumbsUp, FiMessageSquare } from 'react-icons/fi';
import { Typography } from 'antd';
import axios, { all } from 'axios';

const { Title, Link } = Typography;



function PostCard(props) {
    const [allcults, setAllCults] = useState([]);
    // const [cultName, setCultName] = useState("");

    useEffect(()=>{
        axios.get('https://cultify-backend-production.up.railway.app/api/cult')
        .then((response) =>{
            // console.log(response);
            setAllCults(response.data.data.cults);
            
        })
        console.log(allcults);
        
        
    },[]);
    
    let str;
    allcults?.forEach((e)=>{
        if(e._id === props.newid){
            // setCultName(e.name);
            str = e.name;
        }
    })
    
    console.log("cult......... name");
    console.log(str);




    return (
        <div className={styles.postCard}>
            <div className={styles.top}>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "30%" }}>
                    <div className={styles.iconBall}>
                        <FiGitlab />
                    </div>
                    <span className={styles.cardTitle}>{str}</span>
                    <span style={{ fontWeight: "400", fontSize: "10px" }}>posted by @username</span>

                </div>
                <div>
                    <button className={styles.followButton}>Follow</button>

                </div>
            </div>

            <div className={styles.cardDescription}>
                {props.description}
            </div>

            <div className={styles.image}>
                <img src={props.imgsource} style={{ width: "100%", borderRadius: "20px" }} alt="sorry" />
            </div>

            <div className={styles.bottom}>
                <div style={{ width: "15%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className={styles.let}>
                        <FiThumbsUp className={styles.interactIcons} />
                        <span style={{ color: "white", fontSize: "12px", marginLeft: "5px" }}>{2400}</span>
                    </div>
                    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                        <FiMessageSquare className={styles.interactIcons} />
                        <span style={{ color: "white", fontSize: "12px", marginLeft: "5px" }}>{2400}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostCard