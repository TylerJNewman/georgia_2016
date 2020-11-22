import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import data from "./data.json";
import defaultStyleOptions from "./defaultStyleOptions";

import styles from "./Chart.module.css";

const commonProperties = {
  width: 1000,
  height: 800,
  margin: {top: 30, right: 80, bottom: 60, left: 80},
  data,
  animate: true,
  enableSlices: "x",
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function labelFormatter(votes) {
  return `Cumulative Votes: ${numberWithCommas(votes)}`;
}

class Chart extends React.Component {
  render() {
    return (
      <div className={styles.chart}>
        <div className={styles.title}></div>
        <LineChart
          {...commonProperties}
          data={data}
          dataKey="county"
          title="New Users Over Time"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            ticks={Array(6)
              .fill()
              .map((_, i) => i * 1000000)}
            dataKey="votes"
            type="number"
            domain={[0, 5000000]}
            tickFormatter={numberWithCommas}
          />
          <YAxis
            ticks={Array(9)
              .fill()
              .map((_, i) => i * 10)}
            label={{
              value: "% of total voters",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip labelFormatter={labelFormatter} />
          <Legend />
          <Line type="monotone" dataKey="dem" stroke="blue" />
          <Line type="monotone" dataKey="rep" stroke="red" />
          <Line type="monotone" dataKey="lib" stroke="purple" />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
