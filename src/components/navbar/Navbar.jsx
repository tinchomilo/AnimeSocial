import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import naruto from '../../../assets/person/1.webp'

import styles from './navbar.module.css'

export const Navbar = ({ setChangeProfile }) => {

  const handleClick = () => {
    setChangeProfile(true)
  }

  const handleClickHome = () => {
    setChangeProfile(false)
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <h4>
          Anime Social
        </h4>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon}/>
          <input className={styles.searchInput}/>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.navbarLinks}>
          <span className={styles.navbarOptions} onClick={handleClickHome} >home page</span>
          <span>timeline</span>
        </div>
        <div className={styles.navbarIcons}>
          <div className={styles.navbarIconItem}>
            <Person />
            <span className={styles.navbarIconItemBadge}>4</span>
          </div>
          <div className={styles.navbarIconItem}>
            <Chat />
            <span className={styles.navbarIconItemBadge}>3</span>
          </div>
          <div className={styles.navbarIconItem}>
            <Notifications />
            <span className={styles.navbarIconItemBadge}>1</span>
          </div>
        </div>
        <div className={styles.navbarProfile}>
          <img
            className={styles.navbarIconProfile}
            onClick={handleClick}
            src={naruto}
            alt="narutoImage"/>
        </div>
      </div>
    </div>
  )
}