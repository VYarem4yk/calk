import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      result: "",
      curentValue: "",
      isDisabled: true,
      isResultShow: false,
    };
  }

  handleAdd = () => {
    this.setState({
      value: [...this.state.value, +this.state.curentValue],
      isDisabled: true,
      isResultShow: false,
    });
  };

  showResult = () => {
    this.setState({
      result: this.state.value.reduce(function (accumulator, curent) {
        return accumulator + curent;
      }),
      isResultShow: true,
    });
  };

  inputOnChange = (event) => {
    if (event.target.value > 0) {
      this.setState({ isDisabled: false });
    }
    console.log(typeof event.target.value);
    this.setState({ curentValue: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <input
          type="Number"
          onChange={this.inputOnChange}
          value={this.state.isDisabled ? "" : this.state.curentValue}
        ></input>
        <button onClick={this.handleAdd} disabled={this.state.isDisabled}>
          Сложить
        </button>
        <button onClick={this.showResult}>Результат</button>
        <h3>
          {this.state.isResultShow
            ? this.state.value.join("+") + "=" + this.state.result
            : this.state.value.join("+")}
        </h3>
      </Fragment>
    );
  }
}

export default App;
