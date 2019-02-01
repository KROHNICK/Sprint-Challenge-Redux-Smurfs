import React from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => {
        return (
          <div className="smurf-card">
            <Smurf key={smurf.name} smurf={smurf} id={smurf.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Smurfs;
