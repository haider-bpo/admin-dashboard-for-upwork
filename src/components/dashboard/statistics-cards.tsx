/**
 * StatisticsCards Component
 * Renders a grid of statistics cards with staggered animation effects
 * Uses data from the statistics-data source file
 */
import { statisticsData } from "@/data/statistics-data";
import { StatisticsCard } from "./cards/statistics-card";

/**
 * Props for the StatisticsCards component
 * @interface StatisticsCardsProps
 * @property {boolean} isLoaded - Whether the component should show as loaded (controls animations)
 */
interface StatisticsCardsProps {
  isLoaded: boolean;
}

/**
 * StatisticsCards Component
 * Displays a responsive grid of statistics cards with loading animations
 * Each card appears with a staggered delay for a more engaging UI
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLoaded - Controls visibility and animation state
 * @returns {React.JSX.Element} Grid of animated statistics cards
 */
export function StatisticsCards({ isLoaded }: StatisticsCardsProps) {
  return (
    <div
      className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {statisticsData.map((card, index) => (
        <div
          key={index}
          className="transition-all duration-700 ease-out transform"
          style={{
            // Add a staggered delay based on the card's position
            transitionDelay: `${index * 100}ms`,
            // Create a sliding-up animation effect
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
      ))}
    </div>
  );
}
