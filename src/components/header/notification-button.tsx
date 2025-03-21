import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationButton() {
  return (
    <div className="relative">
      <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-solid border-gradient-to-b from-cyan-500/50 to-teal-900/50">
        <Bell className="h-6 w-6 text-white" />
      </div>
      <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500"></span>
    </div>
  );
}
