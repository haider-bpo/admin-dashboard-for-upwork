"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

/**
 * DashboardLayout Component
 * Provides the main application layout structure with responsive sidebar and header
 * Handles sidebar collapse state, scroll detection, and client-side mounting logic
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 * @returns {React.JSX.Element | null} The dashboard layout or null during SSR to prevent hydration issues
 */
export function DashboardLayout({ children }: React.PropsWithChildren) {
  // State for sidebar collapse, component mounting, and scroll position
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Toggles the sidebar between collapsed and expanded states
   */
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  /**
   * Effect to handle scroll events and component mounting
   * Sets up scroll event listener and handles cleanup on unmount
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener and set component as mounted
    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return null during SSR to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background pt-5">
      {/* Sidebar container with responsive behavior */}
      <div
        className={cn(
          "hidden md:block relative w-60 flex-shrink-0 transition-all duration-300 gradient-background",
          isCollapsed && "w-16"
        )}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      {/* Main content area with header and scrollable content */}
      <div className="flex-1 overflow-auto">
        <Header isCollapsed={isCollapsed} onToggleSidebar={toggleSidebar} />
        <main
          className={cn(
            "flex-1 overflow-y-auto p-4 md:p-6 pt-4",
            isScrolled && "pt-16 md:pt-6"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
