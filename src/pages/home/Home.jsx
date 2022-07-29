import { Feed } from "../../components/feed/Feed"
import { Navbar } from "../../components/navbar/Navbar"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"

import styles from './home.module.css'

export const Home = ({ setChangeProfile }) => {

  return (
    <>
      <Navbar setChangeProfile={ setChangeProfile } />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}