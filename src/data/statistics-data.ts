import { Users, ShoppingCart, CreditCard, Activity } from "lucide-react";
import { StatisticsCardData } from "@/types/dashboard";

export const statisticsData: StatisticsCardData[] = [
  {
    title: "Total Users",
    value: "4,322",
    description: "Current Users",
    icon: Users,
  },
  {
    title: "Online Users",
    value: "655",
    description: "Current Online",
    icon: Activity,
  },
  {
    title: "Active Subscribers",
    value: "476",
    description: "Daily Subscribers",
    icon: ShoppingCart,
  },
  {
    title: "Revenue",
    value: "$8,345",
    description: "Daily Subscriptions",
    icon: CreditCard,
  },
];
