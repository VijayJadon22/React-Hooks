import React, { Component } from "react";

export default class ClassInput extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Harry",
      lastName: "Potter",
    };
  }
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Row label={"First Name"}>
            <input
              type="text"
              value={this.state.firstName}
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            />
          </Row>
          <br />
          <Row label={"Last Name"}>
            <input
              type="text"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </Row>
        </div>
        <h1>
          Hello {this.state.firstName} {this.state.lastName}
        </h1>
      </div>
    );
  }
}

const Row = (props) => {
  return (
    <div>
      <label style={{ margin: "10px" }}>{props.label}</label>
      {props.children}
    </div>
  );
};
