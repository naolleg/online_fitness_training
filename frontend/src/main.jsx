import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Userprovider } from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <App />
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
