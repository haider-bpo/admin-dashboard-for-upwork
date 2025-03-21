/**
 * ProductsAndUsersSection Component
 * Contains cards for remixed products and app usage data
 */
import { AppUsageCard } from "./cards/app-usage-card";
import { RemixedProductsCard } from "./cards/remixed-products-card";

/**
 * Props for the ProductsAndUsersSection component
 * @interface ProductsAndUsersSectionProps
 * @property {boolean} isLoaded - Controls animation and visibility state
 */
interface ProductsAndUsersSectionProps {
  isLoaded: boolean;
}

/**
 * ProductsAndUsersSection Component
 * Displays product and user activity data in a responsive two-column grid with animation
 * Shows up as the last section on the dashboard with the longest animation delay
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLoaded - Whether the component should animate in
 * @returns {React.JSX.Element} The rendered products and users section
 */
export function ProductsAndUsersSection({
  isLoaded,
}: ProductsAndUsersSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 transition-opacity duration-700"
      style={{
        // Animation properties controlled by the isLoaded state
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "800ms", // Longest delay, appears after financial section
      }}
    >
      <RemixedProductsCard />
      <AppUsageCard />
    </div>
  );
}
