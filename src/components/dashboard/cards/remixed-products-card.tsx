import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { remixedProductsData } from "@/data/products-data";
import { RemixedProductsList } from "../lists/remixed-products-list";
import { ViewAllButton } from "../lists/view-all-button";

export function RemixedProductsCard() {
  return (
    <Card
      className="overflow-hidden bg-gradient transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-bold text-white">
          Most remixed products
        </CardTitle>
        <ViewAllButton />
      </CardHeader>
      <CardContent>
        <RemixedProductsList products={remixedProductsData} />
      </CardContent>
    </Card>
  );
}
