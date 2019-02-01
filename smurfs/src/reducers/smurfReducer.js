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
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
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
        smurfs: action.payload,
        fetchedSmurfs: true
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case CREATING:
      return {
        ...state,
        addingSmurf: true
      };
    case CREATED:
      return {
        ...state,
        smurfs: action.payload,
        smurfAdded: true
      };
    case UPDATING:
      return {
        ...state,
        updatingSmurf: true
      };
    case UPDATED:
      return {
        ...state,
        smurfs: action.payload,
        smurfUpdated: true
      };
    case DELETING:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETED:
      return {
        ...state,
        smurf: action.payload,
        smurfDeleted: true
      };
    default:
      return state;
  }
};

export default smurfReducer;
