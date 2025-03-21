/**
 * FinancialSection Component
 * Contains cards for financial overview and ocoin spending data
 */
import { FinancialOverviewCard } from "./cards/financial-overview-card";
import { OcoinSpendingCard } from "./cards/ocoin-spending-card";

/**
 * Props for the FinancialSection component
 * @interface FinancialSectionProps
 * @property {boolean} isLoaded - Controls animation and visibility state
 */
interface FinancialSectionProps {
  isLoaded: boolean;
}

/**
 * FinancialSection Component
 * Displays financial data in a responsive two-column grid with animation
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLoaded - Whether the component should animate in
 * @returns {React.JSX.Element} The rendered financial section
 */
export function FinancialSection({ isLoaded }: FinancialSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 transition-opacity duration-700"
      style={{
        // Animation properties controlled by the isLoaded state
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "600ms", // Delayed animation after subscribers section
      }}
    >
      <FinancialOverviewCard />
      <OcoinSpendingCard />
    </div>
  );
}
