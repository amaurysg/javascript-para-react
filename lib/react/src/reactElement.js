
import { render } from "../../react-dom.js"

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container))
  }

  return render(children, container)
}

function setProperties(prop, value, element) {

  //Support for attributes 
  if (prop === "children") {
    return renderChildren(value, element)
  }
  //Support for attributes 
  const attribute = value
  return element.setAttribute(prop, attribute)
}


export function createElement(type, props, content) {

  //  Creando tipo de elemento 

  const element = document.createElement(type)

  //El contenido
  if (content) {
    element.textContent = content
  }
  /* console.log(props) */


  //Propiedades 
  if (props) {

    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))
  }

  /*   console.log(Object.keys(props)) */
  return element
}
