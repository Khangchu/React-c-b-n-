import { useState } from 'react'
import './Login.scss'
import { getLogin } from '../../services/apiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const hanldeClickBackHome = () => {
    navigate('/')
  }
  const handleClickRegister = () => {
    navigate('Register')
  }
  const handleLogin = async() => {
    let res = await getLogin(email, password)
    console.log('>>>check res:', res)
    if (res&&res.EC === 0 )
    {
      toast.success(res.EM)
      hanldeClickBackHome()
    }
    if (res && res.EC !== 0 ) {
      toast.error(res.EM)

    }
  }
  return (
    <>
      <div className='login-container'>
        <div className='header'>
          <span>
                Don&apos;t have an account yet?
            <button onClick={() => handleClickRegister()}>Sign Up</button>
          </span>
        </div>
        <div className="title col-4 mx-auto">
                Khangchu
        </div>
        <div className="welcome col-4 mx-auto">
                Hello,Who&apos;this ?
        </div>
        <div className="content-form col-4 mx-auto">
          <div className='form-group'>
            <label>Email</label>
            <input type="email"
              className='form-control'
              value={email}
              onChange={(event) => {setEmail(event.target.value)}}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className='form-control'
              value={password}
              onChange={(event) => {setPassword(event.target.value)}}
            />
          </div>
          <span className='forgot-password'>Forgot Password</span>
          <div>
            <button
              className='btn-submit'
              onClick={() => {handleLogin()}}>Login</button>
          </div>
          <div >
            <span className='back_home' onClick={() => hanldeClickBackHome()}>&#60;&#60;Go Back to HomePage</span>
          </div>
        </div>
      </div>

    </>
  )
}
export default Login