import React, { Component } from "react";
import styled from "styled-components";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    };
  }

  handleDelete = () => {
    this.setState({ deleting: true }, () => {
      this.props.deleteSmurf(this.props.smurf);
    });
  };

  render() {
    return (
      <div className="smurf-card">
        <p>{this.props.smurf.name}</p>
        <p>{this.props.smurf.age} years old</p>
        <p>{this.props.smurf.height} cm tall</p>
        <p>{this.props.smurf.id}</p>
        <button onClick={this.props.deleteFriend}>Delete</button>
      </div>
    );
  }
}

export default Smurf;
