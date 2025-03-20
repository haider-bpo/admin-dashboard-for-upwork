import { statisticsData } from "@/data/statistics-data";
import { StatisticsCard } from "./cards/statistics-card";

interface StatisticsCardsProps {
  isLoaded: boolean;
}

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
      ))}
    </div>
  );
}
