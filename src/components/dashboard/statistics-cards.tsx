// StatisticsCards.tsx
import { statisticsData } from "@/data/statistics-data";
import { StatisticsCard } from "./cards/statistics-card";
import { StatisticsCardData } from "@/types/dashboard";

/**
 * Props for the StatisticsCards component
 * @property {boolean} isLoaded - Whether this section's data has loaded
 */
interface StatisticsCardsProps {
  isLoaded: boolean;
}

/**
 * Renders a grid of statistics cards with staggered animations
 * Displays high-level statistics with their respective icons
 */
export function StatisticsCards({ isLoaded }: StatisticsCardsProps) {
  return (
    <section aria-label="Key Statistics" className="mb-6">
      <h2 className="sr-only">Key Statistics</h2>
      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {statisticsData.map((card: StatisticsCardData, index: number) => (
          <StatisticsCardWrapper
            key={`stat-card-${index}`}
            card={card}
            index={index}
            isLoaded={isLoaded}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Wrapper component for individual statistics cards with animation
 */
function StatisticsCardWrapper({
  card,
  index,
  isLoaded,
}: {
  card: StatisticsCardData;
  index: number;
  isLoaded: boolean;
}) {
  return (
    <div
      className="transition-all duration-700 ease-out transform"
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <StatisticsCard
        title={card.title}
        value={card.value}
        description={card.description}
        icon={card.icon}
      />
    </div>
  );
}
