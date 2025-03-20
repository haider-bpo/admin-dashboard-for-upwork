import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarNav } from "@/config/dashboard";
import { SidebarLogo } from "./sidebar-logo";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
}

export function Sidebar({ className, isCollapsed }: SidebarProps) {
  return (
    <div className={cn("flex flex-col h-screen bg-background", className)}>
      <div className="py-4">
        <SidebarLogo isCollapsed={isCollapsed} />
      </div>
      <ScrollArea className="flex-1 overflow-auto">
        <nav className="grid gap-1 px-2 py-2">
          {sidebarNav.map((item, index) => (
            <SidebarItem
              key={index}
              href={item.href}
              icon={item.icon!}
              title={item.title}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
