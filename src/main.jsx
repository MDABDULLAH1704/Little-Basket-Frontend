import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuProvider } from './context/MenuContext.jsx'
import { HomeProvider } from './context/HomeContext.jsx'
import 'react-toastify/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </HomeProvider>
  </React.StrictMode >,
)
