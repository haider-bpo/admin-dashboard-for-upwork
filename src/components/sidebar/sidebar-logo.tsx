import Link from "next/link";
import Image from "next/image";

interface SidebarLogoProps {
  isCollapsed: boolean;
}

export function SidebarLogo({ isCollapsed }: SidebarLogoProps) {
  return (
    <div className="flex h-10 items-center justify-center px-4">
      {!isCollapsed && (
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="w-10 h-10 rounded-full relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* <span>Admin Dashboard</span> */}
        </Link>
      )}
      {isCollapsed && <div className="w-6 h-6 rounded-full bg-primary" />}
    </div>
  );
}
