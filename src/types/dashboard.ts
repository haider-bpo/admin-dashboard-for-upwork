
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

export interface StatisticsCardData {
  title: string;
  value: string;
  description: string;
  icon: string;
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

export interface RemixerData {
  id: number;
  username: string;
  avatar: string;
  date: string;
  spent: number;
}

export interface LoyalSubscriberData {
  id: number;
  username: string;
  avatar: string;
  date: string;
  role: string;
  points: number;
}
