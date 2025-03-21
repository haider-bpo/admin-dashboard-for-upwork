"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppUsageData } from "@/types/dashboard";
import Image from "next/image";

interface AppUsageListProps {
  apps: AppUsageData[];
}

export function AppUsageList({ apps }: AppUsageListProps) {
  return (
    <div className="space-y-3">
      {apps.map((app) => (
        <div key={app.id} className="flex items-center">
          <Avatar className="h-12 w-12 rounded-full p-2 bg-black/40 border-2 border-[#2e9cb2] mr-4">
            <AvatarFallback className="bg-[#F58F55]"></AvatarFallback>
          </Avatar>

          <div className="flex flex-col mr-auto">
            <h3 className="text-md font-medium text-white">{app.name}</h3>
            <span className="text-sm text-gray-400">{app.date}</span>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/window.png"
                  alt="Apps"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-4 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white">
                    {app.timeUsed}
                  </span>
                  <span className="text-xs text-gray-400">Time Used</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
