// src/types/shared.types.ts

// AxiosError Import
import { AxiosError } from 'axios';

// Export type
export type CustomAxiosErrorType = AxiosError<{
  message: string;
}>;
