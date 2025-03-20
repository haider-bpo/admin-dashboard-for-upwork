"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductData } from "@/types/dashboard";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

interface PopularProductsListProps {
  products: ProductData[];
}

export function PopularProductsList({ products }: PopularProductsListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <ul className="space-y-6">
      {products.map((product) => (
        <li
          key={product.id}
          className="flex items-center justify-between rounded-md p-2 transition-all duration-200"
          style={{
            backgroundColor:
              hoveredId === product.id
                ? "rgba(var(--accent-rgb), 0.1)"
                : "transparent",
          }}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="flex items-center space-x-3">
            <Avatar
              className="h-9 w-9 rounded-md transition-transform duration-300"
              style={{
                transform: hoveredId === product.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              <AvatarImage src={product.image} alt={product.name} />
              <AvatarFallback className="rounded-md">
                {product.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{product.name}</p>
              <p className="text-xs text-muted-foreground">
                {product.category}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <Star
                className={`h-3 w-3 fill-primary text-primary transition-transform duration-300 ${
                  hoveredId === product.id ? "rotate-[20deg] scale-110" : ""
                }`}
              />
              <span className="text-sm">{product.rating}</span>
            </div>
            <div className="w-20 text-right">
              <p className="text-sm font-medium">
                {formatCurrency(product.revenue)}
              </p>
              <p className="text-xs text-muted-foreground">
                {product.sales} sales
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
