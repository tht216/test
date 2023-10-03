import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";

type IChartType = "line" | "bar";

interface Props {
  type: IChartType;
}

interface ISeries {
  name: string;
  data: number[];
}

const ProfitChart: React.FC<Props> = ({ type = "bar" }) => {
  const series: ISeries[] = [
    {
      name: "Lazada",
      data: Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 9500000)
      ),
    },
    {
      name: "Shopee",
      data: Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 9500000)
      ),
    },
  ];
  const option: ReactEChartsProps["option"] = {
    color: ["#0095FF", "#EA9F0D"],
    textStyle: {
      fontFamily: "Helvetica",
      color: "#222B45",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      bottom: 0,
      textStyle: {
        fontFamily: "Helvetica",
      },
      itemGap: 70,
      itemHeight: 11,
      itemWidth: 11,
      icon: "circle",
    },
    grid: {
      left: 64,
      right: 0,
      top: 8,
      bottom: 72,
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
      data: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value) =>
          value >= 1000000
            ? (value / 1000000).toFixed(0) + "m"
            : value >= 1000
            ? (value / 1000).toFixed(0) + "k"
            : value.toString(),
        margin: 16,
        color: "#7B91B0",
        align: "left",
      },
    },
    series:
      type === "bar"
        ? series.map(({ name, data }) => ({
            name,
            data,
            type: "bar",
            barGap: "33.33%",
            label: {
              show: false,
            },
            legendHoverLink: true,
            itemStyle: {
              borderRadius: 2,
            },
            barWidth: 12,
          }))
        : series.map(({ name, data }) => ({
            name,
            data,
            type: "line",
            label: {
              show: false,
            },
            legendHoverLink: true,
          })),
  };

  return <ReactECharts option={option} />;
};

export default ProfitChart;
