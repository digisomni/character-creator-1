import React, { Component } from "react";
import LodControl from ".";
import LodMain from ".";

class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    <LodMain />
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.onValueChange}
            />
            1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="2"
              checked={this.state.selectedOption === "2"}
              onChange={this.onValueChange}
            />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="3"
              checked={this.state.selectedOption === "3"}
              onChange={this.onValueChange}
            />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="4"
              checked={this.state.selectedOption === "4"}
              onChange={this.onValueChange}
            />
            4
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="5"
              checked={this.state.selectedOption === "5"}
              onChange={this.onValueChange}
            />
            5
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Apply
        </button>
        <button className="btn btn-default" type="submit">
          Cancel
        </button>
      </form>
    );
  }
}

export default Demo2;