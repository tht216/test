import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";
import classNames from "classnames";
import { type Payload } from "echarts";
import { formatNumber } from "@src/utils";
import BestSellerIcon from "../Icon";

type IColorChart = "#4AB58E" | "#FFA800" | "#CD7FE9";
type ISupportColorChart = "#E2FFF3" | "#FFF4DE" | "#F8E5FF";

interface ISeries {
  supportColor: ISupportColorChart;
  color: IColorChart;
  name: string;
  category: string;
  data: number[];
  barGap: string;
  label: {
    show: boolean;
  };
  legendHoverLink: boolean;
  itemStyle: {
    borderRadius: number;
  };
  barWidth: number;
}

const BestSellerChart: React.FC = () => {
  const dispatchActionRef = React.useRef<((action: Payload) => void) | null>(
    null
  );
  const [seriesVisibility, setSeriesVisibility] = React.useState<
    Record<string, boolean>
  >({});

  const series: ISeries[] = [
    {
      supportColor: "#E2FFF3",
      color: "#4AB58E",
      name: "Áo thun nam",
      category: "Áo nam",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 25000)),
      barGap: "25%",
      label: {
        show: false,
      },
      legendHoverLink: true,
      itemStyle: {
        borderRadius: 4,
      },
      barWidth: 16,
    },
    {
      supportColor: "#FFF4DE",
      color: "#FFA800",
      name: "Áo khoác nữ",
      category: "Áo nữ",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 25000)),
      barGap: "25%",
      label: {
        show: false,
      },
      legendHoverLink: true,
      itemStyle: {
        borderRadius: 4,
      },
      barWidth: 16,
    },
    {
      supportColor: "#F8E5FF",
      color: "#CD7FE9",
      name: "Áo thun nữ",
      category: "Áo nữ",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 25000)),
      barGap: "25%",
      label: {
        show: false,
      },
      legendHoverLink: true,
      itemStyle: {
        borderRadius: 4,
      },
      barWidth: 16,
    },
  ];

  const [dataArray, setDataArray] = React.useState<number[]>(
    series.map((value) =>
      value.data.reduce(function (prev, current) {
        return prev + current;
      })
    )
  );

  const xAxis = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const color = ["#4AB58E", "#FFCF00", "#CD7FE9"];

  const option: ReactEChartsProps["option"] = {
    color: color,
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
      show: false,
      selectedMode: "multiple",
    },
    grid: {
      left: 39,
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
      data: xAxis,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value) {
          if (value >= 1000) {
            // Convert values greater than or equal to 1000 to "k" format
            return (value / 1000).toFixed(0) + "k";
          } else {
            return value.toString();
          }
        },
        margin: 19,
        color: "#7B91B0",
        align: "left",
      },
    },
    dataZoom: [
      {
        type: "inside",
        startValue: 0,
        endValue: 7,
      },
    ],
    series: series.map(
      ({
        name,
        data,
        barGap,
        label,
        legendHoverLink,
        itemStyle,
        barWidth,
      }) => ({
        name,
        data,
        type: "bar",
        barGap,
        label,
        legendHoverLink,
        itemStyle,
        barWidth,
      })
    ),
  };

  const COLOR_TEXT_MAPPING = {
    "#4AB58E": "text-emerald-400",
    "#FFA800": "text-orange-400",
    "#CD7FE9": "text-purple-400",
  } as const;

  return (
    <>
      <div className="grow w-full">
        <ReactECharts
          option={option}
          dispatchActionRef={dispatchActionRef}
          onBarClick={(params) => {
            setDataArray(series?.map((value) => value.data[params.dataIndex]));
          }}
        />
      </div>
      <div className="mt-[1.44rem] flex gap-[2.88rem]">
        {series.map((value, index) => (
          <div
            key={index}
            className={classNames(
              "flex w-[14.7rem] items-center justify-between transition-all duration-500 cursor-pointer",
              seriesVisibility[value.name] ? "grayscale" : ""
            )}
            onClick={() => {
              if (dispatchActionRef.current) {
                setSeriesVisibility((prevVisibility) => ({
                  ...prevVisibility,
                  [value.name]: !prevVisibility[value.name],
                }));
                dispatchActionRef.current({
                  type: "legendToggleSelect",
                  name: value.name,
                });
              }
            }}
            onMouseEnter={() => {
              if (dispatchActionRef.current) {
                dispatchActionRef.current({
                  type: "highlight",
                  seriesIndex: index,
                });
              }
            }}
            onMouseLeave={() => {
              if (dispatchActionRef.current) {
                dispatchActionRef.current({
                  type: "downplay",
                  seriesIndex: index,
                });
              }
            }}
          >
            <div className="flex items-center gap-[0.63rem]">
              <BestSellerIcon
                color={value.color}
                supportColor={value.supportColor}
              />
              <div className="flex flex-col gap-[0.12rem]">
                <p className="text-indigo-950 text-xs font-bold leading-[1rem]">
                  {value.name}
                </p>
                <p className="text-slate-550 text-[10px] font-normal leading-[1rem]">
                  {value.category}
                </p>
              </div>
            </div>
            <div
              className={classNames(
                "text-right text-sm font-medium font-['Poppins'] leading-tight",
                COLOR_TEXT_MAPPING[value.color]
              )}
            >
              {formatNumber(dataArray[index])}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSellerChart;
