import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";

type IChartType = "line" | "bar";

interface Props {
  type: IChartType;
}

const ProfitChart: React.FC<Props> = ({ type = "bar" }) => {
  const option: ReactEChartsProps["option"] = {
    color: ["#0095FF", "#EA9F0D"],
    textStyle: {
      fontFamily: "Helvetica",
      color: "#222B45",
    },
    dataset: {
      source: [
        ["Date", "Lazada", "Shopee"],
        ["Monday", 5.5, 5],
        ["Tuesday", 7, 4.5],
        ["Wednesday", 2.5, 9],
        ["Thursday", 6.5, 2.7],
        ["Friday", 5, 4.5],
        ["Saturday", 7, 5.5],
        ["Sunday", 9.5, 4.5],
      ],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Lazada", "Shopee"],
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
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}m",
        margin: 16,
        color: "#7B91B0",
      },
    },
    series:
      type === "bar"
        ? [
            {
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
            },
            {
              type: "bar",
              label: {
                show: false,
              },
              legendHoverLink: true,
              itemStyle: {
                borderRadius: 2,
              },
              barWidth: 12,
            },
          ]
        : [
            {
              type: "line",
              label: {
                show: false,
              },
              legendHoverLink: true,
            },
            {
              type: "line",
              label: {
                show: false,
              },
              legendHoverLink: true,
            },
          ],
  };

  return <ReactECharts option={option} />;
};

export default ProfitChart;
