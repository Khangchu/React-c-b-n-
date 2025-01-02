import React from 'react'
class MyComponent extends React.Component {
  state = {
    name: 'KhangChu',
    address: 'NamDinh',
    age :'21'
  }
  
   hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa 
}

  handleClick = (event) => {
    console.log('>>>click me my button')
    console.log('My Name is:',this.state.name)
    this.setState({
      name:'thi dieu',
      age: Math.floor((Math.random()*100)),
    })

  }
  handleOnMoverOver  (event)  {
    console.log(event.pageX)
  }
  render() {
    const divStyle = {
      backgroundColor: 'lightblue',
      color: this.hexaColor(),
      padding: '20px',
      textAlign: 'center',
    };
    return (
      <>
        <div style={divStyle}> Hello world voi {this.state.name} and Im {this.state.age}</div>
        {
          Math.random(10000)
        }
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={(event) => {this.handleOnMoverOver(event)}}>Hover me</button>
      </>)
  }
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

export default {MyComponent,MyPage,MyPage1}
