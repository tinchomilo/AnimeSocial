import styles from './sidebar.module.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Button } from '@mui/material';
import { Users } from '../../../data/fakeData'
import { CloseFriend } from '../closeFriend/CloseFriend';

export const Sidebar = () => {

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarListIconsContainer}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarIcon}>
            <RssFeedIcon />
            <span className={styles.sidebarIconSpan}>Feed</span>
          </li>
          <li className={styles.sidebarIcon}>
            <ChatIcon />
            <span className={styles.sidebarIconSpan}>Chat</span>
          </li>
          <li className={styles.sidebarIcon}>
            <PlayCircleFilledWhiteIcon />
            <span className={styles.sidebarIconSpan}>Videos</span>
          </li>
          <li className={styles.sidebarIcon}>
            <GroupsIcon />
            <span className={styles.sidebarIconSpan}>Groups</span>
          </li>
          <li className={styles.sidebarIcon}>
            <BookmarkIcon />
            <span className={styles.sidebarIconSpan}>Bookmarks</span>
          </li>
          <li className={styles.sidebarIcon}>
            <HelpOutlineIcon />
            <span className={styles.sidebarIconSpan}>Help</span>
          </li>
          <li className={styles.sidebarIcon}>
            <WorkIcon />
            <span className={styles.sidebarIconSpan}>Jobs</span>
          </li>
          <li className={styles.sidebarIcon}>
            <EventIcon />
            <span className={styles.sidebarIconSpan}>Events</span>
          </li>
          <li className={styles.sidebarIcon}>
            <SchoolIcon />
            <span className={styles.sidebarIconSpan}>Courses</span>
          </li>
        </ul>
        <Button variant='outlined' color='success'>
          Show more
        </Button>
        <hr style={{margin: 20}} />
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
          {
            Users.map( user => (
              <CloseFriend
                key={ user.id }
                user={user}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}