"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

/**
 * Dashboard context state interface
 */
interface DashboardContextState {
  // View states
  currentView: string;
  setCurrentView: (view: string) => void;

  // Data loading states
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Refresh data trigger
  refreshData: () => Promise<void>;

  // Filter states
  activeFilters: Record<string, any>;
  setFilter: (key: string, value: any) => void;
  clearFilters: () => void;
}

/**
 * Default context state
 */
const defaultState: DashboardContextState = {
  currentView: "overview",
  setCurrentView: () => {},
  isLoading: false,
  setIsLoading: () => {},
  refreshData: async () => {},
  activeFilters: {},
  setFilter: () => {},
  clearFilters: () => {},
};

/**
 * Dashboard context
 */
const DashboardContext = createContext<DashboardContextState>(defaultState);

/**
 * Dashboard provider props
 */
interface DashboardProviderProps {
  children: ReactNode;
}

/**
 * Dashboard context provider component
 */
export function DashboardProvider({ children }: DashboardProviderProps) {
  // View state
  const [currentView, setCurrentView] = useState<string>("overview");

  // Loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Filters state
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  /**
   * Set a specific filter value
   */
  const setFilter = useCallback((key: string, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setActiveFilters({});
  }, []);

  /**
   * Refresh dashboard data
   */
  const refreshData = useCallback(async () => {
    try {
      setIsLoading(true);
      // API calls would go here
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Failed to refresh dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Context value
  const value = {
    currentView,
    setCurrentView,
    isLoading,
    setIsLoading,
    refreshData,
    activeFilters,
    setFilter,
    clearFilters,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

/**
 * Custom hook to use the dashboard context
 */
export function useDashboard() {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }

  return context;
}
