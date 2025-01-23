import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
  //</StrictMode>
)
