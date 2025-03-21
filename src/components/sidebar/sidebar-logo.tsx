import Link from "next/link";
import Image from "next/image";

/**
 * Props for the SidebarLogo component
 * @interface SidebarLogoProps
 * @property {boolean} isCollapsed - Whether the sidebar is in collapsed state
 */
interface SidebarLogoProps {
  isCollapsed: boolean;
}

/**
 * SidebarLogo Component
 * Displays the application logo in the sidebar
 * Adapts display based on the collapsed state of the sidebar
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isCollapsed - Whether the sidebar is collapsed
 * @returns {React.JSX.Element} The rendered sidebar logo
 */
export function SidebarLogo({ isCollapsed }: SidebarLogoProps) {
  return (
    <div className="flex h-10 items-center justify-center px-4">
      {/* Full logo with image when sidebar is expanded */}
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
          {/* Text logo is commented out but can be enabled if needed */}
          {/* <span>Admin Dashboard</span> */}
        </Link>
      )}
      {/* Simplified dot logo when sidebar is collapsed */}
      {isCollapsed && <div className="w-6 h-6 rounded-full bg-primary" />}
    </div>
  );
}
