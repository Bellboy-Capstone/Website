import axios from "axios";

const httpClient = axios.create({});
httpClient.defaults.timeout = 60000;

const bellboyServicesURL = "https://bellboy-services.herokuapp.com/";

export const postHeartbeat = () => {
  return async (dispatch) => {
    try {
      const response = await httpClient.post(bellboyServicesURL + "api/heartbeat");
      dispatch({ type: "postHeartbeatSuccess", payload: response.data });
    } catch (error) {
      dispatch({ type: "postHeartbeatFailed", payload: error });
      throw error;
    }
  };
};



