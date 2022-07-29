import { Post } from '../post/Post'
import { Share } from '../share/Share'
import { Posts } from '../../../data/fakeData'
import styles from './feed.module.css'
export const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <div className={styles.feedWrapper}>
        <Share />
        {
          Posts.map( post => (
            <Post 
              key={ post.id }
              {...post}
            />
          ))
        }
      </div>
    </div>
  )
}