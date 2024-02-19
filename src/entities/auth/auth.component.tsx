import { getAuth, signInAnonymously, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from 'firebase/app'
import { Button } from 'react-daisyui'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
}
initializeApp(firebaseConfig)

const auth = getAuth()
// const provider = new GoogleAuthProvider()

function AuthButton() {
  const [user, loading, error] = useAuthState(auth)

  const handleSignInAnonymous = async () => {
    try {
      await signInAnonymously (auth /* ,provider */)
    }
    catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    }
    catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading)
    return <div>Loading...</div>

  if (error)
    return <div>Error: {error.message}</div>

  if (user) {
    return (
      <div>
        <h1>Welcome {user?.displayName}!</h1>
        {/* eslint-disable-next-line ts/no-misused-promises */}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <div>
      {/* eslint-disable-next-line ts/no-misused-promises */}
      <Button onClick={handleSignInAnonymous}>🥸Sign In as Anonymous</Button>
    </div>
  )
}

export default AuthButton
