import styles from './closeFriend.module.css'
export const CloseFriend = ({user}) => {
  return (
    <li className={ styles.closeFriendContainerProfilePicture }>
        <img
            className={styles.closeFriendProfilePicture}
            src={ user.profilePicture } alt="profile picture"
        />
        <span>{ user.username }</span>
    </li>
  )
}