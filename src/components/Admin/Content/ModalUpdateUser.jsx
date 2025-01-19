/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FaRegPlusSquare } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { putUpdateUser } from '../../../services/apiServices'
import _ from 'lodash'
function modalUpdateUser(props) {
  const { showUpdateUser, setShowUpdateUser, updateUser ,fetchListUser } = props
  useEffect(() => {
    if(!_.isEmpty(updateUser)) {
    setEmail(updateUser.email)
    setRole(updateUser.role)
    setImage(updateUser.image)
    setUsername(updateUser.username)
    setId(updateUser.id)
    setPreviewImage(`data:image/jpeg;base64,${updateUser.image}`)

    }
  }, [updateUser])

  const setdata = () => {
    setShowUpdateUser(false)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState()
  const [role, setRole] = useState()
  const [image, setImage] = useState()
  const [id,setId] = useState()
  const [previewImage, setPreviewImage] = useState('')

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0])
    {
      setPreviewImage(URL.createObjectURL(event.target.files[0]))

      let files = event.target.files
      setImage(files[0])

    }
  }

  const handSubmitCreateUser = async() => {
    let res = await putUpdateUser( id,username, role, image)
    console.log('>>>check:', res.EM)
    if (res&&res.EC === 0 )
    {
      toast.success(res.EM)
      setdata()
    }
    if (res && res.EC !== 0 ) {
      toast.error(res.EM)
    }
    fetchListUser()
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showUpdateUser}
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
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">Role</label>
              <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label className="form-label label-upload" htmlFor='labelupload'><FaRegPlusSquare />Upload File Image</label>
              <input
                type="file"hidden
                id='labelupload'
                onChange={(event) => handleUploadImage(event)}/>
            </div>
            <div className='col-md-12 img-preview'>
              {updateUser.image?<img src={previewImage} alt="co cai lon" /> : <span>Preview image</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setdata}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default modalUpdateUser