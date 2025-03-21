import {
  ProductData,
  RemixedProductData,
  AppUsageData,
} from "@/types/dashboard";

export const productsData: ProductData[] = [
  {
    id: 1,
    name: "Product Name",
    category: "Category",
    image: "/placeholder-product.jpg",
    rating: 4.5,
    sales: 5400,
    revenue: 7500,
  },
  {
    id: 2,
    name: "Product Name",
    category: "Category",
    image: "/placeholder-product.jpg",
    rating: 4.8,
    sales: 5200,
    revenue: 6900,
  },
  {
    id: 3,
    name: "Product Name",
    category: "Category",
    image: "/placeholder-product.jpg",
    rating: 4.3,
    sales: 6300,
    revenue: 9400,
  },
];

export const remixedProductsData: RemixedProductData[] = [
  {
    id: 1,
    name: "Product Name",
    image: "/avatars/remixer-product-avatar-1.png",
    date: "12.10.2024",
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
  {
    id: 2,
    name: "Product Name",
    image: "/avatars/remixer-product-avatar-2.png",
    date: "12.10.2024",
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
  {
    id: 3,
    name: "Product Name",
    image: "/avatars/remixer-product-avatar-3.png",
    date: "12.10.2024",
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
];

export const appUsageData: AppUsageData[] = [
  {
    id: 1,
    name: "App Name",
    image: "/placeholder-app-1.jpg",
    date: "12.10.2024",
    timeUsed: 4500,
  },
  {
    id: 2,
    name: "App Name",
    image: "/placeholder-app-2.jpg",
    date: "12.10.2024",
    timeUsed: 4500,
  },
  {
    id: 3,
    name: "App Name",
    image: "/placeholder-app-3.jpg",
    date: "12.10.2024",
    timeUsed: 4500,
  },
  {
    id: 4,
    name: "App Name",
    image: "/placeholder-app-4.jpg",
    date: "12.10.2024",
    timeUsed: 4500,
  },
  {
    id: 5,
    name: "App Name",
    image: "/placeholder-app-5.jpg",
    date: "12.10.2024",
    timeUsed: 4500,
  },
];
