import { FinancialData } from "@/types/dashboard";

/**
 * Mock financial data for the dashboard financial overview section
 * Used for both the financial metrics display and the pie chart visualization
 *
 * Each entry contains:
 * - name: The category name displayed in the UI
 * - value: The numerical value (in dollars)
 * - color: The color hex code used for the pie chart segment
 * - icon: Icon identifier for selecting the appropriate icon image
 */
export const financialData: FinancialData[] = [
  { name: "Total Income", value: 50000, color: "#FF00FF", icon: "dollar" },
  {
    name: "Income from Subscriptions",
    value: 20000,
    color: "#00FFFF",
    icon: "credit-card",
  },
  {
    name: "Income from Ocoin purchases",
    value: 30000,
    color: "#FFA07A",
    icon: "coin",
  },
];
