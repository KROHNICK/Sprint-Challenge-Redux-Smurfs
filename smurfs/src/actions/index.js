import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const CREATING = "CREATING";
export const CREATED = "CREATED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";

/*
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => dispatch({ type: CREATED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const updateSmurf = id => dispatch => {
  dispatch({ type: UPDATING });
  axios
    .put(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: UPDATED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
