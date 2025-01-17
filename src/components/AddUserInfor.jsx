import React, { useState } from 'react'
// class AddUserInfor extends React.Component {
//   state = {
//     name: 'KhangChu',
//     address: 'NamDinh',
//     age :'21'
//   }

//   hexaColor = () => {
//     const str = '0123456789abcdef'
//     let hexa = '#'
//     let index
//     for (let i = 0; i < 6; i++) {
//       index = Math.floor(Math.random() * str.length)
//       hexa += str[index]
//     }
//     return hexa
//   }
//   handleClick = (event) => {
//     console.log('>>>click me my button')
//     console.log('My Name is:', this.state.name)
//     this.setState({
//       name:'thi dieu',
//       age: Math.floor((Math.random()*100))
//     })

//   }
//   handleOnMoverOver = (event) => {
//     console.log(event.pageX)
//   }
//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value
//     })
//   }
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value
//     })
//   }
//   handleOnSubmit = (event) => {
//     event.preventDefault()
//     this.props.addusernew({
//       id : Math.floor((Math.random()*100)+1),
//       name : this.state.name,
//       age : this.state.age,
//     });
//   }
//   render() {
//     const divStyle = {
//       backgroundColor: 'lightblue',
//       color: this.hexaColor(),
//       padding: '20px',
//       textAlign: 'center'
//     }
//     return (
//       <>
//         <div style={divStyle}> Hello world voi {this.state.name} and Im {this.state.age}</div>
//         {
//           Math.random(10000)
//         }
//         <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
//         <button onMouseOver={(event) => {this.handleOnMoverOver(event)}}>Hover me</button>
//         <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//           <label>Your Name: </label>
//           <input type="text"
//             value={this.state.name}
//             onChange={(event) => {this.handleOnChangeName(event)}}
//           />
//           <button>submit</button>
//           <br/>
//           <label>Your Age: </label>
//           <input type="text"
//             value={this.state.age}
//             onChange={(event) => {this.handleOnChangeAge(event)}}
//           />
//         </form>
//       </>)
//   }
// }
const AddUserInfor = (props) =>
{
  const [state, setState] = useState({
    name: 'KhangChu',
    address: 'NamDinh',
    age :'21'
  })

  const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str[index]
    }
    return hexa
  }
  const handleClick = (event) => {
    console.log('>>>click me my button')
    console.log('My Name is:', state.name)
    setState({
      name:'thi dieu',
      age: Math.floor((Math.random()*100))
    })

  }
  const handleOnMoverOver = (event) => {
    console.log(event.pageX)
  }
  const handleOnChangeName = (event) => {
    setState({
      name: event.target.value
    })
  }
  const handleOnChangeAge = (event) => {
    setState({
      age: event.target.value
    })
  }
  const handleOnSubmit = (event) => {
    event.preventDefault()
    props.addusernew({
      id : Math.floor((Math.random()*100)+1),
      name : state.name,
      age : state.age
    })
  }
  const divStyle = {
    backgroundColor: 'lightblue',
    color: hexaColor(),
    padding: '20px',
    textAlign: 'center'
  }
  return (
    <>
      <div style={divStyle}> Hello world voi {state.name} and Im {state.age}</div>
      {
        Math.random(10000)
      }
      <button onClick={(event) => {handleClick(event)}}>Click me</button>
      <button onMouseOver={(event) => {handleOnMoverOver(event)}}>Hover me</button>
      <form onSubmit={(event) => {handleOnSubmit(event)}}>
        <label>Your Name: </label>
        <input type="text"
          value={state.name}
          onChange={(event) => {handleOnChangeName(event)}}
        />
        <button>submit</button>
        <br/>
        <label>Your Age: </label>
        <input type="text"
          value={state.age}
          onChange={(event) => {handleOnChangeAge(event)}}
        />
      </form>
    </>)
}
export default AddUserInfor