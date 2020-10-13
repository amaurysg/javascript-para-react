function render(element, container) {
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element)
  }

  const childElement = element.render()
  container.append(childElement)

  /* append agrega un elemento hasta el final del elemento 
    al cual se le designa en este caso container*/
}


export {
  render
}