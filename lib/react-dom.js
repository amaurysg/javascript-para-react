function render(element, container) {
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element)
  }
  function reRender(newChild) {
    /* container.append(newChild) */
    container.replaceChild(newChild, childElement)
    childElement = newChild

  }
  element.update = reRender
  let childElement = element.build()
  container.append(childElement)
  element.componentDidMount()
  /* append agrega Un elemento hasta el final del elemento 
    al cual se le designa en este caso container*/
}



export {
  render
}