import { AppUsageCard } from "./cards/app-usage-card";
import { RemixedProductsCard } from "./cards/remixed-products-card";

interface ProductsAndUsersSectionProps {
  isLoaded: boolean;
}

export function ProductsAndUsersSection({
  isLoaded,
}: ProductsAndUsersSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 transition-opacity duration-700"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "800ms",
      }}
    >
      <RemixedProductsCard/>
      <AppUsageCard/>
    </div>
  );
}
