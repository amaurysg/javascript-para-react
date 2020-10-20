import { Component, createElement } from "../lib/react/index.js"

class User extends Component {
  displayName = "User"
  state = {
    age: this.props.age
  }


  componentWillMount() {
    console.log(`El componente ${this.displayName} se va a renderizar`)
  }
  //cuando el comp se renderizó 
  componentDidMount() {
    console.log(`El componente ${this.displayName} se renderizó`)
  }

  componentDidUpdate() {
    console.log(`El componente ${this.displayName} se actualizó`)
  }
  //bind con constructor
  /*  constructor(props) {
     super(props)
     this.handleClick = this.handleClick.bind(this)
   } */


  /* 
    handleClick(event) {
      console.log(this.props.name)
    } */


  //Con arrow function toma el this gral 
  handleClick = (event) => {
    this.setState({
      age: this.state.age + 1,

    })

    console.log(this.state.age)
  }
  render() {

    const { avatar, name } = this.props
    const { age } = this.state
    return createElement("div", {
      onclick: this.handleClick,
      class: "user",
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", {
            src: avatar
          })
        }), createElement("h2", null, `Hola soy ${name} y tengo ${age} años 😎`)
      ]
    })


  }

}
export default User