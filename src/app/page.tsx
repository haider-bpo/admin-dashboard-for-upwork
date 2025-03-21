import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";

/**
 * Home Page Component
 * Serves as the entry point and root route (/) of the application
 * Combines the dashboard layout with content components
 *
 * @returns {React.JSX.Element} The fully rendered home page
 */
export default function Home() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  );
}
