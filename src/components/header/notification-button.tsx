import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationButton() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Bell className="h-5 w-5" />
      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
    </Button>
  );
}
