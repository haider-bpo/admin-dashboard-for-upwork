import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export interface StatisticsCardData {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export interface SubscriberData {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: "Active" | "Inactive";
  value: number;
}

export interface FinancialData {
  name: string;
  value: number;
  color: string;
}

export interface OrderData {
  name: string;
  value: number;
}

export interface ProductData {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  sales: number;
  revenue: number;
}

export interface UserData {
  id: number;
  name: string;
  category: string;
  amount: number;
}
