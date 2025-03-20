import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  BarChart,
  Layers,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { NavItem } from "@/types/dashboard";

export const mainNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Users",
    href: "/users",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export const sidebarNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: Layers,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];
