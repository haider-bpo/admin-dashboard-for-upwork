import { MenuIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { NotificationButton } from "./notification-button";
import { UserNav } from "./user-nav";

interface HeaderProps {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}

export function Header({ onToggleSidebar, isCollapsed }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className={`mr-2 ${isCollapsed ? "md:flex" : "md:hidden"}`}
          >
            <span className="sr-only">Toggle sidebar</span>
            <MenuIcon className="h-5 w-5" />
          </Button>
          <div className="relative flex items-center">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">
              General Statistics
            </h2>
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
