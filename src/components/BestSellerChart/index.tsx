import * as React from "react";
import { ReactECharts, type ReactEChartsProps } from "../React-EChart";
// import classNames from "classnames";

const BestSellerChart: React.FC = () => {
  const series = [
    {
      supportColor: "#E2FFF3",
      color: "#4AB58E",
      name: "Áo thun nam",
      category: "Áo nam",
      data: [11000, 25000, 5000, 2000, 4000, 1000, 13000, 1000],
      type: "bar",
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
      total: "18.823",
      data: [9000, 25000, 700, 1000, 4000, 19000, 22000, 14000],
      type: "bar",
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
      total: "18.823",
      data: [13000, 5000, 6000, 12000, 4000, 17000, 1000, 20000],
      type: "bar",
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
  const xAxis = [
    "Month",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
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
      selectedMode: "multiple",
      // formatter: function (name) {
      //   for (let i = 0; i < series.length; i++) {
      //     if (series[i].name === name) {
      //       const data = series[i].data.reduce(function (prev, current) {
      //         return prev + current;
      //       });
      //       return name + ": " + data;
      //     }
      //   }
      //   return name;
      // },
      textStyle: {
        formatter: [
          "Plain text",
          "{textBorder|textBorderColor + textBorderWidth}",
          "{textShadow|textShadowColor + textShadowBlur + textShadowOffsetX + textShadowOffsetY}",
          "{bg|backgroundColor + borderRadius + padding}",
        ].join("\n"),

        rich: {
          textBorder: {
            fontSize: 20,
            textBorderColor: "#000",
            textBorderWidth: 3,
            color: "#fff",
          },
          textShadow: {
            fontSize: 16,
            textShadowBlur: 5,
            textShadowColor: "#000",
            textShadowOffsetX: 3,
            textShadowOffsetY: 3,
            color: "#fff",
          },
          bg: {
            backgroundColor: "#339911",
            color: "#fff",
            borderRadius: 15,
            padding: 5,
          },
          border: {
            color: "#000",
            borderColor: "#449911",
            borderWidth: 1,
            borderRadius: 3,
            padding: 5,
          },
          shadow: {
            backgroundColor: "#992233",
            padding: 5,
            color: "#fff",
            shadowBlur: 5,
            shadowColor: "#336699",
            shadowOffsetX: 6,
            shadowOffsetY: 6,
          },
        },
      },
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
        margin: 16,
        color: "#7B91B0",
      },
    },
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

  return (
    <>
      <div className="grow w-full">
        <ReactECharts option={option} />
      </div>
      {/* <div className="mt-[1.44rem] flex gap-[2.88rem]">
        {legends.map((value, index) => (
          <div
            key={index}
            className="flex w-[14.7rem] items-center justify-between"
          >
            <div className="flex items-center gap-[0.63rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <g clipPath="url(#clip0_3_10114)">
                  <rect
                    width="36"
                    height="36"
                    rx="6"
                    fill={value.supportColor}
                  />
                  <mask
                    id="mask0_3_10114"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="9"
                    y="9"
                    width="18"
                    height="18"
                  >
                    <rect
                      x="9.36035"
                      y="9.36011"
                      width="17.28"
                      height="17.28"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_3_10114)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8015 14.5028C10.8016 12.8554 12.137 11.52 13.7845 11.52H22.2171C23.8647 11.52 25.1991 12.8555 25.1993 14.5026M25.1993 14.5026L25.2008 16.4487C25.2009 16.592 25.144 16.7295 25.0428 16.8308C24.9415 16.9322 24.8041 16.9891 24.6608 16.9891C24.0659 16.9891 23.588 17.467 23.588 18.0612C23.588 18.6549 24.0661 19.1333 24.6608 19.1333C24.959 19.1333 25.2008 19.3751 25.2008 19.6733V21.6173C25.2008 23.2647 23.8662 24.6003 22.2178 24.6003H13.783C12.1353 24.6003 10.8008 23.2646 10.8008 21.6173V19.6733C10.8008 19.3751 11.0425 19.1333 11.3408 19.1333C11.9346 19.1333 12.4129 18.6551 12.4129 18.0612C12.4129 17.4945 11.9633 17.0518 11.3408 17.0518C11.1975 17.0518 11.0602 16.9949 10.9589 16.8935C10.8576 16.7922 10.8007 16.6548 10.8008 16.5116L10.8015 14.5028C10.8015 14.5027 10.8015 14.5029 10.8015 14.5028M11.8815 14.503L11.881 16.0363C12.7936 16.2587 13.4929 17.037 13.4929 18.0612C13.4929 19.065 12.8089 19.9062 11.8808 20.1453V21.6173C11.8808 22.6686 12.7322 23.5203 13.783 23.5203H22.2178C23.2695 23.5203 24.1208 22.6685 24.1208 21.6173V20.1453C23.1921 19.9064 22.508 19.0652 22.508 18.0612C22.508 17.0567 23.192 16.2161 24.1204 15.9772L24.1193 14.5034C24.1193 13.4521 23.2679 12.6 22.2171 12.6H13.7845C12.7334 12.6 11.8815 13.4519 11.8815 14.503ZM10.8015 14.5028L25.1993 14.5026L10.8015 14.5028Z"
                      fill={value.color}
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.628 15.4575L19.129 16.4721L20.2508 16.6352C20.8212 16.7198 21.0536 17.4218 20.6375 17.8284L20.6367 17.8293L19.8259 18.6181L20.0176 19.734C20.1162 20.31 19.5117 20.7379 19.0031 20.4727L19.0015 20.4719L18 19.9452L16.9969 20.4727C16.4883 20.7379 15.8838 20.3103 15.9824 19.7343L16.1741 18.618L15.3639 17.8291L15.3632 17.8284C14.9472 17.4218 15.1796 16.7198 15.75 16.6352L15.7515 16.635L16.871 16.4721L17.3725 15.4564L17.3731 15.4552C17.6294 14.9395 18.3701 14.9336 18.6277 15.4568C18.6278 15.4571 18.6279 15.4573 18.628 15.4575ZM17.7138 17.2047C17.6351 17.364 17.4832 17.4744 17.3074 17.5L16.6693 17.5928L17.1311 18.0425C17.2586 18.1666 17.3167 18.3454 17.2866 18.5208L17.1772 19.1577L17.7487 18.8572C17.906 18.7744 18.094 18.7744 18.2513 18.8572L18.8228 19.1577L18.7134 18.5208C18.6833 18.3454 18.7415 18.1664 18.869 18.0423L19.331 17.5928L18.6927 17.5C18.5169 17.4744 18.3649 17.364 18.2862 17.2047L18 16.625L17.7138 17.2047Z"
                      fill={value.color}
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_10114">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
                `text-[${value.color}]`
              )}
            >
              {value.total}
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default BestSellerChart;
