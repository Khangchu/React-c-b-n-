import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor'
import './mycomponent.scss'
// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: 'chu an khang', age: '18' },
//       { id: 2, name: 'nguyen thi dieu', age: '19' },
//       { id: 3, name: 'trinh thu ha', age: '20' },
//       { id: 4, name: 'nguyen minh hoang', age: '21' }
//     ]
//   }
//   handldeAddUserNew = (user) =>
//   {
//     console.log(user)
//     this.setState({
//       listUser : [...this.state.listUser,user]
//     })
//   }
//   handleDeleteUser = (userId) =>
//   {
//     let listUserClone = [...this.state.listUser]
//        listUserClone = listUserClone.filter(item=>item.id !== userId)
//        this.setState({
//          listUser: listUserClone
//        })
//   }
//   render() {
//     return (
//       <>
//         <AddUserInfor
//           addusernew = {this.handldeAddUserNew}

//         />
//         <br /><hr />
//         <DisplayInfor
//           listUser = {this.state.listUser}
//           deleteuser = {this.handleDeleteUser}
//         />
//       </>
//     )
//   }
// }
const MyComponent = () => {
  const [state, setState] = useState({
    listUser: [
      { id: 1, name: 'chu an khang', age: '18' },
      { id: 2, name: 'nguyen thi dieu', age: '19' },
      { id: 3, name: 'trinh thu ha', age: '20' },
      { id: 4, name: 'nguyen minh hoang', age: '21' }
    ]
  })
  const handldeAddUserNew = (user) =>
  {
    console.log(user)
    setState({
      listUser : [...state.listUser, user]
    })
  }
  const handleDeleteUser = (userId) =>
  {
    let listUserClone = [...state.listUser]
    listUserClone = listUserClone.filter(item => item.id !== userId)
    setState({
      listUser: listUserClone
    })
  }
  return (
    <>
      <div className='div'>
        <div className='div1'>
          <AddUserInfor
            addusernew = {handldeAddUserNew}

          />
          <br /><hr />
          <DisplayInfor
            listUser = {state.listUser}
            deleteuser = {handleDeleteUser}
          />
        </div>
      </div>
    </>
  )
}
const MyPage = () => {
  return (
    <>
      <p>khangchu</p>
    </>
  )
}

const MyPage1 = () => {
  return (
    <>
      <p>khangchu1</p>
    </>
  )
}

export default { MyComponent, MyPage, MyPage1 }
