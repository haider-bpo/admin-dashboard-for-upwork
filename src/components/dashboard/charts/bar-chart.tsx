"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  TooltipProps,
} from "recharts";
import { OrderData } from "@/types/dashboard";
import Image from "next/image";

interface OcoinBarChartProps {
  data: OrderData[];
  className?: string;
}

interface CustomBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

// Custom bar with icon on top
const CustomBar = (props: CustomBarProps) => {
  const { x = 0, y = 0, width = 0, height = 0 } = props;
  const iconSize = 24;

  return (
    <g>
      {/* The bar itself */}
      <defs>
        <linearGradient id="ocoinGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFDD80" stopOpacity={1} />
          <stop offset="100%" stopColor="#FF5B5B" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="url(#ocoinGradient)"
        rx={8}
        ry={8}
      />

      {/* The coin icon on top */}
      <foreignObject
        x={x + width / 2 - iconSize / 2}
        y={y - iconSize - 2}
        width={iconSize}
        height={iconSize}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/icons/coin.png"
            alt="Coin"
            width={iconSize}
            height={iconSize}
            className="shadow-lg"
          />
        </div>
      </foreignObject>
    </g>
  );
};

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: OrderData;
    value: number;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 p-2 rounded border border-gray-700">
        <p className="text-white font-medium">{label}</p>
        <p className="text-white">{payload[0].value.toLocaleString()} coins</p>
      </div>
    );
  }
  return null;
};

export function BarChart({ data, className }: OcoinBarChartProps) {
  return (
    <div className={`h-[300px] w-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 30, right: 20, left: 20, bottom: 5 }}
          barGap={10}
          barCategoryGap={10}
        >
          <CartesianGrid vertical={false} horizontal={true} opacity={0.1} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a8a8b3", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a8a8b3", fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={0} stroke="#a8a8b3" strokeOpacity={0.2} />
          <Bar dataKey="value" shape={<CustomBar />} minPointSize={5} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
