class Component {
  constructor(props = {}, state = {}) {
    this.props = props
    this.state = state
  }
  update() { }
  #updater() {
    this.update(this.render())
    this.componentDidUpdate()
  }

  //se llama cuando se renderice el componente
  componentWillMount() {

  }

  //cuando ya se pinta en el navegador
  componentDidMount() {

  }

  //tambien hay uno cuando se va actualizar 
  //cuando el componente se actualizo
  componentDidUpdate() {

  }




  //nos regresa un nuevo estado
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater()
  }
  build() {
    this.componentWillMount()
    return this.render()
  }
}

export {
  Component
}