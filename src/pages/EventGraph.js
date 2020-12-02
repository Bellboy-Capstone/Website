import Axios from "axios";
import React from "react";
import { groupBy } from "lodash";
import {
  XAxis,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";

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
        this.setState({
          // Data holds all results.
          data: res.data.results,
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
              point.y = null;
              point.x = new Date(v.created);
              return point;
            })}
          >
            <XAxis xAxisId={8} name="Time" domain={["dataMin", "dataMax"]} />
            <YAxis
              yAxisId={8}
              name={"Floor Number"}
              domain={["dataMin", "dataMax"]}
            />
            {this.state.floorData.map((data, index) => (
              <Line
                xAxisId={8}
                yAxisId={8}
                name={`Bellboy ID:${data[0].bellboy} `}
                type="monotone"
                data={this.state.data.map((p) => {
                  const bellboyId = data[0].bellboy;
                  const point = {};
                  if (p.bellboy === bellboyId) {
                    point.value = p.body.floor;
                    point.y = p.body.floor;
                    point.x = new Date(p.created);
                  }
                  return point;
                })}
                key={index}
                dataKey={"value"}
              />
            ))}
            <Tooltip />
            <Legend />
            <CartesianGrid />
          </LineChart>
        </div>
      </div>
    );
  }
}
