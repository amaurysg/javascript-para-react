import { Component } from "../lib/react.js"
import User from "./user.js"
import Wrapper from "./wrapper.js"
import UserStyled from "./user-styled.js"

class App extends Component {
  render() {
    return `

    <div class="app">
    ${new Wrapper({
      children: `  
      <h1>Learning React.js 💪🏻👨🏻‍🏫</h1>
      ${new User({
        name: "Amaury",
        avatar: "./images/ash.jpg"
      }).render()} 
      ${new UserStyled({
        name: "Amaury",
        avatar: "./images/ash.jpg"
      }).render()}

      `
    }).render()}
   
    </div>

    `

  }


}

export default App