import {
  FETCHING,
  SUCCESS,
  FAILURE,
  CREATING,
  CREATED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case CREATING:
      return {
        ...state,
        addingSmurf: true
      };
    case CREATED:
      return {
        ...state,
        smurfs: action.payload
      };
    case UPDATING:
      return {
        ...state,
        updatingSmurf: true
      };
    case UPDATED:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETING:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETED:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};

export default smurfReducer;
