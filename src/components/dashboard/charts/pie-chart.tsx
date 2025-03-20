"use client";

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { FinancialData } from "@/types/dashboard";

interface PieChartProps {
  data: FinancialData[];
  className?: string;
}

export function PieChart({ data, className }: PieChartProps) {
  return (
    <div className={`h-48 w-full py-4 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="filter drop-shadow-md hover:filter hover:drop-shadow-xl hover:brightness-110 transition-all duration-200"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [
              `$${value.toLocaleString()}`,
              "Value",
            ]}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "none",
              borderRadius: "4px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ color: "#ffffff" }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
