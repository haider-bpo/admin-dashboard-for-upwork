"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ocoinSpendingData } from "@/data/order-data";
import { BarChart } from "../charts/bar-chart";

export function OcoinSpendingCard() {
  return (
    <Card className="overflow-hidden bg-gradient">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-6">
        <div>
          <CardTitle className="text-xl font-bold text-white">
            Ocoin Spending Pattern
          </CardTitle>
          <p className="text-gray-400 text-sm mt-1">
            You can track all Ocoin spending data here
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center bg-gray-800/40 text-white border border-gray-700 rounded-lg p-4 py-6"
        >
          <svg
            className="mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 2v4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 2v4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
          </svg>
          This Month <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <BarChart data={ocoinSpendingData} />
      </CardContent>
    </Card>
  );
}
