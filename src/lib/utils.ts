import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 * Handles conditional classes, arrays, objects and resolves tailwind conflicts
 *
 * @param {...ClassValue[]} inputs - Any number of class values, objects, or arrays
 * @returns {string} A merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a US currency string with dollar sign
 * Removes decimal places from whole dollar amounts
 *
 * @param {number} value - The numeric value to format as currency
 * @returns {string} Formatted currency string (e.g., "$1,234")
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Formats a number with thousands separators
 * Uses US locale formatting (commas as thousands separators)
 *
 * @param {number} value - The numeric value to format
 * @returns {string} Formatted number string (e.g., "1,234,567")
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
