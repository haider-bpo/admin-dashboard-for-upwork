"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { orderData } from "@/data/order-data";
import { useState } from "react";
import { BarChart } from "../charts/bar-chart";

export function OrderSpendingCard() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">
          Orders Spending Projects
        </CardTitle>
        <Button variant="ghost" size="sm">
          This Month <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <BarChart
          data={orderData}
          className={
            isHovering
              ? "scale-105 transition-all duration-500"
              : "transition-all duration-500"
          }
        />
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF8A48]/40 to-[#FFC078]/40"></div>
    </Card>
  );
}
