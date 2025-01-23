import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { delDeleteUser } from '../../../services/apiServices'
import { toast } from 'react-toastify'
const ModalDeleteUser = (props) => {
  const { setShowDeleteUser, showDeleteUser, deleteUser, fetchListUser, setCurrentPage } = props
  const hanldeClose = () => {
    setShowDeleteUser(false)
  }
  const handleClickDeleteUser = async () => {
    let res = await delDeleteUser(deleteUser.id)
    if (res&&res.EC === 0 )
    {
      toast.success(res.EM)
      hanldeClose()
    }
    if (res && res.EC !== 0 ) {
      toast.error(res.EM)
      hanldeClose()
    }
    setCurrentPage(1)
    await fetchListUser(1)
  }
  return (
    <>
      <Modal
        show={showDeleteUser}
        onHide={hanldeClose}
        backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn chắc chắn muốn xóa user với Email = <b>
          {deleteUser.email}
        </b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hanldeClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClickDeleteUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDeleteUser