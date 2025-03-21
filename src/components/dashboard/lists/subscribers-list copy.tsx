"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { SubscriberData } from "@/types/dashboard";
import { formatCurrency } from "@/lib/utils";
import { subscribersData } from "@/data/subscribers-data";
import { useState } from "react";

interface SubscribersListProps {
  title: string;
  subscribers?: SubscriberData[];
}

export function SubscribersList({
  title,
  subscribers = subscribersData,
}: SubscribersListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(0, 8, 153, 0.6) 100%)",
        borderTop: "1.5px solid #FFFFFF80",
        backdropFilter: "blur(50.79999923706055px)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        <Button variant="ghost" size="sm">
          View all <ChevronRight className="ml-1 h-4 w-4" />
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
                  className="h-8 w-8 transition-transform duration-300"
                  style={{
                    transform:
                      hoveredId === subscriber.id ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <AvatarImage src={subscriber.avatar} alt={subscriber.name} />
                  <AvatarFallback>
                    {subscriber.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {subscriber.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {subscriber.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge
                  variant={
                    subscriber.status === "Active" ? "default" : "secondary"
                  }
                  className="rounded-sm px-2 py-1 text-xs transition-all duration-300"
                  style={{
                    opacity: hoveredId === subscriber.id ? 1 : 0.9,
                    transform:
                      hoveredId === subscriber.id
                        ? "translateY(-2px)"
                        : "translateY(0)",
                  }}
                >
                  {subscriber.status}
                </Badge>
                <span className="text-sm font-medium">
                  {formatCurrency(subscriber.value)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/60"></div>
    </Card>
  );
}
