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

export interface FinancialData {
  name: string;
  value: number;
  color: string;
  icon: string;
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

export interface SubscriberData {
  id: number;
  username: string;
  avatar: string;
  date: string;
  role: string;
  points: number;
}

export interface RemixedProductData {
  id: number;
  name: string;
  image: string;
  date: string;
  timeRemixed: number;
  downloads: number;
  views: number;
}

export interface AppUsageData {
  id: number;
  name: string;
  image: string;
  date: string;
  timeUsed: number;
}
