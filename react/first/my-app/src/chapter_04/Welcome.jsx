function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App(props) {
  return (
    <div>
      <Welcome name='Mike' />
      <Welcome name='Steve' />
      <Welcome name='Jane' />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));