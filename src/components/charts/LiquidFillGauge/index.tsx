import React from "react";
import "echarts-liquidfill";
import { ReactECharts } from "../React-EChart";
import type { LiquidFillGaugeOption } from "@src/types/chart";

export interface LiquidFillGaugeProps {
  option: LiquidFillGaugeOption;
  className?: string;
}

export function LiquidFillGauge({
  option,
  className = "",
}: LiquidFillGaugeProps): JSX.Element {
  return <ReactECharts option={option} className={className} />;
}
