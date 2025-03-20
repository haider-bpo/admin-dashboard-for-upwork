"use client";

import { useState, useEffect } from "react";
import { StatisticsCards } from "./statistics-cards";
import { SubscribersSection } from "./subscribers-section";
import { FinancialSection } from "./financial-section";
import { ProductsAndUsersSection } from "./products-users-section";

export function DashboardContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate data loading for animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <StatisticsCards isLoaded={isLoaded} />
      <SubscribersSection isLoaded={isLoaded} />
      <FinancialSection isLoaded={isLoaded} />
      <ProductsAndUsersSection isLoaded={isLoaded} />
    </div>
  );
}
