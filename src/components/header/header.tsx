import { MenuIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { NotificationButton } from "./notification-button";
import { UserNav } from "./user-nav";

/**
 * Props for the Header component
 * @interface HeaderProps
 * @property {Function} onToggleSidebar - Callback function to toggle sidebar state
 * @property {boolean} isCollapsed - Whether the sidebar is currently collapsed
 */
interface HeaderProps {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}

/**
 * Header Component
 * Provides the main application header with responsive navigation controls
 * Contains the sidebar toggle button, page title, notifications, and user navigation
 *
 * @param {Object} props - Component properties
 * @param {Function} props.onToggleSidebar - Callback to toggle sidebar state
 * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed
 * @returns {React.JSX.Element} The rendered header
 */
export function Header({ onToggleSidebar, isCollapsed }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background pb-2">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left section with toggle button and page title */}
        <div className="flex items-center">
          {/* Sidebar toggle button - visible based on sidebar state */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className={`mr-2 ${isCollapsed ? "md:flex" : "md:hidden"}`}
          >
            <span className="sr-only">Toggle sidebar</span>
            <MenuIcon className="h-5 w-5" />
          </Button>
          {/* Page title section */}
          <div className="relative flex items-center">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">
              General Statistics
            </h2>
          </div>
        </div>
        {/* Right section with notifications and user menu */}
        <div className="flex items-center gap-4">
          <NotificationButton />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
