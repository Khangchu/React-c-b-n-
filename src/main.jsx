import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
  </Provider>
)
