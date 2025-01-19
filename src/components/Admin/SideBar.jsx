
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar'
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaFacebook } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { Link } from 'react-router-dom'
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props
  console.log(toggled,handleToggleSidebar)
  return (
    <>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          <DiReact size={'3em'} color={'00bfff'}/>
          <span>KhangChu</span>
        </div>

        <Sidebar>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
            >
              <Link to ='/admin' className='nav-link'>Dashboard </Link>
            </MenuItem>
            <MenuItem icon={<FaGem />}> components </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu

              icon={<FaRegLaughWink />}
              label='Features'

            >
              <MenuItem>
                <Link to='/admin/manege-user' className='nav-link'>Quản lý User</Link>
              </MenuItem>
              <MenuItem>Quản Lý Bài Quiz</MenuItem>
              <MenuItem> Quản Lý Câu Hỏi </MenuItem>
            </SubMenu>

          </Menu>
        </Sidebar>
        <Sidebar style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px'
            }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaFacebook size={'2em'}/>
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Facebook
              </span>
            </a>
          </div>
        </Sidebar>
      </Sidebar>
    </>
  )
}

export default SideBar