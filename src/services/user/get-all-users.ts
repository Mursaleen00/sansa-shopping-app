import { AllUsersType } from '@/types/users/all-users';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GET } from '../axios-request-handler';
import { URLS } from '../base-urls';

export const useGetAllUsersHook = ({
  limit,
  select,
}: {
  limit: number;
  select: string[];
}): UseQueryResult<AllUsersType, Error> => {
  const GetAllUsersFn = async (): Promise<AllUsersType> => {
    const response = await GET(URLS.GET_ALL_USER({ limit, select }));
    return response as AllUsersType;
  };

  return useQuery({
    queryFn: GetAllUsersFn,
    queryKey: ['all-users'],
  });
};
