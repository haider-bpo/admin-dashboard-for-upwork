import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarItemProps {
  href: string;
  icon: string;
  title: string;
  isCollapsed: boolean;
}

export function SidebarItem({
  href,
  icon,
  title,
  isCollapsed,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-white/10 text-white font-bold border-2 border-white rounded-full"
          : "text-white font-bold transition-all duration-100 hover:ps-4 hover:bg-accent hover:border-1 hover:rounded-full hover:text-accent-foreground",
        isCollapsed && "justify-center"
      )}
    >
      <Image
        src={icon}
        alt={title}
        width={16}
        height={16}
        className={cn("h-4 w-4", isActive && "brightness-150")}
      />
      {!isCollapsed && <span>{title}</span>}
    </Link>
  );
}
