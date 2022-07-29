import styles from './share.module.css'
import naruto from '../../../assets/person/1.webp'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Button } from '@mui/material';

export const Share = () => {
  return (
    <div className={styles.shareContainer}>
        <div className={styles.sharePersonalContent}>
            <div className={styles.shareContainerImage}>
                <img src={naruto} alt="" className={styles.shareImgProfile}/>
                <input placeholder="what's in your mind"/>
            </div>
        <hr />
        </div>
        <div className={styles.shareMediaOptions}>
            <div className={styles.sharemediaIcon}>
                <PhotoLibraryIcon />
                <span>Photo or video</span>
            </div>
            <div className={styles.sharemediaIcon}>
                <LabelIcon />
                <span>Tag</span>
            </div>
            <div className={styles.sharemediaIcon}>
                <LocationOnIcon />
                <span>Location</span>
            </div>
            <div className={styles.sharemediaIcon}>
                <EmojiEmotionsIcon />
                <span>Feelings</span>
            </div>
            <Button className={styles.shareButton} variant='contained' color='success' size='small'>
                Share
            </Button>
        </div>
    </div>
  )
}