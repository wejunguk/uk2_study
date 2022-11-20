export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(([name, value]) => el.setAttribute(name, value));

 
  node.children
    .map(createDOM)
    .forEach((el.appendChild.bind(el)));

  return el;
}

export class Compnent {
  constructor() {
    this.props = props;
  }
}

export function createElement(tag, props, ...children) {
  props = props || {};

  if(typeof tag === 'function') {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      })
    } else {
      return tag(props);
    }
  } else {
    return {
      tag,
      props,
      children,
    }
  }
  
};

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}