"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubscriberData } from "@/types/dashboard";
import { useState } from "react";
import Image from "next/image";
import { ViewAllButton } from "./view-all-button";
import AvatarPic from "./avatar-pic";

/**
 * Props for the SubscribersList component
 * @interface SubscribersListProps
 * @property {string} [title] - Optional title for the subscribers list
 * @property {SubscriberData[]} [subscribers] - Array of subscriber data objects
 */
interface SubscribersListProps {
  title?: string;
  subscribers?: SubscriberData[];
}

/**
 * SubscribersList Component
 * Displays a list of subscribers in a card format with hover effects
 * Shows user avatar, username, date, role, and activity points
 *
 * @param {Object} props - Component properties
 * @param {string} props.title - Title for the list card
 * @param {SubscriberData[]} props.subscribers - Array of subscriber data
 * @returns {React.JSX.Element} The rendered subscribers list card
 */
export function SubscribersList({ title, subscribers }: SubscribersListProps) {
  // Track which subscriber item is being hovered over
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  /**
   * Determines the background color for role badges based on role type
   *
   * @param {string} role - Subscriber's role
   * @returns {string} CSS class for the badge background color
   */
  const getRoleBadgeColor = (role: string): string => {
    switch (role) {
      case "Explorer":
        return "bg-[#61D2FF]";
      case "Creator":
        return "bg-[#FFE175]";
      case "Designer":
        return "bg-[#00FFF0]";
      case "Visionary":
        return "bg-[#FAADFF]";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <Card className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      {/* Card header with title and view all button */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-bold">{title}</CardTitle>
        <ViewAllButton />
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {subscribers?.map((subscriber) => (
            <li
              key={subscriber.id}
              className="flex items-center justify-between rounded-md p-2 transition-all duration-200"
              style={{
                // Dynamic background color on hover
                backgroundColor:
                  hoveredId === subscriber.id
                    ? "rgba(var(--accent-rgb), 0.1)"
                    : "transparent",
              }}
              onMouseEnter={() => setHoveredId(subscriber.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Left section: Avatar and user info */}
              <div className="flex items-center space-x-3">
                <AvatarPic
                  src={subscriber.avatar}
                  username={subscriber.username}
                  alt={subscriber.username}
                  hoveredId={subscriber.id}
                />

                <div>
                  <p className="text-sm font-medium leading-none text-white">
                    {subscriber.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {subscriber.date}
                  </p>
                </div>
              </div>
              {/* Right section: Role badge and activity points */}
              <div className="flex items-center space-x-3">
                {/* Role badge with dynamic color */}
                <span
                  className={`text-xs font-bold px-3 py-2 rounded-full text-black ${getRoleBadgeColor(
                    subscriber.role
                  )}`}
                >
                  {subscriber.role}
                </span>
                {/* Activity points indicator */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/icons/fire.png"
                      alt="Fire"
                      width={16}
                      height={16}
                      className="text-white"
                    />
                    <span className="text-sm font-medium text-white">
                      {subscriber.points}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Active Strike</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
