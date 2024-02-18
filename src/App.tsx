import { Button, Form, Input } from 'react-daisyui'
import './index.css'
import SignInButton from './entities/auth/sign-in.component'

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }
  const isLoggedIn = false

  return (
    <>
      <Button color="primary">Click me!</Button>
      { !isLoggedIn && (
        <SignInButton />
      ) }
      { isLoggedIn && (
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
