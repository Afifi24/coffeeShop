import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WrapperContextApi from './contextAPI/context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrapperContextApi>
    <App />
    </WrapperContextApi>
  </React.StrictMode>,
)
