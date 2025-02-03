
import axios from '../utils/axiosCustomize'
const postCreateNewUser = (email, password, username, role, image) => {
  const form = new FormData()
  form.append('email', email)
  form.append('password', password)
  form.append('username', username)
  form.append('role', role)
  form.append('userImage', image)
  return axios.post('api/v1/participant', form)
}
const getListUser = () => {
  return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
  const form = new FormData()
  form.append('id', id)
  form.append('username', username)
  form.append('role', role)
  form.append('userImage', image)
  return axios.put('api/v1/participant', form)
}

const delDeleteUser = (userId) => {
  return axios.delete('api/v1/participant', { data: { id : userId } })
}

const getUserWithPaginate = (page, limt) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limt}`)
}
const getLogin = (email, password) => {
  return axios.post('api/v1/login', { email : email, password: password })
}

const postRegister = (email, password, username) => {
  return axios.post('api/v1/register', { email: email, password: password, username: username })
}

export { postCreateNewUser, getListUser, putUpdateUser, delDeleteUser, getUserWithPaginate, getLogin, postRegister }