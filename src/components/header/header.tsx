import { MenuIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { NotificationButton } from "./notification-button";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";

interface HeaderProps {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
}

export function Header({ isCollapsed, onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="mr-2 md:hidden"
          >
            <span className="sr-only">Toggle sidebar</span>
            <MenuIcon className="h-5 w-5" />
          </Button>
          <div className="relative flex items-center">
            <h2 className="text-xl font-bold tracking-tight">
              General Statistics
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SearchInput />
          <NotificationButton />
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
