import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteSmurf = id => {
    if (this.props.deletingSmurf === false) {
      this.props.deleteSmurf(id);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm
          addSmurf={this.props.addSmurf}
          error={this.props.error}
          addingSmurf={this.props.addingSmurf}
          smurfAdded={this.props.smurfAdded}
        />
        {this.props.error ? <h2>Could not fetch smurfs</h2> : null}
        <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    Smurfsfetched: state.Smurfsfetched,
    addingSmurf: state.addingSmurf,
    smurfAdded: state.smurfAdded,
    updatingSmurf: state.updatingSmurf,
    smurfUpdated: state.smurfUpdated,
    deletingSmurf: state.deletingSmurf,
    smurfDeleted: state.smurfDeleted,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurf,
    updateSmurf,
    deleteSmurf
  }
)(App);
