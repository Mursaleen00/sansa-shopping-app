// src/services/user/get-me.ts

// Types Import
import { MeTypes } from '@/types/users/me';
// React Query Import
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// GET Import
import { GET } from '../axios-request-handler';

// Base URlS Import
import { URLS } from '../base-urls';

// Export useGetMeHook
export const useGetMeHook = (): UseQueryResult<MeTypes, Error> => {
  const GetAllProductsFn = async (): Promise<MeTypes> => {
    // Response
    const response = await GET(URLS.GET_ME);
    return response as MeTypes;
  };

  // Query
  return useQuery({
    queryFn: GetAllProductsFn,
    queryKey: ['me'],
  });
};
