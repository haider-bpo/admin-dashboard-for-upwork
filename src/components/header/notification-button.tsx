import { Bell } from "lucide-react";

/**
 * NotificationButton Component
 * Displays a notification bell icon in the header with an indicator badge
 * Shows when the user has unread notifications
 *
 * @returns {React.JSX.Element} The rendered notification button
 */
export function NotificationButton() {
  return (
    <div className="relative">
      {/* Bell icon with styled border */}
      <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-solid border-gradient-to-b from-cyan-500/50 to-teal-900/50">
        <Bell className="h-6 w-6 text-white" />
      </div>
      {/* Red notification indicator dot */}
      <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500"></span>
    </div>
  );
}
