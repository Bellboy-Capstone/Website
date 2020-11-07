import { bindActionCreators } from "redux";
import * as bellBoyActions from "./bellboyActions";

export const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(bellBoyActions, dispatch) };
};

export const mapStateToProps = () => {};
