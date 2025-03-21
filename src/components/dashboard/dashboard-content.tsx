"use client";

import { useState, useEffect } from "react";
import { StatisticsCards } from "./statistics-cards";
import { SubscribersSection } from "./subscribers-section";
import { FinancialSection } from "./financial-section";
import { ProductsAndUsersSection } from "./products-users-section";

/**
 * DashboardContent Component
 * Main content container for the dashboard page that renders all dashboard sections
 * Manages loading state for staggered animations of dashboard elements
 *
 * @returns {React.JSX.Element} The fully assembled dashboard content
 */
export function DashboardContent() {
  // State to track if dashboard components have finished "loading" animation
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Effect to simulate data loading and trigger animations
   * Sets isLoaded to true after a short delay to create a staggered animation effect
   */
  useEffect(() => {
    // Small timeout to create a staggered loading effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Main dashboard sections with loading state passed for animations */}
      <StatisticsCards isLoaded={isLoaded} />
      <SubscribersSection isLoaded={isLoaded} />
      <FinancialSection isLoaded={isLoaded} />
      <ProductsAndUsersSection isLoaded={isLoaded} />
    </div>
  );
}
