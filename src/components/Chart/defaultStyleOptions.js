export default {
  margin: {top: 20, right: 0, left: 10, bottom: 15},
  yAxis: {
    tickLine: false,
    axisLine: false,
    mirror: true,
    tickStyle: {
      x: -8,
      y: -10,
      textAnchor: "start",
    },
  },
  xAxis: {
    tickLine: false,
    axisLine: false,
    padding: {left: 30},
  },
  legend: {
    hide: true,
  },
  cartesianGrid: {
    stroke: "#f5f5f5",
    vertical: false,
  },
  tooltip: {
    style: {
      padding: "10px 20px",
      minWidth: "200px",
      backgroundColor: "white",
      borderRadius: 10,
      boxShadow: "0 10px 30px 0 rgba(151,167,183,0.3)",
      textTransform: "capitalize",
      fontSize: 13,
    },
    styleLabel: {
      // To style the label
    },
    styleContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    styleName: {
      // To style key of the tooltip
    },
    styleValue: {
      fontWeight: 600,
    },
  },
};
