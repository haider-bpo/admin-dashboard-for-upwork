import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarNav, sidebarNav2 } from "@/config/dashboard";
import { SidebarLogo } from "./sidebar-logo";
import { SidebarItem } from "./sidebar-item";

/**
 * Props for the Sidebar component
 * @interface SidebarProps
 * @extends {React.HTMLAttributes<HTMLDivElement>} - Extends HTML div element attributes
 * @property {boolean} isCollapsed - Controls whether the sidebar is in collapsed state
 */
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
}

/**
 * Sidebar Component
 * Provides navigation for the dashboard with collapsible functionality
 * Renders two groups of navigation items from configuration
 *
 * @param {Object} props - Component properties
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed
 * @returns {React.JSX.Element} The rendered sidebar
 */
export function Sidebar({ className, isCollapsed }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-4 h-screen bg-background ",
        className
      )}
    >
      {/* Logo section at the top */}
      <div className="py-4">
        <SidebarLogo isCollapsed={isCollapsed} />
      </div>

      {/* Scrollable navigation area */}
      <ScrollArea className="flex-1 overflow-auto">
        {/* Primary navigation items */}
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

        {/* Spacer between navigation groups */}
        <div className="my-10"></div>

        {/* Secondary navigation items (settings, help, etc.) */}
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
