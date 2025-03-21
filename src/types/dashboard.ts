/**
 * Navigation item for sidebar menus
 * @interface NavItem
 */
export interface NavItem {
  title: string; // Display text for the navigation item
  href: string; // URL the item links to
  icon?: string; // Optional path to the icon image
}

/**
 * Data for statistics cards showing key metrics
 * @interface StatisticsCardData
 */
export interface StatisticsCardData {
  title: string; // Title of the statistic
  value: string; // Value to display (pre-formatted as string)
  description: string; // Additional description text
  icon: string; // Path to the icon image
}

/**
 * Data for financial visualization with pie chart
 * @interface FinancialData
 */
export interface FinancialData {
  name: string; // Name of the financial category
  value: number; // Numerical value
  color: string; // Color code for the chart segment
  icon: string; // Icon type identifier
}

/**
 * Data for order visualization
 * @interface OrderData
 */
export interface OrderData {
  name: string; // Name of the order category
  value: number; // Numerical value
}

/**
 * Product information for product listings
 * @interface ProductData
 */
export interface ProductData {
  id: number; // Unique identifier
  name: string; // Product name
  category: string; // Product category
  image: string; // Path to product image
  rating: number; // User rating (typically 0-5)
  sales: number; // Number of sales
  revenue: number; // Revenue generated
}

/**
 * User data for user listings
 * @interface UserData
 */
export interface UserData {
  id: number; // Unique identifier
  name: string; // User's name
  category: string; // User category or role
  amount: number; // Amount spent or earned
}

/**
 * Data for users who remix content
 * @interface RemixerData
 */
export interface RemixerData {
  id: number; // Unique identifier
  username: string; // User's display name
  avatar: string; // Path to avatar image
  date: string; // Formatted date string
  spent: number; // Amount spent
}

/**
 * Subscriber information for subscriber lists
 * @interface SubscriberData
 */
export interface SubscriberData {
  id: number; // Unique identifier
  username: string; // User's display name
  avatar: string; // Path to avatar image
  date: string; // Formatted date string
  role: string; // User role (e.g., Explorer, Creator)
  points: number; // Activity or loyalty points
}

/**
 * Data for remixed products listing
 * @interface RemixedProductData
 */
export interface RemixedProductData {
  id: number; // Unique identifier
  name: string; // Product name
  image: string; // Path to product image
  date: string; // Formatted date string
  timeRemixed: number; // Time spent remixing (in minutes)
  downloads: number; // Number of downloads
  views: number; // Number of views
}

/**
 * Data for app usage statistics
 * @interface AppUsageData
 */
export interface AppUsageData {
  id: number; // Unique identifier
  name: string; // App name
  image: string; // Path to app icon
  date: string; // Formatted date string
  timeUsed: number; // Usage time (in minutes)
}
