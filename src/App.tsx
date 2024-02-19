import { Button, Form, Input } from 'react-daisyui'
import './index.css'

import AuthButton from './entities/auth/auth.component'
import { useAuth } from './entities/auth/auth.context'

function App() {
  const { currentUser, loading } = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  if (loading)
    return <div>Loading...</div>

  return (
    <>
      <AuthButton />
      { currentUser && (
        <Form onSubmit={handleSubmit}>
          <Input placeholder="quote here.." />
          <Input placeholder="author" />
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      ) }
    </>
  )
}

export default App
