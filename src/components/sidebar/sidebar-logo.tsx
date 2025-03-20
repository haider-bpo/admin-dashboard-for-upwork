import Link from "next/link";

interface SidebarLogoProps {
  isCollapsed: boolean;
}

export function SidebarLogo({ isCollapsed }: SidebarLogoProps) {
  return (
    <div className="flex h-10 items-center justify-center px-4">
      {!isCollapsed && (
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="w-6 h-6 rounded-full bg-primary" />
          <span>Admin Dashboard</span>
        </Link>
      )}
      {isCollapsed && <div className="w-6 h-6 rounded-full bg-primary" />}
    </div>
  );
}
