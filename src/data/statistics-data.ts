import { StatisticsCardData } from "@/types/dashboard";

/**
 * Mock statistics data for the dashboard statistics cards
 * Contains user counts, subscriber numbers, and revenue metrics
 *
 * Each card contains:
 * - title: The main statistic title
 * - value: The numerical value to display
 * - description: Additional context for the statistic
 * - icon: Path to the image icon for the card
 */
export const statisticsData: StatisticsCardData[] = [
  {
    title: "Total Users",
    value: "6522",
    description: "Online Users",
    icon: "/images/stat/user.png",
  },
  {
    title: "Online Users",
    value: "685",
    description: "New Signups",
    icon: "/images/stat/signups.png",
  },
  {
    title: "Active Subscribers",
    value: "474",
    description: "New Subscribers",
    icon: "/images/stat/mail.png",
  },
  {
    title: "Revenue",
    value: "8",
    description: "Unsubscriptions",
    icon: "/images/stat/open-mail.png",
  },
];
