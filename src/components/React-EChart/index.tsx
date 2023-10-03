import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type {
  EChartsOption,
  ECharts,
  SetOptionOpts,
  Payload,
  ECElementEvent,
} from "echarts";
import classNames from "classnames";
import type { LiquidFillGaugeOption } from "@src/types/chart";

export interface ReactEChartsProps {
  option: EChartsOption | LiquidFillGaugeOption;
  className?: string;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
  dispatchActionRef?: React.MutableRefObject<
    ((action: Payload) => void) | null
  >;
  onBarClick?: (params: ECElementEvent) => void;
}

export function ReactECharts({
  option,
  className,
  settings,
  loading,
  theme,
  dispatchActionRef,
  onBarClick,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  useEffect(() => {
    if (dispatchActionRef) {
      if (chartRef.current !== null) {
        const chart = getInstanceByDom(chartRef.current);
        dispatchActionRef.current = (action: Payload) => {
          if (chart) {
            chart.dispatchAction(action);
          }
        };
      }
    }
  }, [dispatchActionRef]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.on("mousedown", (params) => {
        if (onBarClick) {
          onBarClick(params); // Call the onBarClick callback with the event parameters
        }
      });
    }
  }, [onBarClick]);

  return (
    <div ref={chartRef} className={classNames(className, "w-full h-full")} />
  );
}
