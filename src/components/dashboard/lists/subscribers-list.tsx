"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SubscriberData } from "@/types/dashboard";
import { useState } from "react";
import Image from "next/image";
import { ViewAllButton } from "./view-all-button";
import AvatarPic from "./avatar-pic";

interface LoyalSubscribersListProps {
  title?: string;
  subscribers?: SubscriberData[];
}

export function SubscribersList({
  title,
  subscribers,
}: LoyalSubscribersListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getRoleBadgeColor = (role: string) => {
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
                backgroundColor:
                  hoveredId === subscriber.id
                    ? "rgba(var(--accent-rgb), 0.1)"
                    : "transparent",
              }}
              onMouseEnter={() => setHoveredId(subscriber.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
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
              <div className="flex items-center space-x-3">
                <span
                  className={`text-xs font-bold px-3 py-2 rounded-full text-black ${getRoleBadgeColor(
                    subscriber.role
                  )}`}
                >
                  {subscriber.role}
                </span>
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
