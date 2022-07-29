import { Button } from '@mui/material'
import styles from './login.module.css'

export const Login = () => {
  return (
    <div className={ styles.loginContainer }>
      <div className={ styles.loginLeft }>
        <div  className={ styles.loginLeftContent}>
          <h1>Animesocial</h1>
          <span>Connect with friends and the world around you on Animesocial</span>
        </div>
      </div>
      <div className={ styles.loginRight }>
        <div className={ styles.loginRightContent }>
          <input className={ styles.loginRightInput }
            type="text"
            placeholder='Email'
            />
          <input className={ styles.loginRightInput }
            type="text"
            placeholder='Password'
            />
          <Button className={ styles.loginRightSingup } variant='contained'>Log in</Button>
          <span>Forgot Password?</span>
          <div className={styles.loginRightLogin}>
            <Button className={ styles.loginRightNew } variant='contained' color='success'>Create a New Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}