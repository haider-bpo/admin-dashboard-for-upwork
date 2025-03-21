/**
 * SubscribersSection Component
 * Displays subscriber-related lists in a responsive grid layout
 */
import { subscribersData } from "@/data/subscribers-data";
import { HallOfFamersList } from "./lists/hall-of-famers-list";
import { SubscribersList } from "./lists/subscribers-list";

/**
 * Props for the SubscribersSection component
 * @interface SubscribersSectionProps
 * @property {boolean} isLoaded - Controls animation and visibility state
 */
interface SubscribersSectionProps {
  isLoaded: boolean;
}

/**
 * SubscribersSection Component
 * Renders a three-column grid of subscriber-related lists with animation
 * Includes hall of famers and different subscriber categories
 *
 * @param {Object} props - Component properties
 * @param {boolean} props.isLoaded - Whether the component should animate in
 * @returns {React.JSX.Element} The rendered subscribers section
 */
export function SubscribersSection({ isLoaded }: SubscribersSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700"
      style={{
        // Animation properties controlled by the isLoaded state
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "400ms", // Delayed animation after statistics cards
      }}
    >
      {/* Three columns of subscriber-related lists */}
      <HallOfFamersList />
      <SubscribersList
        title="All Stars - Loyal Subscribers"
        subscribers={subscribersData}
      />
      <SubscribersList
        title="The Bench - Unsubscribers"
        subscribers={subscribersData}
      />
    </div>
  );
}
