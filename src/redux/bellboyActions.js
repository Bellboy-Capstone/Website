import axios from "axios";
import { isProduction } from "./helpers";

const httpClient = axios.create({});
httpClient.defaults.timeout = 60000;

const server = isProduction() ? "https://bellboy-services.herokuapp.com/" : "http://localhost:8000/";

export const postHeartbeat = () => {
  return async (dispatch) => {
    try {
      const response = await httpClient.post(server + "api/heartbeat");
      dispatch({ type: "postHeartbeatSuccess", payload: response.data });
    } catch (error) {
      dispatch({ type: "postHeartbeatFailed", payload: error });
      throw error;
    }
  };
};



