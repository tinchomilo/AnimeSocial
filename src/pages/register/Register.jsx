import { Button } from '@mui/material'
import styles from './register.module.css'

export const Register = () => {
  return (
    <div className={ styles.registerContainer }>
      <div className={ styles.registerLeft }>
        <div  className={ styles.registerLeftContent}>
          <h1>Animesocial</h1>
          <span>Connect with friends and the world around you on Animesocial</span>
        </div>
      </div>
      <div className={ styles.registerRight }>
        <div className={ styles.registerRightContent }>
          <input className={ styles.registerRightInput }
            type="text"
            placeholder='Username'
            />
          <input className={ styles.registerRightInput }
            type="text"
            placeholder='Email'
            />
          <input className={ styles.registerRightInput }
            type="text"
            placeholder='Password'
            />
          <input className={ styles.registerRightInput }
            type="text"
            placeholder='Password Again'
            />
          <Button className={ styles.registerRightSingup } variant='contained' sx={{borderRadius:2, fontSize:15}}>Sing Up</Button>
          <div className={styles.registerRightLogin}>
            <Button variant='contained' color='success' sx={{borderRadius:2, fontSize:15}}>Log into Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}