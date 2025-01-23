
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash'
function ModalViewUser(props) {
  const { showViewUser, setShowViewUser, viewUser } = props
  useEffect(() => {
    if (!_.isEmpty(viewUser)) {
      setEmail(viewUser.email)
      setRole(viewUser.role)
      setImage(viewUser.image)
      setUsername(viewUser.username)
      if (viewUser.image)
      {
        setPreviewImage(`data:image/jpeg;base64,${viewUser.image}`)
      }
    }
  }, [viewUser])

  const setdata = () => {
    setShowViewUser(false)
    if (previewImage) {
      setPreviewImage()
    }
  }

  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [role, setRole] = useState()
  const [image, setImage] = useState()
  const [password, setPassword]= useState()
  const [previewImage, setPreviewImage] = useState('')
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showViewUser}
        onHide={setdata}
        size='xl'
        backdrop='static'
        className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={email}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={username}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">Role</label>
              <select id="inputState" className="form-select" value={role}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12 img-preview'>
              {previewImage?<img src={previewImage} alt="co cai lon" /> : <span>Preview image</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setdata}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalViewUser