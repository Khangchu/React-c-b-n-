import React, { useEffect } from 'react'
import './DisplayInfor.scss'
import pic from './../../public/Attack  on Titan.jpg'
import { useState } from 'react'
// class DisplayInfor extends React.Component {
//   constructor(props) {
//     console.log('>>> call contructor ')
//     super(props);
//      this.state = {
//     isShowListUser : true
//   }
//   }

//   handleHideClick = (event) => {
//     this.setState({
//       isShowListUser : !this.state.isShowListUser
//     })
//   }
// // componentDidMount() {
// //   console.log('>>> call me component did mount')
// //   setTimeout(() => {
// //     document.title = 'co con cac'
// //   }, 3000);
// // }
// // componentDidUpdate (prevProps, prevState, snapshot) {
// //   console.log('>>>check component update',this.props.listUser,prevProps.listUser)
// //   if (this.props.listUser !== prevProps.listUser) {
// //     if (this.props.listUser.length === 5) {
// //       alert('you got 5 users')
// //     }
// //   }
// // }
//   render() {
//     // console.log('>>> call me render')
//     const { listUser } = this.props
//     // console.table(listUser)
//     return (
//       <>
//       <div className='displap-info-container'>
//         <img src={pic} alt="co cai lon" />
//         <div>
//           <span onClick={(event) => {this.handleHideClick(event)}}>Hide List User:</span>
//         </div>
//         {this.state.isShowListUser&&
//         listUser.map((user, index) => {
//           return (
//             <div key={user.id} className={+user.age>18?'red':'green'}>
//               <div>My name: {user.name}</div>
//               <div>My Age: {user.age}</div>
//               <div><button onClick={()=>this.props.deleteuser(user.id)}>Delete</button></div>
//               <hr />
//             </div>
//           )
//         })}
//             </div>
//             </>
//     )
//   }
// }
const DisplayInfor = (props) => {
  const { listUser } = props
  const [isShowListUser, setShowHideListuser] = useState(true)
  const handleHideClick = (event) => {
    setShowHideListuser(!isShowListUser)
  }
  useEffect(() => {
    console.log('>>> call me component did mount')
    setTimeout(() => {
      document.title = 'khang'
    }, 3000)
  }, []
  )
  useEffect(() => {
    if (listUser.length === 5) {
      alert('you got 5 user')
    }
  }, [listUser])
  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   console.log('>>>check component update',this.props.listUser,prevProps.listUser)
  //   if (this.props.listUser !== prevProps.listUser) {
  //     if (this.props.listUser.length === 5) {
  //       alert('you got 5 users')
  //     }
  //   }
  // }
  return (
    <>
      <div className='displap-info-container'>
        <img src={pic} alt="co cai lon" />
        <div>
          <span onClick={(event) => {handleHideClick(event)}}>Hide List User:</span>
        </div>
        {isShowListUser&&
            listUser.map((user, index) => {
              return (
                <div key={user.id} className={+user.age>18?'red':'green'}>
                  <div>My name: {user.name}</div>
                  <div>My Age: {user.age}</div>
                  <div><button onClick={() => props.deleteuser(user.id)}>Delete</button></div>
                  <hr />
                </div>
              )
            })}
      </div>
    </>
  )
}
export default DisplayInfor