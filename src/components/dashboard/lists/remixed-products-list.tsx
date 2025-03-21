"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RemixedProductData } from "@/types/dashboard";
import Image from "next/image";

interface RemixedProductsListProps {
  products: RemixedProductData[];
}

export function RemixedProductsList({ products }: RemixedProductsListProps) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center space-x-5  p-4">
          <Avatar className="h-18 w-16 rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl">
            <AvatarImage
              className="!bg-black/40"
              src={product.image}
              alt={product.name}
            />
            <AvatarFallback className="rounded-lg">
              {product.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="text-md font-medium text-white">{product.name}</h3>
            <span className="text-sm text-gray-400">{product.date}</span>
          </div>

          <div className="ml-auto flex items-center space-x-14">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/history.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-5 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white">
                    {product.timeRemixed}
                  </span>
                  <span className="text-xs text-gray-400">Time Remixed</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/download.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-5 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white">
                    {product.downloads}
                  </span>
                  <span className="text-xs text-gray-400">Download</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Image
                  src="/icons/views.png"
                  alt="Fire"
                  width={18}
                  height={18}
                  className="mr-2 mb-2 h-4 w-5 text-white"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white">
                    {product.views}
                  </span>
                  <span className="text-xs text-gray-400">Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
