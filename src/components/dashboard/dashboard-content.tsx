"use client";

import { useState, useEffect } from "react";
import { StatisticsCards } from "./statistics-cards";
import { SubscribersSection } from "./subscribers-section";
import { FinancialSection } from "./financial-section";
import { ProductsAndUsersSection } from "./products-users-section";
import { useLoadingState } from "@/hooks/use-loading-state";

/**
 * Main dashboard content component
 * Manages progressive loading animations and renders all dashboard sections
 */
export function DashboardContent() {
  // Use custom hook for managing loading states
  const { isLoaded, loadedSections, loadSection } = useLoadingState({
    statistics: false,
    subscribers: false,
    financial: false,
    productsUsers: false,
  });

  // Progressive loading animation sequence
  useEffect(() => {
    const loadSequence = async () => {
      // Load statistics first
      await loadSection("statistics", 100);

      // Load subscribers section after delay
      await loadSection("subscribers", 200);

      // Load financial data after delay
      await loadSection("financial", 300);

      // Finally load products and users section
      await loadSection("productsUsers", 400);
    };

    loadSequence();
  }, [loadSection]);

  return (
    <div className="space-y-6">
      <StatisticsCards isLoaded={loadedSections.statistics} />
      <SubscribersSection isLoaded={loadedSections.subscribers} />
      <FinancialSection isLoaded={loadedSections.financial} />
      <ProductsAndUsersSection isLoaded={loadedSections.productsUsers} />
    </div>
  );
}
