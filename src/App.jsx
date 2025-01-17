import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Component from './components/MyComponent'
import React from 'react'
import Header from './components/header/header'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// class App extends React.Component {

//   render() {
//     return (
//       <>
//         <div>
//         Hello world
//         </div>
//         <Component.MyComponent></Component.MyComponent>
//         {/* <Component.MyPage></Component.MyPage>
//    <Component.MyPage1></Component.MyPage1> */}
//       </>
//     )
//   }
// }
function App() {
  return (
    <>
      <div className='app-container'>
        <div className='header-container'>
          <Header/>
        </div>
        <div className="main-container">
          <div className='sidenav-container'>
          </div>
          <div className="app-content">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
