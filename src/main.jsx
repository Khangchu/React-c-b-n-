import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './components/Admin/Admin'
import User from './components/User/User'
import component from './components/MyComponent'
import Music from './components/music/music'
import HomePage from './components/home/HomePage'
import DashBoard from './components/Admin/Content/DashBoard'
import ManageUser from './components/Admin/Content/ManageUser'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} >
        <Route index element={<HomePage/>}/>
        <Route path='/user'element={<User/>}/>
        <Route path='/mycomponent'element={<component.MyComponent/>}/>
        <Route path='/music' element ={<Music/>}/>
      </Route>
      <Route path='/admin' element={<Admin/>}>
        <Route index element={<DashBoard/>}/>
        <Route path='manege-user' element ={<ManageUser/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  //</StrictMode>
)
