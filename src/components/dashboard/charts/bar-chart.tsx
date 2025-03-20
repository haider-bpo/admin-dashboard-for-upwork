"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { OrderData } from "@/types/dashboard";

interface BarChartProps {
  data: OrderData[];
  className?: string;
}

export function BarChart({ data, className }: BarChartProps) {
  return (
    <div className={`h-[300px] ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          barGap={8}
          barCategoryGap={16}
          className="cursor-pointer"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            padding={{ left: 8, right: 8 }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => [`$${value}`, "Amount"]}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "none",
              borderRadius: "4px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "#ffffff" }}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8A48" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFC078" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            fill="url(#colorGradient)"
            animationBegin={0}
            animationDuration={1200}
            className="filter drop-shadow-sm hover:brightness-110 transition-all duration-200"
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
