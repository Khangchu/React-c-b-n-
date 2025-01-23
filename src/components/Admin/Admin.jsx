import React, { useState } from 'react'
import SideBar from './SideBar'
import { FaBars, FaFileImage } from 'react-icons/fa'
import './admin.scss'
import sidebarBg from '../../assets/sidebar.jpg'
import { Outlet } from 'react-router-dom'
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [img, setImg] = useState()
  const [bool, setBool] = useState(false)
  const toggle = () => {
    bool?hideImage():showImage()
  }
  const showImage = () => {
    setBool(true)
    setImg(sidebarBg)
  }
  const hideImage = () => {
    setBool(false)
    setImg()
  }
  return (
    <>
      <div className='admin-container'>
        <div className="admin-sidebar">
          <SideBar collapsed={collapsed}
            image={img}/>
        </div>
        <div className="admin-content">
          <FaBars onClick={() => setCollapsed(!collapsed)} />
          <FaFileImage onClick={() => toggle()}/>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => toggle()}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">image</label>
          </div>
          <div className="admin-header">
            <FaBars onClick={() => setCollapsed(!collapsed)} />
          </div>
          <div className="admin-main">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Admin