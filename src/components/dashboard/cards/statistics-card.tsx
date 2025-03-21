/**
 * Props for the StatisticsCard component
 * @interface StatisticsCardProps
 * @property {string} title - The title of the statistic
 * @property {string} value - The numerical value to display
 * @property {string} description - Additional context about the value
 * @property {string} icon - Path to the icon image
 */
interface StatisticsCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

/**
 * StatisticsCard Component
 * Displays a single statistic in a stylized card format
 * Used for key metrics in the dashboard statistics section
 *
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the statistic
 * @param {string} props.value - The numerical value to display
 * @param {string} props.description - Additional context about the value
 * @param {string} props.icon - Path to the icon image
 * @returns {React.JSX.Element} The rendered statistics card
 */
export function StatisticsCard({
  title,
  value,
  description,
  icon,
}: StatisticsCardProps) {
  return (
    <div className="relative bg-gradient w-full h-24 rounded-4xl overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <div className="flex gap-12 h-full px-6 py-4">
        {/* Icon container with styled border */}
        <div className="flex justify-between items-center w-16 h-16 bg-white/10 rounded-full border border-[#FF4AE7]">
          <img src={icon} alt={`${title} icon`} className="h-7 w-7 m-auto" />
        </div>
        {/* Statistics information */}
        <div className="">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}
