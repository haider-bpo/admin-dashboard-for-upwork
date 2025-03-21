import { SubscriberData } from "@/types/dashboard";

/**
 * Mock subscribers data for the dashboard subscriber lists
 * Used in both the loyal subscribers list and unsubscribers list sections
 *
 * Each subscriber entry contains:
 * - id: Unique identifier for the subscriber
 * - username: The user's display name (with @ prefix)
 * - avatar: Path to the user's avatar image
 * - date: Formatted date string of subscription/activity
 * - role: User role category that determines badge color
 * - points: Activity points for the user's engagement
 */
export const subscribersData: SubscriberData[] = [
  {
    id: 1,
    username: "@MikeReyes",
    avatar: "/avatars/sub-avatar-1.png",
    date: "12.10.2024",
    role: "Explorer",
    points: 7500,
  },
  {
    id: 2,
    username: "@MikeReyes",
    avatar: "/avatars/sub-avatar-2.png",
    date: "12.10.2024",
    role: "Creator",
    points: 7500,
  },
  {
    id: 3,
    username: "@MikeReyes",
    avatar: "/avatars/sub-avatar-3.png",
    date: "12.10.2024",
    role: "Designer",
    points: 7500,
  },
  {
    id: 4,
    username: "@MikeReyes",
    avatar: "/avatars/sub-avatar-4.png",
    date: "12.10.2024",
    role: "Visionary",
    points: 7500,
  },
];
