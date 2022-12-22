import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoDate: [],
    value: "",
  };

  btnStyle = {
    color: "fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  handleClick = (id) => {
    // data.id와 버튼의 id가 같은건 지우고 다른것만 출력한다.
    let newTodoData = this.state.todoDate.filter((data) => data.id !== id);
    console.log(id);
    console.log("newTodoData", newTodoData);
    this.setState({ todoDate: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleCompleChange = (id) => {
    let newTodoData = this.state.todoDate.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoDate: newTodoData });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    console.log(newTodo);
    this.setState({
      todoDate: [...this.state.todoDate, newTodo],
      value: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>TO-DO LIST</h1>
          </div>
          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: 10, padding: 5 }}
              placeholder="추가할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn" style={{ flex: 1 }}>
              입력
            </button>
          </form>
          {this.state.todoDate.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                onChange={() => this.handleCompleChange(data.id)}
                defaultChecked={false}
              />
              {data.title}
              <button
                style={this.btnStyle}
                // data.id : 버튼이 여러개니깐 어떤 버튼을 클릭했는 지알려줘야 함
                onClick={() => this.handleClick(data.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
