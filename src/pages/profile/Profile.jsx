import { Feed } from "../../components/feed/Feed"
import { Navbar } from "../../components/navbar/Navbar"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"

import styles from './profile.module.css'
import naruto from '../../../assets/person/1.webp'
import aldea from '../../../assets/aldea.jpg'


export const Profile = ({ setChangeProfile }) => {


  return (
    <>
      <Navbar setChangeProfile={ setChangeProfile }/>
      <div className={styles.profileContainer}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileRightTopCover}>
              <img className={styles.profileBackgroundImage} src={aldea} alt="background image" />
              <img className={styles.profileImage} src={naruto} alt="profile image" />
            </div>
            <div className={styles.profileDescription}>
              <h4 className={styles.profileDescriptionName}>Naruto Usumaki</h4>
              <span className={styles.profileDescriptionHello}>Hello my friends!!</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}