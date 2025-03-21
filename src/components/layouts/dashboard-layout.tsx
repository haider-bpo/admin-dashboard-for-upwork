"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

export function DashboardLayout({ children }: React.PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle scroll events for sticky elements
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    setIsMounted(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div
        className={cn(
          "hidden md:block relative w-46 flex-shrink-0 transition-all duration-300 gradient-background",
          isCollapsed && "w-16"
        )}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </div>
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
