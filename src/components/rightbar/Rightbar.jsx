import { Users } from '../../../data/fakeData'
import { Online } from '../online/Online'
import { Followers } from '../followers/Followers';

import styles from './rightbar.module.css'

export const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.rightbarContent}>
          <img src="/assets/gift.png" alt="imgGift" className={styles.rightbarImage} />
          <span><strong>Shikamaru Naara</strong> and <strong>3 other friends</strong> have a birthday today</span>
        </div>
        <img src="/assets/ad.png" alt="" className={styles.rightbarAdImage} />
        <span className={ styles.rightbarFriendsTitle }>Online Friends</span>
        <ul className={styles.rightbarFriendsContainer}>
          {
            Users.filter( user => user.id !== 1 ).map( user => (
              <Online
                key={ user.id }
                {...user}
              />
            ))
          }
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className={styles.rightbarProfileInfo}>
          <h3>User information</h3>
        <div className={styles.rightbarProfileDates}>
          <span className={styles.rightbarProfileKeys}>City:</span>
          <span className={styles.rightbarProfileValues}>Tokyo</span>
        </div>
        <div className={styles.rightbarProfileDates}>
          <span className={styles.rightbarProfileKeys}>From:</span>
          <span className={styles.rightbarProfileValues}>Japan</span>
        </div>
        <div className={styles.rightbarProfileDates}>
          <span className={styles.rightbarProfileKeys}>Relationship:</span>
          <span className={styles.rightbarProfileValues}>Married</span>
        </div>
        </div>
        <h3>User friends</h3>
        <div className={styles.rightbarProfileFollowers}>
          <ul>
            {
              Users.filter( user => user.id !== 1 ).map( user => (
                <Followers
                  key={ user.id }
                  {...user}
                />
              ))
            }
          </ul>
        </div>
      </>
    );
  }
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.rightbarWrapper}>
       { profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}