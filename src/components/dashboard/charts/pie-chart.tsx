"use client";

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  TooltipProps,
} from "recharts";
import { FinancialData } from "@/types/dashboard";

interface PieChartProps {
  data: FinancialData[];
  className?: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: FinancialData;
    value: number;
    name: string;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-black/80 p-2 rounded border border-gray-700">
        <p className="text-white font-medium">${data.value.toLocaleString()}</p>
        <p className="text-gray-400 text-xs">{data.name}</p>
      </div>
    );
  }
  return null;
};

export function PieChart({ data, className }: PieChartProps) {
  return (
    <div className={`h-full w-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={90}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))",
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
