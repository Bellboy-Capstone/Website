const defaultState = {
  postHeartBeatResponse: "empty string",
};

const actionReducer = (state = defaultState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "postHeartbeatSuccess": {
      newState.postHeartBeatResponse = action.payload;
      return newState;
    }
    default:
      return newState;
  }
}

export default actionReducer;
