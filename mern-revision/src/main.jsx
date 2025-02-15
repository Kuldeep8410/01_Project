import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './ContextApi/FisrtContext.jsx'

import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-mamx0jwd07mabiow.us.auth0.com"
    clientId="iVUR71WZOkroC5WVFJGecIp92P4OU6u6"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/", // Change this to your desired redirect URL
    }}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>

  </Auth0Provider>
)
