// src/lib/cn-utils.ts

// clsx Import
import { type ClassValue, clsx } from 'clsx';

// Tailwind Merge Import
import { twMerge } from 'tailwind-merge';

// Export Cn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
