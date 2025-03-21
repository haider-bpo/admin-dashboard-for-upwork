import { memo } from "react";

/**
 * Props for the statistics card component
 * @property {string} title - The title of the statistic
 * @property {string} value - The value to display
 * @property {string} description - Additional description text
 * @property {string} icon - Path to the icon image
 */
interface StatisticsCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

/**
 * A card displaying a single statistic with icon
 * Used in dashboard overview to show key metrics
 */
export const StatisticsCard = memo(function StatisticsCard({
  title,
  value,
  description,
  icon,
}: StatisticsCardProps) {
  return (
    <div
      className="relative bg-gradient w-full h-24 rounded-4xl overflow-hidden"
      role="region"
      aria-label={`${title}: ${value}`}
    >
      <div className="flex gap-12 h-full px-6 py-4">
        <div
          className="flex justify-between items-center w-16 h-16 bg-white/10 rounded-full border border-[#FF4AE7]"
          aria-hidden="true"
        >
          <img src={icon} alt="" className="h-7 w-7 m-auto" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold" aria-hidden="true">
            {value}
          </div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
});

// Display name for debugging
StatisticsCard.displayName = "StatisticsCard";
