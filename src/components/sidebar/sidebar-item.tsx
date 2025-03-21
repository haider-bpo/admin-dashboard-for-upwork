import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

/**
 * Props for the SidebarItem component
 * @interface SidebarItemProps
 * @property {string} href - URL the item links to
 * @property {string} icon - Path to the icon image
 * @property {string} title - Display text for the item
 * @property {boolean} isCollapsed - Whether the sidebar is in collapsed state
 */
interface SidebarItemProps {
  href: string;
  icon: string;
  title: string;
  isCollapsed: boolean;
}

/**
 * SidebarItem Component
 * Renders a single navigation item in the sidebar
 * Handles active state styling based on current route
 * Adapts display based on collapsed state of the sidebar
 *
 * @param {Object} props - Component properties
 * @param {string} props.href - URL the item links to
 * @param {string} props.icon - Path to the icon image
 * @param {string} props.title - Display text for the item
 * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed
 * @returns {React.JSX.Element} The rendered sidebar item
 */
export function SidebarItem({
  href,
  icon,
  title,
  isCollapsed,
}: SidebarItemProps) {
  // Get current path to determine if this item is active
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
        // Apply different styles based on active state
        isActive
          ? "bg-white/10 text-white font-bold border-2 border-white rounded-full"
          : "text-white font-bold transition-all duration-100 hover:ps-4 hover:bg-accent hover:border-1 hover:rounded-full hover:text-accent-foreground",
        // Center items when sidebar is collapsed
        isCollapsed && "justify-center"
      )}
    >
      {/* Icon for the navigation item */}
      <Image
        src={icon}
        alt={title}
        width={16}
        height={16}
        className={cn("h-4 w-4", isActive && "brightness-150")}
      />
      {/* Only show text when sidebar is expanded */}
      {!isCollapsed && <span>{title}</span>}
    </Link>
  );
}
