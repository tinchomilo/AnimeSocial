import { Users } from '../../../data/fakeData'
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './post.module.css'

export const Post = ({desc = '', photo, date, userId, like, comment}) => {
    const userName = Users.filter( user => user.id === userId)[0].username
    const profile = Users.filter( user => user.id === userId)[0].profilePicture
    const [likes, setLikes] = useState(like)
    const [isTrue, setIsTrue] = useState(false)

    const handleLike = () => {
        setLikes( isTrue ? likes - 1 : likes + 1 )
        setIsTrue( !isTrue )
    }

  return (
    <div className={styles.postContainer}>
        <div className={styles.postPersonalContent}>
            <div className={styles.postContainerImage}>
                <img src={profile} alt="" className={styles.postImgProfile}/>
                <span> {userName} </span>
                <span>{date}</span>
            </div>
            <div className={styles.postIconMore}>
                <MoreVertIcon />
            </div>
        </div>
            <div className={styles.postDescription}>
                <p>{desc}</p>
            </div>
        <img className={styles.postContainerImg} src={photo} alt="" />
        <div className={styles.postActions}>
            <div className={styles.postActionsIcons}>
                <img src='/assets/like.png' alt=""  onClick={handleLike}/>
                <img src='/assets/heart.png' alt="" onClick={handleLike}/>
                <span>{likes} people like it</span>
            </div>
            <div className={styles.postActionsSpan}>
                <span >{comment} comments</span>
            </div>
        </div>
    </div>
  )
}