import { MenuIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { NotificationButton } from "./notification-button";
import { UserNav } from "./user-nav";

/**
 * HeaderProps interface
 * @property {Function} onToggleSidebar - Function to toggle sidebar visibility
 * @property {boolean} isCollapsed - Whether the sidebar is currently collapsed
 * @property {boolean} isMobile - Whether the viewport is mobile size
 */
interface HeaderProps {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
  isMobile?: boolean;
}

/**
 * Header component for the dashboard
 * Contains navigation controls, page title, notifications and user menu
 */
export function Header({
  onToggleSidebar,
  isCollapsed,
  isMobile = false,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background pb-2">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className={`mr-2 ${
              isMobile ? "flex" : isCollapsed ? "md:flex" : "md:hidden"
            }`}
            aria-label="Toggle sidebar"
          >
            <span className="sr-only">Toggle sidebar</span>
            <MenuIcon className="h-5 w-5" />
          </Button>
          <div className="relative flex items-center">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">
              General Statistics
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NotificationButton />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
