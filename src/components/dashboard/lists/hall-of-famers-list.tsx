"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RemixerData } from "@/types/dashboard";
import { remixersData } from "@/data/remixers-data";
import { useState } from "react";
import Image from "next/image";
import { ViewAllButton } from "./view-all-button";
import AvatarPic from "./avatar-pic";

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
    <Card className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-bold">{title}</CardTitle>
        <ViewAllButton />
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
                <AvatarPic
                  src={remixer.avatar}
                  username={remixer.username}
                  alt={remixer.username}
                  hoveredId={remixer.id}
                />
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
                  <Image
                    src="/icons/coin.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                  <span className="font-bold">{remixer.spent}</span>
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
