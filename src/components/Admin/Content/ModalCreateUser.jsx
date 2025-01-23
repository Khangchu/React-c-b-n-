import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FaRegPlusSquare } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { postCreateNewUser } from '../../../services/apiServices'
function Example(props) {
  const { showAddUser, setShowAddUser, fetchListUser, setCurrentPage } = props
  const setdata = () => {
    setShowAddUser(false)
    setEmail('')
    setPassword('')
    setUsername('')
    setRole('')
    setPreviewImage('')
    setImage('')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('USER')
  const [image, setImage] = useState()
  const [previewImage, setPreviewImage] = useState('')
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0])
    {
      setPreviewImage(URL.createObjectURL(event.target.files[0]))
      console.log(event.target.files[0])
      let files = event.target.files
      setImage(files[0])

    }
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
  const handSubmitCreateUser = async() => {
    let isValidEmail = validateEmail(email)
    if (!isValidEmail)
    { toast.error('Invalid Email')
      return
    }
    if (!password)
    {
      toast.error('Invalid Password')
      return
    }

    let res = await postCreateNewUser(email, password, username, role, image)
    console.log('>>>check:', res.EM)
    if (res&&res.EC === 0 )
    {
      toast.success(res.EM)
      setdata()
      setCurrentPage(1)
      await fetchListUser(1)
    }
    if (res && res.EC !== 0 ) {
      toast.error(res.EM)
    }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showAddUser}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
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
              <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)}>
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
              {previewImage?<img src={previewImage} alt="co cai lon" /> : <span>Preview image</span>}
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

export default Example