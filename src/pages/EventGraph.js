import Axios from "axios";
import React from "react";
import { groupBy } from "lodash";
import { LogFeed } from "./Security";
import {
  XAxis,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";

const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

export default class EventGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], floorData: [], eventTypeData: [] };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    Axios.get(
      "https://bellboy-services.herokuapp.com/bellboy/status-updates"
    ).then((res) => {
      if (res.status === 200) {
        // Reverse the data so oldest results are displayed last.
        res.data.results = res.data.results.reverse();
        this.setState({
          // Data holds all results.
          data: res.data.results.filter((i) => i.body.hasOwnProperty("floor")),
          // Returns just floor data, grouped by bellboy.
          floorData: Object.values(
            groupBy(
              res.data.results.filter((i) => i.body.hasOwnProperty("floor")),
              "bellboy"
            )
          ),
          // Returns event data, grouped by bellboy.
          eventTypeData: Object.values(
            groupBy(
              res.data.results.filter((i) => i.body.hasOwnProperty("event")),
              "bellboy"
            )
          ),
        });
      } else {
        console.error("Could not fetch the data from Services.");
      }
    });
  }

  render() {
    console.log(this.state.floorData);
    return (
      <div
        style={{
          margin: "30px auto",
          maxWidth: "800px",
        }}
      >
        <div>
          <h1>Elevator Floor Requests</h1>
          <h3>Each line represents a Bellboy unit</h3>
          <LineChart
            width={800}
            height={600}
            data={this.state.data.map((v) => {
              const point = {};
              point[v.bellboy] = v.body.floor;
              point.created = new Date(v.created);
              return point;
            })}
          >
            <XAxis xAxisId={8} name="Time" domain={["dataMin", "dataMax"]} />
            <YAxis
              yAxisId={8}
              name={"Floor Number"}
              domain={["dataMin-0.1", "dataMax+0.1"]}
              interval={1}
            />
            {this.state.floorData.map((data, index) => (
              <Line
                connectNulls
                xAxisId={8}
                yAxisId={8}
                stroke={colors[index % colors.length]}
                name={`Bellboy ID:${data[0].bellboy} `}
                key={index}
                dataKey={data[0].bellboy}
              />
            ))}
            <Tooltip />
            <Legend />
            <CartesianGrid />
          </LineChart>
        </div>
        <LogFeed
          color="black"
          onSocketMessage={() => {
            // console.log("Got a websocket message, updating data...");
            // this.updateData();
          }}
        />
      </div>
    );
  }
}
