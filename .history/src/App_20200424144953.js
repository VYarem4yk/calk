import React, { Component, Fragment } from "react";

class Calk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      result: "",
      curVal: "",
      disabled: true,
      resultShow: false,
    };
  }

  plusHandlerBTN = () => {
    this.setState({
      value: [...this.state.value, +this.state.curVal],
      disabled: true,
      resultShow: false,
    });
  };

  sumHandlerBTN = () => {
    this.setState({
      result: this.state.value.reduce(function (acc, curr) {
        return acc + curr;
      }),
      resultShow: true,
    });
  };

  inputChangeHandler = (event) => {
    if (event.target.value > 0) {
      this.setState({ disabled: false });
    }
    console.log(typeof event.target.value);
    this.setState({ curVal: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <input
          type="Number"
          onChange={this.inputChangeHandler}
          value={this.state.disabled ? "" : this.stateCurVal}
        ></input>
        <button onClick={this.plusHandlerBTN} disabled={this.state.disabled}>
          Сложить
        </button>
        <button onClick={this.sumHandlerBTN}>Результат</button>
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
