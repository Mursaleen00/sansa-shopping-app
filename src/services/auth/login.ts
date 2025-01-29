// src/services/auth/login.ts

// React Query Imports
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// API & Service Imports
import { POST } from '@/services/axios-request-handler';

// Custom Types Imports
import { CustomAxiosErrorType } from '@/types/shared.types';
import { LoginType } from '@/types/users/login-user';

// Base URLS
import { URLS } from '../base-urls';

// Export interface payload
export interface payload {
  username: string;
  password: string;
  expiresInMins: number;
}

export const useLoginMutation = (): UseMutationResult<
  unknown,
  Error,
  payload
> => {
  const LoginFn = async (payload: payload): Promise<LoginType> => {
    // response
    const response = await POST(URLS.LOGIN_USER, payload);
    return response as LoginType;
  };

  return useMutation({
    mutationFn: LoginFn,
    onSuccess: (message, variables, context) => {
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: CustomAxiosErrorType) => {
      return {
        error:
          error?.response?.data?.message ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
