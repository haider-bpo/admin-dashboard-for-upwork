import { useState, useCallback } from "react";

/**
 * Custom hook to manage loading states with animation delays
 * @param {Record<string, boolean>} initialState - Initial loading state for sections
 * @returns {Object} Loading state utilities
 */
export function useLoadingState(initialState: Record<string, boolean> = {}) {
  // Track loading states for individual sections
  const [loadedSections, setLoadedSections] =
    useState<Record<string, boolean>>(initialState);

  // Overall loading state
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Utility to wait for specified delay
   * @param {number} ms - Milliseconds to delay
   * @returns {Promise<void>}
   */
  const wait = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * Load a specific section with delay
   * @param {string} section - Section name to mark as loaded
   * @param {number} delay - Delay in milliseconds before marking as loaded
   * @returns {Promise<void>}
   */
  const loadSection = useCallback(
    async (section: string, delay: number = 0): Promise<void> => {
      if (delay > 0) {
        await wait(delay);
      }

      setLoadedSections((prev) => ({
        ...prev,
        [section]: true,
      }));

      // Check if all sections are now loaded
      const updatedSections = {
        ...loadedSections,
        [section]: true,
      };

      const allLoaded = Object.values(updatedSections).every(
        (state) => state === true
      );
      if (allLoaded && !isLoaded) {
        setIsLoaded(true);
      }
    },
    [loadedSections, isLoaded]
  );

  /**
   * Reset all loading states to initial values
   */
  const resetLoadingState = useCallback(() => {
    setLoadedSections(initialState);
    setIsLoaded(false);
  }, [initialState]);

  return {
    isLoaded,
    loadedSections,
    loadSection,
    resetLoadingState,
  };
}
