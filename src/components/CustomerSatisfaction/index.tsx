import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";
import * as echarts from "echarts";

const CustomerChart: React.FC = () => {
  const source = [
    ["Time", "This week", "Last week"],
    ["Mon", 45, 109],
    ["Tue", 66, 86],
    ["Wed", 28, 100],
    ["Thu", 29, 78],
    ["Fri", 38, 103],
    ["Sat", 39, 65],
    ["Sun", 60, 120],
  ];

  const color = ["#009DFF", "#00E096"];
  const option: ReactEChartsProps["option"] = {
    color: color,
    textStyle: {
      fontFamily: "Helvetica",
      color: "#222B45",
    },
    dataset: {
      source: source,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      left: 64,
      right: 0,
      top: 8,
      bottom: 28,
      borderColor: "#EFF1F3",
    },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      axisLabel: {
        margin: 16,
        color: "#7B91B0",
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
        margin: 16,
        color: "#7B91B0",
      },
      interval: 40,
    },
    series: [
      {
        type: "line",
        label: {
          show: false,
        },
        symbol: "circle",
        symbolSize: 10,
        legendHoverLink: true,
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 157, 255, 0.32)",
            },
            {
              offset: 1,
              color: "rgba(0, 149, 255, 0.06)",
            },
          ]),
        },
      },
      {
        type: "line",
        label: {
          show: false,
        },
        legendHoverLink: true,
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 224, 150, 0.33)",
            },
            {
              offset: 1,
              color: "rgba(0, 224, 150, 0.06)",
            },
          ]),
        },
      },
    ],
  };

  return (
    <>
      <div className="grow w-full">
        <ReactECharts option={option} />
      </div>
    </>
  );
};

export default CustomerChart;
