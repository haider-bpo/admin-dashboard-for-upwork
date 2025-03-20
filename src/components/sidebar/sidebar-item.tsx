import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  title: string;
  isCollapsed: boolean;
}

export function SidebarItem({
  href,
  icon: Icon,
  title,
  isCollapsed,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
        isCollapsed && "justify-center"
      )}
    >
      <Icon className="h-4 w-4" />
      {!isCollapsed && <span>{title}</span>}
    </Link>
  );
}
