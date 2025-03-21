import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appUsageData } from "@/data/products-data";
import { AppUsageList } from "../lists/app-usage-list";
import { ViewAllButton } from "../lists/view-all-button";

export function AppUsageCard() {
  return (
    <Card className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-6">
        <CardTitle className="text-xl font-bold text-white">
          Top used apps
        </CardTitle>
        <ViewAllButton />
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <AppUsageList apps={appUsageData} />
      </CardContent>
    </Card>
  );
}
