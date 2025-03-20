"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserData } from "@/types/dashboard";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

interface TopUsersListProps {
  users: UserData[];
}

export function TopUsersList({ users }: TopUsersListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between rounded-md p-2 transition-all duration-200"
          style={{
            backgroundColor:
              hoveredId === user.id
                ? "rgba(var(--accent-rgb), 0.1)"
                : "transparent",
          }}
          onMouseEnter={() => setHoveredId(user.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="flex items-center space-x-3">
            <Avatar
              className="h-8 w-8 bg-orange-500 transition-transform duration-300"
              style={{
                transform: hoveredId === user.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              <AvatarFallback className="text-white">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.category}</p>
            </div>
          </div>
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              hoveredId === user.id ? "text-primary scale-110" : ""
            }`}
          >
            {formatCurrency(user.amount)}
          </span>
        </li>
      ))}
    </ul>
  );
}
