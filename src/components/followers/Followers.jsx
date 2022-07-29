import styles from './followers.module.css'

export const Followers = ({ profilePicture, username }) => {
  return (
    <li className={styles.followersFriendsList}>
        <div className={styles.followersfollowersFriends}>
            <img src={ profilePicture } alt="" />
            <span>{ username }</span>
        </div>
    </li>
  )
}