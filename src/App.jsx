import { Home } from './pages/home/Home'
import { Profile } from './pages/profile/Profile'
import { useState } from 'react'

import '../index.css'

function App() {

  const [changeProfile, setChangeProfile] = useState(false)

  return (
    <div >
      {
        changeProfile ?
        <Profile
          changeProfile={ changeProfile }
          setChangeProfile={ setChangeProfile } /> :
        <Home
          changeProfile={ changeProfile }
          setChangeProfile={ setChangeProfile } />
      }
    </div>
  )
}

export default App
