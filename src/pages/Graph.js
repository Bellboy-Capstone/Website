import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '8AM - 9AM', hand: 5, voice: 4, face: 3,
  },
  {
    name: '9AM - 10AM', hand: 4, voice: 2, face: 5,
  },
  {
    name: '10AM - 11AM', hand: 1, voice: 2, face: 3,
  },
  {
    name: '11AM - 12PM', hand: 3, voice: 5, face: 4,
  },
  {
    name: '12PM - 1PM', hand: 5, voice: 5, face: 5,
  },
  {
    name: '1PM - 2PM', hand: 4, voice: 2, face: 2,
  },
  {
    name: '2PM - 3PM', hand: 2, voice: 3, face: 5,
  },
  {
    name: '3PM - 4PM', hand: 5, voice: 3, face: 3,
  },
  {
    name: '4PM - 5PM', hand: 1, voice: 4, face: 5,
  },
  {
    name: '5PM - 6PM', hand: 2, voice: 3, face: 1,
  },
  {
    name: '6PM - 7PM', hand: 1, voice: 1, face: 1,
  },
];

export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
    <div>
        <div> Number of times used</div>
      <BarChart
        width={1300}
        height={600}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="voice" stackId="a" fill="#7FB3D5" />
        <Bar dataKey="hand" stackId="a" fill="#A569BD" />
        <Bar dataKey="face" stackId="a" fill="#73C6B6" />
      </BarChart>
      </div>
    );
  }
}
