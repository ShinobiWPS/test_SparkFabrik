import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from 'react-daisyui'
import App from './App.tsx'
import { AuthProvider } from './entities/auth/auth.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  </React.StrictMode>,
)
