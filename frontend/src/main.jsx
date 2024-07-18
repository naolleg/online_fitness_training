import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Userprovider } from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/FakeAuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Userprovider>
          <App />
        </Userprovider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
