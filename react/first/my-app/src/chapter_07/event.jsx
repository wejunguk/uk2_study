
  //  DOM Event
  // <button onclick="activate()">Activate</button>

  // // React Event
  // <button onclick={activate}>Activate</button>

  class Toggle extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isToggleOn: true };

      // Callback에서 this를 사용하기 위해서는 바인딩을 필수적으로 해줘야 한다.
      // 함수를 () 안쓰고 사용하려면 bind해서 사용해야 한다.
      // 사용 방법 1) bind 사용
      this.handleClick = this.handleClick.bind(this);
  }
    handleClick() {
      this.setState(preveState => ({
        isToggleOn: !preveState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>{this.state.isToggleOn ? '켜짐': '꺼짐'}</button>
      )
    }
  }

  class MyBUtton extends React.Component {
    // 사용방법 2) Class fields syntsx사용
    handleClick = () => {
      console.log('this is: ', this);
    }

    render() {
      return (
        <button onClick={this.handleClick}>클릭</button>
      )
    }
  }

  class MyBUtton2 extends React.Component {
    // 사용방법 2) Class fields syntsx사용
    handleClick () {
      console.log('this is: ', this);
    }

    render() {
      return (
        // 사용방법 3) Arrow function사용 - 비추
        <button onClick={() => this.handleClick()}>클릭</button>
      )
    }
  }

  // 함수 컴포넌트 이벤트 처리
  function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    
    // 방법1. 함수 안에 함수로 정의
    function handleClick() {
      setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법2. arrow function 사용 정의
    const handleClick = () => {
      setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    
      return (
        <button onClick={handleClick}>{isToggleOn ? '켜짐': '꺼짐'}</button>
      )
  }

  // 파라미터 전달
  // 클래스 컴포넌트 방법
  // 사용방법 Arrow function사용
  // <button onClick={(event) => this.deleteItem(id, event)}>삭제</button>
  // 사용 방법 bind 사용
  // <button onClick={this.deleteItem.bind(this.id)}>삭제</button>

  // 함수 컴포넌트 방법
  function MyBUtton(props) {
    const handleDelete = (id, event) => {
      console.log(id, event.target);
    }
    
      return (
        <button onClick={(event) => handleDelete(1, evnet)}</button>
      )
  }


