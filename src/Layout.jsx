import { Route, Routes } from 'react-router-dom'
import App from './App'
import Admin from './components/Admin/Admin'
import User from './components/User/User'
import component from './components/MyComponent'
import Music from './components/music/music'
import HomePage from './components/home/HomePage'
import DashBoard from './components/Admin/Content/DashBoard'
import ManageUser from './components/Admin/Content/ManageUser'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import { ToastContainer } from 'react-toastify'
const Layout =() => {
  return (
    <>
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
        <Route path='/Login' element = {<Login/>}/>
        <Route path='Register' element = {<Register/>}/>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
    </>
  )
}
export default Layout