import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      result: "",
      curentValue: "",
      disabled: true,
      resultShow: false,
    };
  }

  handleAdd = () => {
    this.setState({
      value: [...this.state.value, +this.state.curentValue],
      disabled: true,
      resultShow: false,
    });
  };

  showResult = () => {
    this.setState({
      result: this.state.value.reduce(function (accumulator, curent) {
        return accumulator + curent;
      }),
      resultShow: true,
    });
  };

  inputChangeHandler = (event) => {
    if (event.target.value > 0) {
      this.setState({ disabled: false });
    }
    console.log(typeof event.target.value);
    this.setState({ curentValue: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <input
          type="Number"
          onChange={this.inputChangeHandler}
          value={this.state.disabled ? "" : this.state.curentValue}
        ></input>
        <button onClick={this.handleAdd} disabled={this.state.disabled}>
          Сложить
        </button>
        <button onClick={this.showResult}>Результат</button>
        <h3>
          {this.state.resultShow
            ? this.state.value.join("+") + "=" + this.state.result
            : this.state.value.join("+")}
        </h3>
      </Fragment>
    );
  }
}

export default App;
