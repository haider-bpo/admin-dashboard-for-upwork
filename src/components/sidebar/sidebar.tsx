import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarNav, sidebarNav2 } from "@/config/dashboard";
import { SidebarLogo } from "./sidebar-logo";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
}

export function Sidebar({ className, isCollapsed }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-4 h-screen bg-background ",
        className
      )}
    >
      <div className="py-4">
        <SidebarLogo isCollapsed={isCollapsed} />
      </div>
      <ScrollArea className="flex-1 overflow-auto">
        <nav className="grid gap-1 gap-y-5 px-2 py-2">
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

        <div className="my-10"></div>

        <nav className="grid gap-1 gap-y-5 px-2 py-2">
          {sidebarNav2.map((item, index) => (
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
