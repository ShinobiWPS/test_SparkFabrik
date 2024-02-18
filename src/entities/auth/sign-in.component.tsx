import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

// Initialize Firebase with your project's configuration
const firebaseConfig = {
  // Your Firebase configuration object
}

// Initialize Firebase
const auth = getAuth()
const provider = new GoogleAuthProvider()

function SignIn() {
  const [user, loading, error] = useAuthState(auth)

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
    }
    catch (error) {
      console.error('Error signing in with Google:', error)
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
        <h1>Welcome, {user.displayName}!</h1>
        <p>Email: {user.email}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default SignIn
