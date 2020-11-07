import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../redux/bellyboyActionsHelper";

class DjangoExample extends Component {
  constructor(props) {
    super(props);
    this.state = { postHeartBeatResponse: null };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.postHeartbeat().then(() => {
      const { postHeartBeatResponse } = this.props;
      console.log("API Request Successful! :", postHeartBeatResponse);
      this.setState({ postHeartBeatResponse });
    });
  }

  render() {
    const { postHeartBeatResponse } = this.state;
    if (!postHeartBeatResponse) return null;
    return (<div hidden>
      Django Example
      {postHeartBeatResponse.message}
      {postHeartBeatResponse.status}
    </div>);
  }
}

const mapStateToProps = ({ actionReducer }) => {
  return {
    postHeartBeatResponse: actionReducer.postHeartBeatResponse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DjangoExample);
