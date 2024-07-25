import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "react-query"
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import Approutes from './Approutes';
import Auth0providerwithNavigate from './auth/Auth0providerwithNavigate';
import { Toaster } from 'sonner';

const queryClient= new QueryClient({
defaultOptions:{
  queries:{
    refetchOnWindowFocus:false,
  }
}

})




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0providerwithNavigate>
      <Approutes/> 
      <Toaster visibleToasts={1} position="top-right" richColors  />
      </Auth0providerwithNavigate>
      </QueryClientProvider>   
    </Router>
  
  </React.StrictMode>,
)