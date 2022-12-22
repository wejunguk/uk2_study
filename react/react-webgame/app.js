
// DOM 호출함수 만들기
function createDOM(node) {
  // 하위요소가 태그일땐 객체로, 문자일땐 문자로 처리해주기
  if(typeof node === 'string') {
    return document.createTextNode(node)
  }
  // DOM 만들기
  const element = document.createElement(node.tag)

  node.children
    .map(createDOM)
    .forEach(element.appendChild.bind(element))

  return element
}

const vdom = {
  tag: 'p',
  props: {},
  children: [ // p태그의 자식요소
    {
      tag: 'h1',
      props: {},
      children: ["React 만들기"], // 문자요소 만듬
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {},
          children: ["첫 번째 아이템"]
        },
        {
          tag: 'li',
          props: {},
          children: ["두 번째 아이템"]
        },
        {
          tag: 'li',
          props: {},
          children: ["세 번째 아이템"]
        },
      ]
    }
  ],
}

document
.querySelector('#root')
.appendChild(createDOM(vdom));