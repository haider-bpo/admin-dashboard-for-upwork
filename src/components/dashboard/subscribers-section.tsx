import { SubscribersList } from "./lists/subscribers-list";
import { HallOfFamersList } from "./lists/hall-of-famers-list";
import { LoyalSubscribersList } from "./lists/loyal-subscribers-list";

interface SubscribersSectionProps {
  isLoaded: boolean;
}

export function SubscribersSection({ isLoaded }: SubscribersSectionProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transitionDelay: "400ms",
      }}
    >
      <HallOfFamersList />
      <LoyalSubscribersList />
      <SubscribersList title="The Bench - Unsubscribers" />
    </div>
  );
}
