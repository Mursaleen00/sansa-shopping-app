// Types import
import { AllUsersType } from '@/types/users/all-users';

// React import
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// GET import
import { GET } from '../axios-request-handler';

// Base urls
import { URLS } from '../base-urls';

export const useGetAllUsersHook = ({
  limit,
  select,
}: {
  limit: number;
  select: string[];
}): UseQueryResult<AllUsersType, Error> => {
  // GetAllUsersFn
  const GetAllUsersFn = async (): Promise<AllUsersType> => {
    // response
    const response = await GET(URLS.GET_ALL_USER({ limit, select }));
    return response as AllUsersType;
  };

  return useQuery({
    queryFn: GetAllUsersFn,
    queryKey: ['all-users'],
  });
};
