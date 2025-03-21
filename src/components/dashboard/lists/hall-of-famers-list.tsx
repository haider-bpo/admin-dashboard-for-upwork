"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RemixerData } from "@/types/dashboard";
import { remixersData } from "@/data/remixers-data";
import { useState } from "react";

interface HallOfFamersListProps {
  title?: string;
  remixers?: RemixerData[];
}

export function HallOfFamersList({
  title = "Hall of famers - Top Remixers",
  remixers = remixersData,
}: HallOfFamersListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Card
      className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 glass-panel"
      //   style={{
      //     background:
      //       "linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(0, 8, 153, 0.2) 100%)",
      //     borderTop: "1.5px solid #FFFFFF80",
      //     backdropFilter: "blur(50.79999923706055px)",
      //   }}
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
          {remixers.map((remixer) => (
            <li
              key={remixer.id}
              className="flex items-center justify-between rounded-md p-2 transition-all duration-200"
              style={{
                backgroundColor:
                  hoveredId === remixer.id
                    ? "rgba(var(--accent-rgb), 0.1)"
                    : "transparent",
              }}
              onMouseEnter={() => setHoveredId(remixer.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center space-x-3">
                <Avatar
                  className="h-10 w-10 transition-transform duration-300"
                  style={{
                    transform:
                      hoveredId === remixer.id ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <AvatarImage src={remixer.avatar} alt={remixer.username} />
                  <AvatarFallback>
                    {remixer.username.charAt(1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none text-white">
                    {remixer.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {remixer.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-1">
                  <span className="text-amber-400 font-bold">🪙</span>
                  <span className="text-amber-400 font-bold">
                    {remixer.spent}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Spent</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
