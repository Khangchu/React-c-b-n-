import Example from './ModalCreateUser.jsx'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser.jsx'
import { getListUser, getUserWithPaginate } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser.jsx'
import ModalDeleteUser from './ModalDeleteUser.jsx'
import TableUserPaginate from './TableUserPaginate.jsx'
const ManageUser = (props) => {
  const limitUser =5
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] =useState(1)
  const [showUpdateUser, setShowUpdateUser] = useState(false)
  const [showViewUser, setShowViewUser] = useState(false)
  const [viewUser, setViewUser] = useState({})
  const [listUser, setListUser] = useState([])
  const [show, setShow] = useState(false)
  const [updateUser, setUpateUser] = useState({})
  const [showDeleteUser, setShowDeleteUser] = useState(false)
  const [deleteUser, setdeleteUser] = useState({})
  const handleShow = () => setShow(true)
  const handleClickBtnUpdate = (user) => {
    setShowUpdateUser(true)
    console.log('check user: ', user)
    setUpateUser(user)
  }
  const handleClickViewUser = (user) => {
    setShowViewUser(true)
    setViewUser(user)
  }
  const handleClickDeleteUser = (user) => {
    setShowDeleteUser(true)
    setdeleteUser(user)

  }
  useEffect( () => {
    fetchListUserWithPaginate(1)
  }, [])
  // const fetchListUser = async () => {
  //   let res = await getListUser()
  //   // console.log('>>>check: ', res)
  //   if (res&&res.EC === 0)
  //   {
  //     setListUser(res.DT)
  //   }
  // }
  const fetchListUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, limitUser)

    if (res&&res.EC === 0)
    {
      setListUser(res.DT.users)
      setPageCount(res.DT.totalPages)
    }
  }
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
            {/* <TableUser listUser ={listUser}
              setShowUpdateUser = {handleClickBtnUpdate}
              handleClickViewUser = {handleClickViewUser}
              handleClickDeleteUser = {handleClickDeleteUser}
              /> */}
            <TableUserPaginate listUser ={listUser}
              setShowUpdateUser = {handleClickBtnUpdate}
              handleClickViewUser = {handleClickViewUser}
              handleClickDeleteUser = {handleClickDeleteUser}
              fetchListUserWithPaginate = {fetchListUserWithPaginate}
              pageCount = {pageCount}
              currentPage = {currentPage}
              setCurrentPage = {setCurrentPage}
            />
          </div>
          <Example
            showAddUser = {show}
            setShowAddUser = {setShow}
            fetchListUser ={fetchListUserWithPaginate}
            setCurrentPage = {setCurrentPage}
          />
          <ModalUpdateUser
            showUpdateUser={showUpdateUser}
            setShowUpdateUser = {setShowUpdateUser}
            updateUser = {updateUser}
            fetchListUser ={fetchListUserWithPaginate}
            setCurrentPage = {setCurrentPage}
            currentPage = {currentPage}
          />
          <ModalViewUser
            showViewUser={showViewUser}
            setShowViewUser={setShowViewUser}
            viewUser = {viewUser}
            setCurrentPage = {setCurrentPage}
          />
          <ModalDeleteUser
            showDeleteUser = {showDeleteUser}
            setShowDeleteUser = {setShowDeleteUser}
            deleteUser = {deleteUser}
            fetchListUser ={fetchListUserWithPaginate}
            setCurrentPage = {setCurrentPage}
          />
        </div>
      </div>
    </>
  )
}
export default ManageUser