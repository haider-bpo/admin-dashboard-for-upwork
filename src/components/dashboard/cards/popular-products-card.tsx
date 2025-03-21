import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { productsData } from "@/data/products-data";
import { PopularProductsList } from "../lists/popular-products-list";

export function PopularProductsCard() {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
    style={{
      background:
        "linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(0, 8, 153, 0.6) 100%)",
      borderTop: "1.5px solid #FFFFFF80",
      backdropFilter: "blur(50.79999923706055px)",
    }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">
          Most ordered products
        </CardTitle>
        <Button variant="ghost" size="sm">
          View all <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <PopularProductsList products={productsData} />
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7048E8]/40 to-[#7048E8]/70"></div>
    </Card>
  );
}
