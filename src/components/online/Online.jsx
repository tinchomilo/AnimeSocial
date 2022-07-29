import styles from './online.module.css'

export const Online = ({profilePicture, username}) => {
  return (
    <li className={styles.onlineFriendsList}>
        <div className={styles.onlineOnlineFriends}>
            <img src={ profilePicture } alt="" />
            <span className={styles.onlineOnlineFriendsState}></span>
        </div>
        <span><strong>{ username }</strong></span>
    </li>
  )
}