import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/userContext.jsx'
import { CoinProvider } from './context/coinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CoinProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CoinProvider>
  </>
)
