import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";
import * as echarts from "echarts";
import icon1 from "@src/assets/icons/dashboarđ/iconThisWeek.svg";
import icon2 from "@src/assets/icons/dashboarđ/iconLastWeek.svg";
import classNames from "classnames";
import Image from "next/image";
import { formatNumber } from "@src/utils";
interface ISeries {
  name: string;
  data: number[];
  areaStyle: {
    color: echarts.LinearGradientObject;
  };
  color: string;
  icon: string;
}

const CustomerChart: React.FC = () => {
  const dispatchActionRef = React.useRef<
    ((action: echarts.Payload) => void) | null
  >(null);
  const [seriesVisibility, setSeriesVisibility] = React.useState<{
    [key: string]: boolean;
  }>({});
  const xAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const series: ISeries[] = [
    {
      name: "Last week",
      data: [45, 66, 28, 29, 38, 39, 60],
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
      color: "#009DFF",
      icon: icon1,
    },
    {
      name: "This week",
      data: [109, 86, 100, 78, 103, 65, 120],
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
      color: "#00E096",
      icon: icon2,
    },
  ];
  const option: ReactEChartsProps["option"] = {
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
    },
    grid: {
      left: 64,
      right: 0,
      top: 8,
      bottom: 28,
      borderColor: "#EFF1F3",
    },
    xAxis: {
      show: false,
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
        formatter: "{value}",
        margin: 16,
        color: "#7B91B0",
      },
      splitNumber: 3,
      align: "left",
    },
    series: series.map(({ name, data, areaStyle, color }) => ({
      name,
      data,
      areaStyle,
      color,
      type: "line",
      label: {
        show: false,
      },
      symbol: "circle",
      symbolSize: 10,
      legendHoverLink: true,
      smooth: true,
    })),
  };

  return (
    <>
      <div className="grow w-full">
        <ReactECharts option={option} dispatchActionRef={dispatchActionRef} />
      </div>
      <hr className="h-px bg-slate-100 mt-[1.5rem] mb-[1.19rem] w-full" />
      <div className="flex flex-col gap-[1.12rem] w-full">
        {series.map((value, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between transition-all duration-500 cursor-pointer"
          >
            <div
              className={classNames(
                "flex gap-[0.5rem] cursor-pointer",
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
              <Image src={value.icon} alt="legend-icon" />
              <div className="flex flex-col">
                <p className="text-slate-400 text-base font-normal leading-[1.875rem] h-[50px] relative">
                  {value.name}
                  <span className="absolute bottom-0 left-0 text-slate-850 text-sm font-medium leading-[1.25rem]">
                    {formatNumber(
                      value.data.reduce(function (prev, current) {
                        return prev + current;
                      })
                    )}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-px h-[50px] bg-slate-300" />
            <div className="flex gap-[1.88rem] items-center">
              {value.data.map((item, key) => (
                <div key={key} className="flex flex-col">
                  <p className="text-slate-400 text-base font-normal leading-[1.875rem] h-[50px] relative">
                    {xAxis[key]}
                    <span className="absolute bottom-0 left-0 text-slate-850 text-sm font-medium leading-[1.25rem]">
                      {item}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerChart;
