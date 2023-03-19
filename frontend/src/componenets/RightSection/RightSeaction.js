import React from "react";
import { FiUser } from "react-icons/fi";
import { MdImage } from "react-icons/md";
import styles from "./RightSection.module.css";

function RightSeaction() {
  return (
    <div className={styles.container}>
      <div className={styles.addPost}>
        <div
          style={{
            width: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.avatar}>
            <FiUser />
          </div>
          <select className={styles.select} name="cars" id="cars">
            <option className={styles.option} value="volvo">
              Volvo
            </option>
            <option className={styles.option} value="volvo">
              Volvo
            </option>
            <option className={styles.option} value="volvo">
              Volvo
            </option>
            <option className={styles.option} value="volvo">
              Volvo
            </option>
            <option className={styles.option} value="volvo">
              Volvo
            </option>
          </select>
          <div className={styles.imageUp}>
            <MdImage />
          </div>
        </div>
        <form className={styles.addText}>
          <input
            type="text"
            placeholder="Have Some Occult ideas in your head ?"
          />
        </form>
        <button className={styles.postBtn}>Post</button>
      </div>
      <div className={styles.cultRec}>
        <h3>Popular Cults</h3>
        <ul className={styles.cults}>
          <li className={styles.eachCult}>
            <div className={styles.cultCont}>
              <div className={styles.avatar}>
                <FiUser />
              </div>
              <div className={styles.cultDet}>
                <p className={styles.cultTitle}>
                  Cult Title <br /> <span>1K Members</span>
                </p>
              </div>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
          <li className={styles.eachCult}>
            <div className={styles.cultCont}>
              <div className={styles.avatar}>
                <FiUser />
              </div>
              <div className={styles.cultDet}>
                <p className={styles.cultTitle}>
                  Cult Title <br /> <span>1K Members</span>
                </p>
              </div>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
          <li className={styles.eachCult}>
            <div className={styles.cultCont}>
              <div className={styles.avatar}>
                <FiUser />
              </div>
              <div className={styles.cultDet}>
                <p className={styles.cultTitle}>
                  Cult Title <br /> <span>1K Members</span>
                </p>
              </div>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
          <li className={styles.eachCult}>
            <div className={styles.cultCont}>
              <div className={styles.avatar}>
                <FiUser />
              </div>
              <div className={styles.cultDet}>
                <p className={styles.cultTitle}>
                  Cult Title <br /> <span>1K Members</span>
                </p>
              </div>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
          <li className={styles.eachCult}>
            <div className={styles.cultCont}>
              <div className={styles.avatar}>
                <FiUser />
              </div>
              <div className={styles.cultDet}>
                <p className={styles.cultTitle}>
                  Cult Title <br /> <span>1K Members</span>
                </p>
              </div>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </li>
        </ul>
        <p className={styles.seeMore}>See More</p>
      </div>
      <p className={styles.footer}>
        Terms of Service Privacy Policy Cookie Policy
      </p>
      <p className={styles.footer}>Copyright © 2023 Cultify</p>
    </div>
  );
}

export default RightSeaction;
