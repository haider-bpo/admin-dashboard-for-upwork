"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { financialData } from "@/data/financial-data";
import { useState } from "react";
import { PieChart } from "../charts/pie-chart";

export function FinancialOverviewCard() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">
          Financial Overview
        </CardTitle>
        <Button variant="ghost" size="sm">
          This Month <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {financialData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="font-medium">{formatCurrency(item.value)}</span>
            </div>
          ))}
          <PieChart
            data={financialData}
            className={
              isHovering
                ? "scale-105 transition-all duration-500"
                : "transition-all duration-500"
            }
          />
        </div>
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF85C0]/40 via-[#7983F5]/40 to-[#4CC9F0]/40"></div>
    </Card>
  );
}
