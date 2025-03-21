"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { LoyalSubscriberData } from "@/types/dashboard";
import { loyalSubscribersData } from "@/data/loyal-subscribers-data";
import { useState } from "react";

interface LoyalSubscribersListProps {
  title?: string;
  subscribers?: LoyalSubscriberData[];
}

export function LoyalSubscribersList({
  title = "All Stars - Loyal Subscribers",
  subscribers = loyalSubscribersData,
}: LoyalSubscribersListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Explorer":
        return "bg-blue-400";
      case "Creator":
        return "bg-yellow-400";
      case "Designer":
        return "bg-cyan-400";
      case "Visionary":
        return "bg-pink-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <Card
      className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
      
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-[79px] h-[31px] px-3 text-white"
          style={{
            borderRadius: "15px",
            background: "rgba(43, 43, 43, 0.11)",
            border: "1px solid",
            borderImage:
              "linear-gradient(100.7deg, rgba(255, 74, 231, 0.7) 0%, rgba(133, 167, 243, 0) 32.5%, rgba(131, 168, 243, 0) 69%, rgba(17, 255, 255, 0.7) 100%) 1",
            backdropFilter: "blur(8.4px)",
          }}
        >
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {subscribers.map((subscriber) => (
            <li
              key={subscriber.id}
              className="flex items-center justify-between rounded-md p-2 transition-all duration-200"
              style={{
                backgroundColor:
                  hoveredId === subscriber.id
                    ? "rgba(var(--accent-rgb), 0.1)"
                    : "transparent",
              }}
              onMouseEnter={() => setHoveredId(subscriber.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center space-x-3">
                <Avatar
                  className="h-10 w-10 transition-transform duration-300"
                  style={{
                    transform:
                      hoveredId === subscriber.id ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <AvatarImage
                    src={subscriber.avatar}
                    alt={subscriber.username}
                  />
                  <AvatarFallback>
                    {subscriber.username.charAt(1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none text-white">
                    {subscriber.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {subscriber.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full text-black ${getRoleBadgeColor(
                    subscriber.role
                  )}`}
                >
                  {subscriber.role}
                </span>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-white" />
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
