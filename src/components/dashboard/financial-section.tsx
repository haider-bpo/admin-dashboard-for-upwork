import { FinancialOverviewCard } from "./cards/financial-overview-card";
import { OrderSpendingCard } from "./cards/order-spending-card";

interface FinancialSectionProps {
  isLoaded: boolean;
}

export function FinancialSection({ isLoaded }: FinancialSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 transition-opacity duration-700"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "600ms",
      }}
    >
      <FinancialOverviewCard />
      <OrderSpendingCard />
    </div>
  );
}
