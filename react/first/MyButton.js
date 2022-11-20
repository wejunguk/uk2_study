
function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  )
}

const domCotainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domCotainer);