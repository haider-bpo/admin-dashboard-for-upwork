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

/**
 * Props for the PieChart component
 * @interface PieChartProps
 * @property {FinancialData[]} data - Array of financial data objects to visualize
 * @property {string} [className] - Optional additional CSS classes
 */
interface PieChartProps {
  data: FinancialData[];
  className?: string;
}

/**
 * Props for the CustomTooltip component
 * @interface CustomTooltipProps
 * @extends {TooltipProps<number, string>} - Extends Recharts tooltip props
 * @property {boolean} [active] - Whether the tooltip is active
 * @property {Array} [payload] - Data payload for the tooltip
 */
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: FinancialData;
    value: number;
    name: string;
  }>;
}

/**
 * CustomTooltip Component
 * Renders a styled tooltip for the pie chart
 * Shows the value and name of the hovered pie segment
 *
 * @param {CustomTooltipProps} props - Component props from Recharts
 * @returns {React.ReactElement | null} The tooltip element or null when inactive
 */
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

/**
 * PieChart Component
 * Renders a customized pie chart visualization using Recharts
 * Displays financial data with custom colors and tooltips
 *
 * @param {PieChartProps} props - Component properties
 * @param {FinancialData[]} props.data - Financial data to visualize
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {React.JSX.Element} The rendered pie chart
 */
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
            {/* Map each data point to a Cell with the specified color */}
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
          {/* Custom tooltip component for better UX */}
          <Tooltip content={<CustomTooltip />} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
