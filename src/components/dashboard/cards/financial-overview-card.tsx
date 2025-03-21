"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { financialData } from "@/data/financial-data";
import { PieChart } from "../charts/pie-chart";
import Image from "next/image";

export function FinancialOverviewCard() {
  return (
    <Card className="overflow-hidden bg-gradient">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-6">
        <div>
          <CardTitle className="text-xl font-bold text-white">
            Financial Overview
          </CardTitle>
          <p className="text-gray-400 text-sm mt-1">
            You can track all users data here
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
      <CardContent className="px-6 pb-6 flex justify-between items-center">
        <div className="flex flex-col space-y-8">
          {financialData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  border: `2px solid ${item.color}`,
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.icon === "dollar" && (
                  <Image
                    src="/icons/dollar.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
                {item.icon === "credit-card" && (
                  <Image
                    src="/icons/subscrptions.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
                {item.icon === "coin" && (
                  <Image
                    src="/icons/coin-income.png"
                    alt="Fire"
                    width={18}
                    height={18}
                    className="text-white"
                  />
                )}
              </div>
              <div className="ml-4 max-w-40 text-wrap">
                <div className="text-2xl font-bold text-white">
                  ${item.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[250px] h-[250px] mt-2">
          <PieChart data={financialData} />
        </div>
      </CardContent>
    </Card>
  );
}
