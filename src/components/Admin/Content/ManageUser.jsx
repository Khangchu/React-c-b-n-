import Example from './ModalCreateUser.jsx'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from 'react'
import TableUser from './TableUser.jsx'
const ManageUser = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="manage-user-container">
        <div className="title">
                Manage user
        </div>
        <div className="user-content">
          <div className='btn-add-new'>
            <button className='btn btn-primary' onClick={() => handleShow()}>
              <FcPlus/>
              Add new users</button>
          </div>
          <div className="table-users-container">
            <TableUser/>
          </div>
          <Example
            showAddUser = {show}
            setShowAddUser = {setShow}
          />
        </div>
      </div>
    </>
  )
}
export default ManageUser