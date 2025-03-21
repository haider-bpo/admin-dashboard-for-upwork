"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

/**
 * Main layout component for the dashboard
 * Handles sidebar collapse state, scroll detection, and responsive layout
 */
export function DashboardLayout({ children }: React.PropsWithChildren) {
  // State for UI controls
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Toggle sidebar collapse state
   */
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  /**
   * Handle window resize and scroll events
   */
  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Handle scroll for sticky header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial states
    checkIfMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);
    setIsMounted(true);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background pt-5">
      {/* Sidebar container - hidden on mobile */}
      <div
        className={cn(
          "hidden md:block relative flex-shrink-0 transition-all duration-300 gradient-background",
          isCollapsed ? "w-16" : "w-60"
        )}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </div>

      {/* Main content container */}
      <div className="flex-1 overflow-auto">
        <Header
          isCollapsed={isCollapsed}
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />

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
