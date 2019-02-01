import React, { Component } from "react";
import styled from "styled-components";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          onChange={this.handleChanges}
          value={this.state.name}
          type="text"
          placeholder="name"
          name="name"
        />
        <label>Age</label>
        <input
          onChange={this.handleChanges}
          value={this.state.Age}
          type="text"
          placeholder="age"
          name="age"
        />
        <label>Height</label>
        <input
          onChange={this.handleChanges}
          value={this.state.Height}
          type="text"
          placeholder="height"
          name="height"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default SmurfForm;
