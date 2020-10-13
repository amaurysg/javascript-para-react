import { Component, createElement } from "../lib/react/index.js"
import User from "./user.js"
import Wrapper from "./wrapper.js"
/* import UserStyled from "./user-styled.js" */

const element = createElement("h1", {
  class: "title"
}, "Hola Mundo desde createElement")
console.log(element)

class App extends Component {
  render() {
    return createElement("div", {
      class: "app",
      children: new Wrapper({
        children: [new User({
          name: "Amaury",
          avatar: "./images/ash.jpg"
        })]
      })
    }, "Esta es la App")
  }
}
/* ${new Wrapper({
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
*/

export default App